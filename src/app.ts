import express from 'express';
import users from './users.json';

const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
    res.status(200).json(users);
});
app.post("/users", (req, res) => {
    users.push(req.body);
    res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.status(200).json(user);
});

app.get("/users/:id/playlist", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.status(200).json(user.playlist);
});
app.put("/users/:id/playlist", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    user.playlist = req.body.playlist;
    res.status(200).json(user);
});

app.get("/users/:id/suggestions", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.status(200).json(user.suggestions);});
app.put("/users/:id/suggestions", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    user.suggestions = req.body.suggestions;
    res.status(200).json(user);
});

export { app };

