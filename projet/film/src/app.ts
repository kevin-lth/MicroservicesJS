import express from 'express';
const mysql = require('mysql');

const app = express();
app.use(express.json());

let db: any = undefined;

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
                directory VARCHAR(50),
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
            console.log("films is ready !");
        });
    });
}

initConnection();

app.get("/get", (req, res) => {
    const id: number = parseInt(<string> req.query.id);
    if (id) {
        const sql = "SELECT * FROM film WHERE id = ?";
        db.query(sql, id, (err: any, result: any) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    } else res.status(404).end();
});

app.post("/search", (req, res) => {
    const title: string = <string> req.body.title;
    const genre: string = <string> req.body.genre;
    const directory: string = <string> req.body.directory;
    const country: string = <string> req.body.country;
    const date: string = <string> req.body.date;
    let sql = "SELECT * FROM film "
    var filters = []    
    if (title) {
        filters.push( "title LIKE '" + title + "'");
    }
    if (title) {
        filters.push( "genre LIKE '" + genre + "'");
    }
    if (title) {
        filters.push( "directory LIKE '" + directory + "'");
    }
    if (title) {
        filters.push( "country LIKE '" + country + "'");
    }
    if (title) {
        filters.push( "date = " + date);
    }
    if (filters.length != 0){
        sql += ' WHERE ' + filters.join(" AND ")
    }
    db.query(sql, (err: any, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.post("/add", (req, res) => {
    // TODO parametre data
});

app.put("/update", (req, res) => {
    const id: number = parseInt(<string> req.query.id);
    // TODO + data
});

app.put("/archive", (req, res) => {
    // TODO
});


export default app;
