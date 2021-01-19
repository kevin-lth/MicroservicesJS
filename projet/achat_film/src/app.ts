import express from 'express';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/achat_film/rent", (req, res) => {
    // TODO
});
app.post("/achat_film/rent", (req, res) => {
    // TODO
});

app.get("/achat_film/get_prices", (req, res) => {
    // TODO
});
app.post("/achat_film/get_prices", (req, res) => {
    // TODO
});

app.get("/achat_film/update", (req, res) => {
    // TODO
});
app.post("/achat_film/update", (req, res) => {
    // TODO
});

export default app;
