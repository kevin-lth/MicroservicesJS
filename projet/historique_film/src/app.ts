import express from 'express';
import { User } from './types';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/historique_film/get", (req, res) => {
    // TODO
});
app.post("/historique_film/get", (req, res) => {
    // TODO
});

app.get("/historique_film/get_all", (req, res) => {
    // TODO
});
app.post("/historique_film/get_all", (req, res) => {
    // TODO
});

app.get("/historique_film/add", (req, res) => {
    // TODO
});
app.post("/historique_film/add", (req, res) => {
    // TODO
});

export default app;
