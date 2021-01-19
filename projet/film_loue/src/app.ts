import express from 'express';
import { User } from './types';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/film_loue/get_current", (req, res) => {
    // TODO
});
app.post("/film_loue/get_current", (req, res) => {
    // TODO
});

app.get("/film_loue/get_from_period", (req, res) => {
    // TODO
});
app.post("/film_loue/get_from_period", (req, res) => {
    // TODO
});

app.get("/film_loue/get_most_rented_from_period", (req, res) => {
    // TODO
});
app.post("/film_loue/get_most_rented_from_period", (req, res) => {
    // TODO
});

app.get("/film_loue/watch", (req, res) => {
    // TODO
});
app.post("/film_loue/watch", (req, res) => {
    // TODO
});

app.get("/film_loue/report_movies", (req, res) => {
    // TODO
});
app.post("/film_loue/report_movies", (req, res) => {
    // TODO
});

app.get("/film_loue/report_users", (req, res) => {
    // TODO
});
app.post("/film_loue/report_users", (req, res) => {
    // TODO
});

app.get("/film_loue/add", (req, res) => {
    // TODO
});
app.post("/film_loue/add", (req, res) => {
    // TODO
});

export default app;
