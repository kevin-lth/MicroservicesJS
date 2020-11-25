interface User {
    id: Number;
    name: String;
    email: String;
    age: Number;
    playlist: Playlist;
    suggestions: Suggestions;
}

type Playlist = String[];

type Suggestions = String[];