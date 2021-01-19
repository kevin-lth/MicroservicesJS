import express from 'express';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/get", (req, res) => {
    // TODO
});

app.get("/get_all", (req, res) => {
    // TODO
});

app.get("/add", (req, res) => {
    // TODO
});
app.post("/add", (req, res) => {
    // TODO
});

export default app;
