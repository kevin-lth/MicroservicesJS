import express from 'express';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/get", (req, res) => {
    // TODO
});

app.get("/update", (req, res) => {
    // TODO
});
app.post("/update", (req, res) => {
    // TODO
});

export default app;
