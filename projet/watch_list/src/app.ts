import express from 'express';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/watch_list/add", (req, res) => {
    // TODO
});
app.post("/watch_list/add", (req, res) => {
    // TODO
});

app.get("/watch_list/remove", (req, res) => {
    // TODO
});
app.post("/watch_list/remove", (req, res) => {
    // TODO
});

app.get("/watch_list/get", (req, res) => {
    // TODO
});

app.get("/watch_list/get_all", (req, res) => {
    // TODO
});

export default app;
