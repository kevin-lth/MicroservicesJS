import express from 'express';
import { Movie, Genre, People } from "./types";

import movies from "./catalog.json";

// On crée artificiellement la liste des genres et des people - en pratique on utiliserait une BDD et ne rencontrerait donc pas ce problème
const genres = []; // TODO
const people = []; // TODO

const app = express();
app.use(express.json());

app.get("/movies", (req, res) => {
    res.status(200).json(movies);
});
app.post("/movies", (req, res) => {
    movies.push(req.body);
    res.status(200).json(movies);
});
app.get("/movie/:id", (req, res) => {
    const id: number = parseInt(req.params.id);
    const movie: Movie | undefined = movies.find(movie => movie.id == id);
    if (movie) res.status(200).json(movie);
    else res.status(404);
});
app.put("/movie/:id", (req, res) => {
    const id: number = parseInt(req.params.id);
    const new_movie = req.body;
    const movie_index: number = movies.findIndex(movie => movie.id == id);
    if (0 <= movie_index) {
        movies[movie_index] = { ...new_movie, id }
        const movie = movies[movie_index];
        res.status(200).json(movies[movie_index]);
    } else res.status(404);
});

export default app;
