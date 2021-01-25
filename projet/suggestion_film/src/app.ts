import express from 'express';

const app = express();
app.use(express.json());

app.get("/get", (req, res) => {
    // TODO: Not MVP
});

app.put("/update", (req, res) => {
    // TODO: Not MVP
});

export default app;
