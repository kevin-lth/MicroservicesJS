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
        const create_film_loues_sql = `
            CREATE TABLE IF NOT EXISTS film_loues(
                id INT NOT NULL,
                username VARCHAR(20) NOT NULL,
                PRIMARY KEY (id, username),
                FOREIGN KEY (id)
                    REFERENCES film(id)
                    ON DELETE CASCADE
            )`;
        db = mysql.createPool({
            connectionLimit : 10,
            host: host_db, 
            user: user_db,
            password: password_db,
            database: films_db
        });
        db.query(create_film_loues_sql, (err: any, result: any) => {
            if (err) throw err;
            console.log("film_loues is ready !");
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

app.get("/get_current", (req, res) => {
    checkAuthThen(req, res, (req, res) => {
        const sql = "SELECT * FROM film_loues";
        db.query(sql, (err: any, result: any) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
});

app.get("/get_from_period", (req, res) => {
    // TODO : Not MVP
});

app.get("/get_most_rented_from_period", (req, res) => {
    // TODO : Not MVP
});

app.get("/watch", (req, res) => {
    checkAuthThen(req, res, (req, res) => {
        const id: number = parseInt(<string> req.query.id);
        if (id) {
            const sql = "SELECT * FROM film_loues WHERE id = ?";
            db.query(sql, id, (err: any, result: any) => {
                if (err) throw err;
                res.status(200).json(result);
            });
        } else res.status(404).end();
     });
});

app.get("/report_movies", (req, res) => {
    // TODO : Not MVP
});

app.get("/report_users", (req, res) => {
    // TODO : Not MVP
});

app.post("/add", (req, res) => {
    checkAuthThen(req, res, (req, res) => {
        const id: number = parseInt(<string> req.query.id);
        if (id) {
            const sql = "INSERT INTO film_loues(id, username) VALUES(?, ?)";
            db.query(sql, [id, "username"], (err: any, result: any) => {
                if (err) throw err;
                res.status(200).json(result);
            });
        } else res.status(404).end();
     });
});

export default app;
