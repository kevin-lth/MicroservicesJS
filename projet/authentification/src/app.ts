import express from 'express';

import users from './users.json';

const app = express();
app.use(express.json());

app.post("/authentification/login", (req, res) => {
    res.status(200).json({'token':'valeur'});
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

app.get("/authentification/get_from_token", (req, res) => {
    const token: string = req.params.token;
    res.status(200).json({'user':'name','token':'valeur'});
});

app.get("/authentification/get_all", (req, res) => {
    // TODO
});

// ----------------------------------------------------------------
/*
import { User } from './types';
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
*/
export default app;
