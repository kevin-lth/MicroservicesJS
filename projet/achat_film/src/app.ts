import express from 'express';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/rent", (req, res) => {
    // TODO
});
app.post("/rent", (req, res) => {
    // TODO
});

app.get("/get_prices", (req, res) => {
    // TODO
});
app.post("/get_prices", (req, res) => {
    // TODO
});

app.get("/update", (req, res) => {
    // TODO
});
app.post("/update", (req, res) => {
    // TODO
});

export default app;
