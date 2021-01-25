import express from 'express';
const mysql = require('mysql');
const http = require("http");

const app = express();
app.use(express.json());

let db: any = undefined;

const auth = process.env.AUTH_HOST || "localhost";

function initConnection() {
    const host_db = process.env.MYSQL_HOST || "localhost";
    const user_db = process.env.MYSQL_USER || "user";
    const password_db = process.env.MYSQL_PASSWORD || "password";
    const films_db = process.env.MYSQL_DB || "db";
    const db_temp = mysql.createConnection({
        host: host_db, 
        user: user_db,
        password: password_db
    });
    // On initialise la base de données puis la table. Pour initialiser la base de données, on utilise une connexion unique; pour la suite, on utilise un pool de connexions.
    const create_db_sql = "CREATE DATABASE IF NOT EXISTS " + films_db;
    db_temp.query(create_db_sql, (err: any, result: any) => {
        if (err) throw err;
        const create_film_sql = `
            CREATE TABLE IF NOT EXISTS film(
                id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                title VARCHAR(100),
                description TEXT,
                genre VARCHAR(20),
                director VARCHAR(50),
                country VARCHAR(50),
                date DATE
            )`;
        db = mysql.createPool({
            connectionLimit : 10,
            host: host_db, 
            user: user_db,
            password: password_db,
            database: films_db
        });
        db.query(create_film_sql, (err: any, result: any) => {
            if (err) throw err;
            console.log("film is ready !");
        });
    });
}

initConnection();

function checkAuthThen(req: any, res: any, then: (req: any, res: any) => void) {
    http.get({
        hostname: auth,
        port: 8080,
        path: "/get_from_token"
    }, (resAuth: any) => {
        resAuth.on("data", () => {});
        resAuth.on("end", () => {
            if (200 <= resAuth.statusCode && resAuth.statusCode < 300) then(req, res);
            else res.status(403).end();
        });
    });
}

app.get("/get", (req, res) => {
    checkAuthThen(req, res, (req, res) => {
        const id: number = parseInt(<string> req.query.id);
        if (id) {
            const sql = "SELECT * FROM film WHERE id = ?";
            db.query(sql, id, (err: any, result: any) => {
                if (err) throw err;
                res.status(200).json(result);
            });
        } else res.status(404).end();
    });
});

app.post("/search", (req, res) => {
    checkAuthThen(req, res, (req, res) => {
        const title: string = <string> req.body.title;
        const genre: string = <string> req.body.genre;
        const director: string = <string> req.body.director;
        const country: string = <string> req.body.country;
        const date: string = <string> req.body.date;
        let filters = [];    
        if (title) filters.push(`title LIKE ${mysql.escape(title)} `);
        if (genre) filters.push(`genre LIKE ${mysql.escape(genre)} `);
        if (director) filters.push(`director LIKE ${mysql.escape(director)}`);
        if (country) filters.push(`country LIKE ${mysql.escape(country)}`);
        if (date) filters.push(`date = ${mysql.escape(date)}`);
        let sql = "SELECT * FROM film"
        if (filters.length != 0){
            sql += ' WHERE ' + filters.join(" AND ");
        }
        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
});


app.post("/add", (req, res) => {
    checkAuthThen(req, res, (req, res) => {
        const title: string = <string> req.body.title;
        const description: string = <string> req.body.description;
        const genre: string = <string> req.body.genre;
        const director: string = <string> req.body.director;
        const country: string = <string> req.body.country;
        const date: string = <string> req.body.date;
        let sql = "INSERT INTO film(title, description, genre, director, country, date) VALUES(?, ?, ?, ?, ?, ?)"
        db.query(sql, [title, description, genre, director, country, date], (err: any, result: any) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
});

app.put("/update", (req, res) => {
    checkAuthThen(req, res, (req, res) => {
        const id: number = parseInt(<string> req.query.id);
        if (id) {
            const title: string = <string> req.body.title;
            const description: string = <string> req.body.description;
            const genre: string = <string> req.body.genre;
            const director: string = <string> req.body.director;
            const country: string = <string> req.body.country;
            const date: string = <string> req.body.date;
            let data = [];
            if (title) data.push(`title = ${mysql.escape(title)}`);
            if (description)data.push(`description = ${mysql.escape(description)}`);
            if (genre) data.push(`genre = ${mysql.escape(genre)}`);
            if (director) data.push(`director = ${mysql.escape(director)}`);
            if (country) data.push(`country = ${mysql.escape(country)}`);
            if (date) data.push(`date = ${mysql.escape(date)}`);
            let sql = "UPDATE film SET ";
            if (data.length != 0) sql += data.join(", ") + " WHERE id = ?";
            else { res.status(404).end(); return; }
            db.query(sql, id, (err: any, result: any) => {
                if (err) throw err;
                res.status(200).json(result);
            });
        } else res.status(404).end();
    });
});

app.put("/archive", (req, res) => {
    // TODO : Not MVP
});


export default app;
