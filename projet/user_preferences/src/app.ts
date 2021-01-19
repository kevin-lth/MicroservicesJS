import express from 'express';
import { User } from './types';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/user_preferences/get", (req, res) => {
    res.status(200).json(users);
});
app.post("/user_preferences/get", (req, res) => {
    users.push(req.body);
    res.status(200).json(users);
});

app.get("/user_preferences/update", (req, res) => {
    res.status(200).json(users);
});
app.post("/user_preferences/update", (req, res) => {
    users.push(req.body);
    res.status(200).json(users);
});

app.get("/user_preferences/delete", (req, res) => {
    res.status(200).json(users);
});
app.post("/user_preferences/delete", (req, res) => {
    users.push(req.body);
    res.status(200).json(users);
});

export default app;
