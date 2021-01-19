import express from 'express';
import { User } from './types';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/authentification/login", (req, res) => {
    res.status(200).json(users);
});
app.post("/authentification/login", (req, res) => {
    users.push(req.body);
    res.status(200).json(users);
});

app.get("/authentification/add", (req, res) => {
    // TODO
});
app.post("/authentification/add", (req, res) => {
    // TODO
});

app.get("/authentification/update", (req, res) => {
    // TODO
});
app.post("/authentification/update", (req, res) => {
    // TODO
});

app.get("/authentification/delete", (req, res) => {
    // TODO
});
app.post("/authentification/delete", (req, res) => {
    // TODO
});

app.get("/authentification/get_from_username", (req, res) => {
    // TODO
});
app.post("/authentification/get_from_username", (req, res) => {
    // TODO
});

app.get("/authentification/get_from_token", (req, res) => {
    // TODO
});
app.post("/authentification/get_from_token", (req, res) => {
    // TODO
});

app.get("/authentification/get_all", (req, res) => {
    // TODO
});
app.post("/authentification/get_all", (req, res) => {
    // TODO
});

// ----------------------------------------------------------------

app.get("/users/:id", (req, res) => {
    const id: number = parseInt(req.params.id);
    const user: User | undefined = users.find(user => user.id === id);
    if (user) res.status(200).json(user);
    else res.status(404).end();
});

app.get("/users/:id/playlist", (req, res) => {
    const id: number = parseInt(req.params.id);
    const user: User | undefined = users.find(user => user.id === id);
    if (user) res.status(200).json(user.playlist);
    else res.status(404).end();
});
app.put("/users/:id/playlist", (req, res) => {
    const id: number = parseInt(req.params.id);
    const user: User | undefined = users.find(user => user.id === id);
    if (user) {
        user.playlist = req.body;
        res.status(200).json(user);
    } else res.status(404).end();
});

app.get("/users/:id/suggestions", (req, res) => {
    const id: number = parseInt(req.params.id);
    const user: User | undefined = users.find(user => user.id === id);
    if (user) res.status(200).json(user.suggestions);});
app.put("/users/:id/suggestions", (req, res) => {
    const id: number = parseInt(req.params.id);
    const user: User | undefined = users.find(user => user.id === id);
    if (user) {
        user.suggestions = req.body;
        res.status(200).json(user);
    } else res.status(404).end();
});

export default app;
