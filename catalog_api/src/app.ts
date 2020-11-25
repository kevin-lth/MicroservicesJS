import express from 'express';
import { Movie, Genre, People } from "./types";

import movies_json from "./catalog.json";

// On crée artificiellement la liste des genres et des people - en pratique on utiliserait une BDD et ne rencontrerait donc pas ce problème
function convertValueToIndex<T>(reference_array: T[]) {
    return (value: T) => {
        const value_index: number = reference_array.findIndex((val: T) => val == value);
        if (0 <= value_index) return reference_array[value_index];
        else {
            reference_array.push(value);
            return reference_array[reference_array.length];
        }
    };
}

const genres: Genre[] = [];
const people: People[] = [];
const movies: Movie[] = movies_json.map(movie_json => {
    // Genres
    const movie_genres: Genre[] = movie_json.genres;
    movie_genres.map(convertValueToIndex(genres));
    // People
    const movie_cast: People[] = movie_json.cast;
    movie_cast.map(convertValueToIndex(people));
    movie_json.director = convertValueToIndex(people)(movie_json.director);
    return movie_json;
});

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
    else res.status(404).end();
});
app.put("/movie/:id", (req, res) => {
    const id: number = parseInt(req.params.id);
    const new_movie = req.body;
    const movie_index: number = movies.findIndex(movie => movie.id == id);
    if (0 <= movie_index) {
        movies[movie_index] = { ...new_movie, id }
        const movie = movies[movie_index];
        res.status(200).json(movies[movie_index]);
    } else res.status(404).end();
});


app.get("/genres", (req, res) => {
    res.status(200).json(genres);
});
app.post("/genres", (req, res) => {
    genres.push(req.body);
    res.status(200).json(genres);
});
app.get("/genre/:id", (req, res) => {
    const id: number = parseInt(req.params.id);
    const genre: Genre | undefined = genres.find(genre => genre.id == id);
    if (genre) res.status(200).json(genre);
    else res.status(404).end();
});
app.put("/genre/:id", (req, res) => {
    const id: number = parseInt(req.params.id);
    const genre: Genre | undefined = genres.find(genre => genre.id === id);
    if (genre) {
        genre.description = req.body;
        res.status(200).json(genre);
    } else res.status(404).end();
});


app.get("/peoples", (req, res) => {
    res.status(200).json(peoples);
});
app.post("/peoples", (req, res) => {
    peoples.push(req.body);
    res.status(200).json(peoples);
});
app.get("/people/:id", (req, res) => {
    const id: number = parseInt(req.params.id);
    const people: People | undefined = peoples.find(people => people.id == id);
    if (people) res.status(200).json(people);
    else res.status(404).end();
});
app.put("/people/:id", (req, res) => {
    const id: number = parseInt(req.params.id);
    const new_people = req.body;
    const people_index: number = peoples.findIndex(people => people.id == id);
    if (0 <= people_index) {
        peoples[people_index] = { ...new_people, id }
        const people = peoples[people_index];
        res.status(200).json(peoples[people_index]);
    } else res.status(404).end();
});


export default app;
