import express from 'express';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/user_preferences/get", (req, res) => {
    // TODO
});
app.post("/user_preferences/get", (req, res) => {
    // TODO
});

app.get("/user_preferences/update", (req, res) => {
    // TODO
});
app.post("/user_preferences/update", (req, res) => {
    // TODO
});

app.get("/user_preferences/delete", (req, res) => {
    // TODO
});
app.post("/user_preferences/delete", (req, res) => {
    // TODO
});

export default app;
