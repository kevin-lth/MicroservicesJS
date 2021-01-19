import express from 'express';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/suggestion_film/get", (req, res) => {
    // TODO
});
app.post("/suggestion_film/get", (req, res) => {
    // TODO
});

app.get("/notification/update", (req, res) => {
    // TODO
});
app.post("/notification/update", (req, res) => {
    // TODO
});

export default app;
