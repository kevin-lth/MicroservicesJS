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
