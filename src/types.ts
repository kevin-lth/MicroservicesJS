// Service /users

export interface User {
    id: number;
    name: String;
    email: String;
    age: number;
    playlist: Playlist;
    suggestions: Suggestions;
}

type Playlist = String[];

type Suggestions = String[];

// Service /catalog

export interface Movie {
    id: number;
    title: String;
    director: People;
    cast: People[];
    "age-rating": number;
    duration: number; // Nombre de minutes
    popularity: number;
}

export interface Genre {

}

export interface People {

}