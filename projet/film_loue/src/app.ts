import express from 'express';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/get_current", (req, res) => {
    // TODO
});

app.get("/get_from_period", (req, res) => {
    // TODO
});

app.get("/get_most_rented_from_period", (req, res) => {
    // TODO
});

app.get("/watch", (req, res) => {
    // TODO
});
app.post("/watch", (req, res) => {
    // TODO
});

app.get("/report_movies", (req, res) => {
    // TODO
});
app.post("/report_movies", (req, res) => {
    // TODO
});

app.get("/report_users", (req, res) => {
    // TODO
});
app.post("/report_users", (req, res) => {
    // TODO
});

app.get("/add", (req, res) => {
    // TODO
});
app.post("/add", (req, res) => {
    // TODO
});

export default app;
