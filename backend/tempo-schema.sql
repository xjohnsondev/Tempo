CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    profile_picture VARCHAR(255),
    is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE artists (
    artist_id SERIAL PRIMARY KEY,
    artist_name VARCHAR(100) NOT NULL,
    bio VARCHAR(500),
    profile_picture VARCHAR(255) NOT NULL
);


CREATE TABLE albums (
    album_id SERIAL PRIMARY KEY,
    album_name VARCHAR(100) NOT NULL,
    artist_id INT NOT NULL REFERENCES artists(artist_id) ON DELETE CASCADE,
    artwork_image VARCHAR(255) NOT NULL
);


CREATE TABLE songs (
    song_id SERIAL PRIMARY KEY,
    song_name VARCHAR(100) NOT NULL,
    artist_id INT NOT NULL REFERENCES artists(artist_id) ON DELETE CASCADE,
    album_id INT NOT NULL REFERENCES albums(album_id) ON DELETE CASCADE,
    genre VARCHAR(255) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    number_of_plays INT NOT NULL DEFAULT 0,
    track_length TIME NOT NULL,
    is_explicit BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id),
    FOREIGN KEY (album_id) REFERENCES albums(album_id)
);


CREATE TABLE playlists (
    playlist_id SERIAL PRIMARY KEY,
    playlist_name VARCHAR(100) NOT NULL,
    user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE
);


CREATE TABLE playlist_songs (
    playlist_song_id SERIAL PRIMARY KEY,
    playlist_id INT NOT NULL REFERENCES playlists(playlist_id) ON DELETE CASCADE,
    song_id INT NOT NULL REFERENCES songs(song_id) ON DELETE CASCADE
);

