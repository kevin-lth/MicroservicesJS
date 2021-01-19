import express from 'express';
const mysql = require('mysql');


const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost", 
    user: "nom_utilisateur",
    password: "mot_de_passe_utilisateur" });

app.get("/film/get", (req, res) => {
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

app.get("/film/search", (req, res) => {
    // TODO
});
app.post("/film/search", (req, res) => {
    // TODO
});

app.get("/film/add", (req, res) => {
    // TODO
});
app.post("/film/add", (req, res) => {
    // TODO
});

app.get("/film/update", (req, res) => {
    // TODO
});
app.post("/film/update", (req, res) => {
    // TODO
});

app.get("/film/archive", (req, res) => {
    // TODO
});
app.post("/film/archive", (req, res) => {
    // TODO
});


export default app;
