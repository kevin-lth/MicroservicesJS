import express from 'express';
import { User } from './types';

import users from './users.json';

const app = express();
app.use(express.json());

app.get("/notification/send", (req, res) => {
    // TODO
});
app.post("/notification/send", (req, res) => {
    // TODO
});

export default app;
