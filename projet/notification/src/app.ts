import express from 'express';

const app = express();
app.use(express.json());

app.post("/send", (req, res) => {
    // TODO: Not MVP
});

export default app;
