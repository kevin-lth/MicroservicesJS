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

app.get("/search", (req, res) => {
    // TODO
});
app.post("/search", (req, res) => {
    // TODO
});

app.get("/add", (req, res) => {
    // TODO
});
app.post("/add", (req, res) => {
    // TODO
});

app.get("/update", (req, res) => {
    // TODO
});
app.post("/update", (req, res) => {
    // TODO
});

app.get("/archive", (req, res) => {
    // TODO
});
app.post("/archive", (req, res) => {
    // TODO
});


export default app;
