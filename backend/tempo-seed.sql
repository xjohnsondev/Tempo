-- Seed data for users table
INSERT INTO users (username, password, email, profile_picture, is_admin)
VALUES
    ('user1', 'password1', 'user1@example.com', 'profile1.jpg', FALSE),
    ('user2', 'password2', 'user2@example.com', 'profile2.jpg', FALSE),
    ('admin', 'adminpassword', 'admin@example.com', 'admin_profile.jpg', TRUE);

INSERT INTO songs (song_name, artist, album_name, artwork_image, genre, file_path, track_length, is_explicit)
VALUES
    ('Song 1', 'Artist 1', 'Album 1', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Pop', 'path/to/song1.mp3', '00:03:30', FALSE),
    ('Song 2', 'Artist 2', 'Album 2', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Rock', 'path/to/song2.mp3', '00:04:15', TRUE),
    ('Song 3', 'Artist 3', 'Album 3', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Hip Hop', 'path/to/song3.mp3', '00:03:50', FALSE),
    ('Song 4', 'Artist 4', 'Album 4', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Pop', 'path/to/song4.mp3', '00:03:20', FALSE),
    ('Song 5', 'Artist 5', 'Album 5', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Rock', 'path/to/song5.mp3', '00:03:45', TRUE),
    ('Song 6', 'Artist 6', 'Album 6', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Hip Hop', 'path/to/song6.mp3', '00:04:00', FALSE),
    ('Song 7', 'Artist 7', 'Album 7', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Pop', 'path/to/song7.mp3', '00:03:10', FALSE),
    ('Song 8', 'Artist 1', 'Album 1', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Rock', 'path/to/song8.mp3', '00:03:55', TRUE),
    ('Song 9', 'Artist 2', 'Album 2', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Hip Hop', 'path/to/song9.mp3', '00:03:25', FALSE),
    ('Song 10', 'Artist 3', 'Album 3', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Pop', 'path/to/song10.mp3', '00:04:10', FALSE),
    ('Song 11', 'Artist 4', 'Album 4', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Rock', 'path/to/song11.mp3', '00:03:30', TRUE),
    ('Song 12', 'Artist 5', 'Album 5', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Hip Hop', 'path/to/song12.mp3', '00:03:40', FALSE),
    ('Song 13', 'Artist 6', 'Album 6', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Pop', 'path/to/song13.mp3', '00:04:05', FALSE),
    ('Song 14', 'Artist 7', 'Album 7', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Rock', 'path/to/song14.mp3', '00:03:15', TRUE),
    ('Song 15', 'Artist 1', 'Album 1', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Hip Hop', 'path/to/song15.mp3', '00:03:55', TRUE),
    ('Song 16', 'Artist 2', 'Album 2', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Pop', 'path/to/song16.mp3', '00:03:25', FALSE),
    ('Song 17', 'Artist 3', 'Album 3', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Rock', 'path/to/song17.mp3', '00:03:40', FALSE),
    ('Song 18', 'Artist 4', 'Album 4', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Hip Hop', 'path/to/song18.mp3', '00:04:10', TRUE),
    ('Song 19', 'Artist 5', 'Album 5', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Pop', 'path/to/song19.mp3', '00:03:20', FALSE),
    ('Song 20', 'Artist 6', 'Album 6', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Rock', 'path/to/song20.mp3', '00:03:50', TRUE),
    ('Song 21', 'Artist 7', 'Album 7', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Hip Hop', 'path/to/song21.mp3', '00:04:15', FALSE),
    ('Song 22', 'Artist 1', 'Album 1', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Pop', 'path/to/song22.mp3', '00:03:30', FALSE),
    ('Song 23', 'Artist 2', 'Album 2', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Rock', 'path/to/song23.mp3', '00:03:55', TRUE),
    ('Song 24', 'Artist 3', 'Album 3', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Hip Hop', 'path/to/song24.mp3', '00:03:45', FALSE),
    ('Song 25', 'Artist 4', 'Album 4', 'https://www.orangehead.net/wp-content/uploads/2017/06/upbeatfunretroff.jpg', 'Pop', 'path/to/song25.mp3', '00:04:00', FALSE);

-- Seed data for playlists table
INSERT INTO playlists (playlist_name, user_id)
VALUES
    ('Favorites', 1),
    ('Workout Mix', 2),
    ('Chill Vibes', 1),
    ('Road Trip', 3);

-- Seed data for playlist_songs table
INSERT INTO playlist_songs (playlist_id, song_id)
VALUES
    (1, 1),  -- Adding Song 1 to Favorites playlist
    (1, 5),  -- Adding Song 5 to Favorites playlist
    (2, 2),  -- Adding Song 2 to Workout Mix playlist
    (2, 7),  -- Adding Song 7 to Workout Mix playlist
    (3, 3),  -- Adding Song 3 to Chill Vibes playlist
    (3, 8),  -- Adding Song 8 to Chill Vibes playlist
    (4, 4),  -- Adding Song 4 to Road Trip playlist
    (4, 9);  -- Adding Song 9 to Road Trip playlist
