import express from 'express';
const mysql = require('mysql');


const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost", 
    user: "nom_utilisateur",
    password: "mot_de_passe_utilisateur" });

app.get("/get", (req, res) => {
    const id: number = parseInt(req.params.id);
    db.connect(function(err: any) {
        if (err) throw err;
        console.log("Connecté à la base de données MySQL!");
        var sql = "SELECT * FROM film WHERE id = ?";
        db.query(sql, id, function(err: any, result: any) {
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
