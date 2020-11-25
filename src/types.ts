interface User {
    id: number;
    name: String;
    email: String;
    age: number;
    playlist: Playlist;
    suggestions: Suggestions;
}

type Playlist = String[];

type Suggestions = String[];