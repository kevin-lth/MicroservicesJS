import express from 'express';

const app = express();
app.use(express.json());

app.get("/get", (req, res) => {
    // TODO: Not MVP
});

app.get("/get_all", (req, res) => {
    // TODO: Not MVP
});

app.post("/add", (req, res) => {
    // TODO: Not MVP
});

app.delete("/remove", (req, res) => {
    // TODO: Not MVP
});

export default app;
