import express from 'express';
import { User } from '../types';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json(users);
});
app.post("/", (req, res) => {
    users.push(req.body);
    res.status(200).json(users);
});

app.get("/:id", (req, res) => {
    const id: number = parseInt(req.params.id);
    const user: User | undefined = users.find(user => user.id === id);
    res.status(200).json(user);
});

app.get("/:id/playlist", (req, res) => {
    const id: number = parseInt(req.params.id);
    const user: User | undefined = users.find(user => user.id === id);
    res.status(200).json(user.playlist);
});
app.put("/:id/playlist", (req, res) => {
    const id: number = parseInt(req.params.id);
    const user: User | undefined = users.find(user => user.id === id);
    user.playlist = req.body;
    res.status(200).json(user);
});

app.get("/:id/suggestions", (req, res) => {
    const id: number = parseInt(req.params.id);
    const user: User | undefined = users.find(user => user.id === id);
    res.status(200).json(user.suggestions);});
app.put("/:id/suggestions", (req, res) => {
    const id: number = parseInt(req.params.id);
    const user: User | undefined = users.find(user => user.id === id);
    user.suggestions = req.body;
    res.status(200).json(user);
});

export default app ;

