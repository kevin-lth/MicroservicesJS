import express from 'express';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/film/get", (req, res) => {
    const id: number = parseInt(req.params.id);
    //TODO
});
app.post("/film/get", (req, res) => {
    // TODO
});

app.get("/film/search", (req, res) => {
    // TODO
});
app.post("/film/search", (req, res) => {
    // TODO
});

app.get("/film/add", (req, res) => {
    // TODO
});
app.post("/film/add", (req, res) => {
    // TODO
});

app.get("/film/update", (req, res) => {
    // TODO
});
app.post("/film/update", (req, res) => {
    // TODO
});

app.get("/film/archive", (req, res) => {
    // TODO
});
app.post("/film/archive", (req, res) => {
    // TODO
});


export default app;
