import express from 'express';

const app = express();
app.use(express.json());

app.post("/rent", (req, res) => {
    // TODO: Not MVP
});

app.post("/get_prices", (req, res) => {
    // TODO: Not MVP
});

app.put("/update", (req, res) => {
    // TODO: Not MVP
});

export default app;
