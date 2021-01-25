import express from 'express';

import users from './users.json';

const app = express();
app.use(express.json());

let db: any = undefined;

app.get("/get_current", (req, res) => {
    const sql = "SELECT * FROM film_loues";
    db.query(sql, (err: any, result: any) => {
        if (err) throw err;
        res.status(200).json(result);
    });
});

app.get("/get_from_period", (req, res) => {
    // TODO
});

app.get("/get_most_rented_from_period", (req, res) => {
    // TODO
});

app.get("/watch", (req, res) => {
    const id: number = parseInt(<string> req.query.id);
    if (id) {
        const sql = "SELECT * FROM film_loues WHERE id = ?";
        db.query(sql, id, (err: any, result: any) => {
            if (err) throw err;
            res.status(200).json(result);
        });
    } else res.status(404).end();
});

app.get("/report_movies", (req, res) => {
    // TODO
});

app.get("/report_users", (req, res) => {
    // TODO
});

app.post("/add", (req, res) => {
    // TODO
});

export default app;
