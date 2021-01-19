import express from 'express';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/send", (req, res) => {
    // TODO
});
app.post("/send", (req, res) => {
    // TODO
});

export default app;
