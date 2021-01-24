import express from 'express';
const mysql = require('mysql');


const app = express();
app.use(express.json());

let db = undefined;

function initConnection() {
    const host_db = process.env.MYSQL_HOST || "localhost";
    const user_db = process.env.MYSQL_USER || "user";
    const password_db = process.env.MYSQL_PASSWORD || "password";
    const films_db = process.env.MYSQL_DB || "db";
    db = mysql.createConnection({
        host: host_db, 
        user: user_db,
        password: password_db
    });
    db.connect(function(err) {
        if (err) throw err;
        const create_db_sql = "CREATE DATABASE ? IF NOT EXISTS";
        const create_film_sql ) `
        CREATE TABLE IF NOT EXISTS film(
        
        )`; // TODO
        db.query(create_db_sql, films_db, (err, result) => { if (err) throw err });
    });
    db = mysql.createConnection({
        host: host_db, 
        user: user_db,
        password: password_db,
        database: films_db
    });
}

app.get("/get", (req, res) => {
    const id: number = parseInt(req.params.id);
    db.connect(function(err) {
        if (err) throw err;
        console.log("Connecté à la base de données MySQL!");
        const sql = "SELECT * FROM film WHERE id = ?";
        db.query(sql, id, (err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    });
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
