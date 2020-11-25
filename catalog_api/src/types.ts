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
