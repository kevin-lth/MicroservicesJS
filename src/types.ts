/* Service /users */

export interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    playlist: Playlist;
    suggestions: Suggestions;
}

type Playlist = string[];

type Suggestions = string[];

/* Service /catalog */

export interface Movie {
    id: number;
    title: string;
    director: People;
    cast: People[];
    "age-rating": number;
    duration: number; // Nombre de minutes
    popularity: number;
    genres: Genre[];
}

export interface Genre {
    id: number;
    description: string;
}

export interface People {
    id: number;
    name: string;
    role: string;
}
