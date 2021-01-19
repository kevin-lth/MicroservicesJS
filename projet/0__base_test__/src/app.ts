import express from 'express';
import { User } from './types';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
    res.status(200).json(users);
});
app.post("/users/", (req, res) => {
    users.push(req.body);
    res.status(200).json(users);
});

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
