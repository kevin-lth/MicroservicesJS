import express from 'express';

const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
    res.status(200).json({'token':'exemple123'});
});

app.get("/add", (req, res) => {
    // TODO
});
app.post("/add", (req, res) => {
    // TODO
});

app.post("/update", (req, res) => {
    // TODO
});

app.delete("/delete", (req, res) => {
    // TODO
});

app.get("/get_from_username", (req, res) => {
    res.status(200).json({'user':'username','role':'client'});
});

app.get("/get_from_token", (req, res) => {
    const token: string = req.params.token;
    res.status(200).json({'user':'username','role':'client'});
});

app.get("/get_all", (req, res) => {
    // TODO
});

export default app;
