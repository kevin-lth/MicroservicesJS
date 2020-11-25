import express from 'express';
import { Movie, Genre, People } from "../types";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({"COUCOU": "COUCOU"});
});

export default app ;
