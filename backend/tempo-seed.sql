-- Seed data for users table
INSERT INTO users (username, password, email, profile_picture, is_admin)
VALUES
    ('user1', 'password1', 'user1@example.com', 'profile1.jpg', FALSE),
    ('user2', 'password2', 'user2@example.com', 'profile2.jpg', FALSE),
    ('admin', 'adminpassword', 'admin@example.com', 'admin_profile.jpg', TRUE);


-- Seed data for artists table
INSERT INTO artists (artist_name, bio, profile_picture)
VALUES
    ('Michael Jackson', 'Bio of Michael Jackson', 'mj_profile.jpg'),
    ('Daft Punk', 'Bio of Daft Punk', 'dp_profile.jpg'),
    ('Lauryn Hill', 'Bio of Lauryn Hill', 'lh_profile.jpg'),
    ('Tame Impala', 'Bio of Tame Impala', 'ti_profile.jpg'),
    ('Phoenix', 'Bio of Phoenix', 'ph_profile.jpg');


-- Seed data for albums table
INSERT INTO albums (album_name, artist_id, artwork_image)
VALUES
    ('Bad', 1, '/images/bad_cover.png'),
    ('Random Access Memories', 2, '/images/ram_cover.png'),
    ('The Miseducation of Lauryn Hill', 3, '/images/miseducation_cover.jpg'),
    ('Thriller', 1, '/images/thriller_cover.png'),
    ('Currents', 4, '/images/currents_cover.png'),
    ('Wolfgang Amadeus', 5, '/images/wolfgang_cover.png');


-- Seed data for songs table
INSERT INTO songs (song_name, artist_id, album_id, genre, file_path, track_length, is_explicit)
VALUES
    -- Songs from "Bad"
    ('Bad', 1, 1, 'Pop', 'path/to/bad.mp3', '00:04:07', FALSE),
    ('The Way You Make Me Feel', 1, 1, 'Pop', 'path/to/thewayyoumakemefeel.mp3', '00:04:58', FALSE),
    ('Speed Demon', 1, 1, 'Pop', 'path/to/speeddemon.mp3', '00:04:02', FALSE),
    ('Liberian Girl', 1, 1, 'Pop', 'path/to/liberiangirl.mp3', '00:03:53', FALSE),
    ('Just Good Friends', 1, 1, 'Pop', 'path/to/justgoodfriends.mp3', '00:04:07', FALSE),
    ('Another Part of Me', 1, 1, 'Pop', 'path/to/anotherpartofme.mp3', '00:03:55', FALSE),
    ('Man in the Mirror', 1, 1, 'Pop', 'path/to/maninthemirror.mp3', '00:05:19', FALSE),
    ('I Just Can''t Stop Loving You', 1, 1, 'Pop', 'path/to/ijustcantstoplovingyou.mp3', '00:04:14', FALSE),
    ('Dirty Diana', 1, 1, 'Pop', 'path/to/dirtydiana.mp3', '00:04:41', FALSE),
    ('Smooth Criminal', 1, 1, 'Pop', 'path/to/smoothcriminal.mp3', '00:04:18', FALSE),
    ('Leave Me Alone', 1, 1, 'Pop', 'path/to/leavemealone.mp3', '00:04:40', FALSE),
    
    -- Songs from "Random Access Memories"
    ('Give Life Back to Music', 2, 2, 'Electronic', 'path/to/givelifebacktomusic.mp3', '00:04:34', FALSE),
    ('The Game of Love', 2, 2, 'Electronic', 'path/to/thegameoflove.mp3', '00:05:22', FALSE),
    ('Giorgio by Moroder', 2, 2, 'Electronic', 'path/to/giorgiobymoroder.mp3', '00:09:04', FALSE),
    ('Within', 2, 2, 'Electronic', 'path/to/within.mp3', '00:03:46', FALSE),
    ('Instant Crush', 2, 2, 'Electronic', 'path/to/instantcrush.mp3', '00:05:38', FALSE),
    ('Lose Yourself to Dance', 2, 2, 'Electronic', 'path/to/loseyourselftodance.mp3', '00:05:57', FALSE),
    ('Touch', 2, 2, 'Electronic', 'path/to/touch.mp3', '00:08:19', FALSE),
    ('Get Lucky', 2, 2, 'Electronic', 'path/to/getlucky.mp3', '00:06:09', FALSE),
    ('Beyond', 2, 2, 'Electronic', 'path/to/beyond.mp3', '00:04:51', FALSE),
    ('Motherboard', 2, 2, 'Electronic', 'path/to/motherboard.mp3', '00:05:43', FALSE),
    ('Fragments of Time', 2, 2, 'Electronic', 'path/to/fragmentsoftime.mp3', '00:04:39', FALSE),
    ('Doin'' It Right', 2, 2, 'Electronic', 'path/to/doinitright.mp3', '00:04:11', FALSE),
    ('Contact', 2, 2, 'Electronic', 'path/to/contact.mp3', '00:06:23', FALSE),
    
    -- Songs from "The Miseducation of Lauryn Hill" (continued)
    ('Everything Is Everything', 3, 3, 'Hip Hop', 'path/to/everythingiseverything.mp3', '00:04:53', TRUE),
    ('The Miseducation of Lauryn Hill', 3, 3, 'Hip Hop', 'path/to/themiseducationoflaurynhill.mp3', '00:04:17', FALSE),
    ('Can''t Take My Eyes Off of You', 3, 3, 'Hip Hop', 'path/to/canttakemyeyesoffofyou.mp3', '00:03:42', FALSE),
    ('Tell Him', 3, 3, 'Hip Hop', 'path/to/tellhim.mp3', '00:04:41', FALSE),

    -- Songs from "Thriller"
    ('Wanna Be Startin'' Somethin''', 1, 4, 'Pop', 'path/to/wannabestartinsomethin.mp3', '00:06:03', FALSE),
    ('Baby Be Mine', 1, 4, 'Pop', 'path/to/babybemine.mp3', '00:04:20', FALSE),
    ('The Girl Is Mine', 1, 4, 'Pop', 'path/to/thegirlismine.mp3', '00:03:42', FALSE),
    ('Thriller', 1, 4, 'Pop', 'path/to/thriller.mp3', '00:05:58', FALSE),
    ('Beat It', 1, 4, 'Pop', 'path/to/beatit.mp3', '00:04:18', TRUE),
    ('Billie Jean', 1, 4, 'Pop', 'path/to/billiejean.mp3', '00:04:54', FALSE),
    ('Human Nature', 1, 4, 'Pop', 'path/to/humannature.mp3', '00:04:06', FALSE),
    ('P.Y.T. (Pretty Young Thing)', 1, 4, 'Pop', 'path/to/pyt.mp3', '00:03:59', FALSE),
    ('The Lady in My Life', 1, 4, 'Pop', 'path/to/theladyinmylife.mp3', '00:04:59', FALSE),

    -- Songs from "Currents"
    ('Let It Happen', 4, 5, 'Pop', 'path/to/letithappen.mp3', '00:07:47', FALSE),
    ('Nangs', 4, 5, 'Pop', 'path/to/nangs.mp3', '00:01:48', FALSE),
    ('The Moment', 4, 5, 'Pop', 'path/to/themoment.mp3', '00:04:15', FALSE),
    ('Yes I''m Changing', 4, 5, 'Pop', 'path/to/yesimchanging.mp3', '00:04:31', FALSE),
    ('Eventually', 4, 5, 'Pop', 'path/to/eventually.mp3', '00:05:19', FALSE),
    ('Gossip', 4, 5, 'Pop', 'path/to/gossip.mp3', '00:00:55', FALSE),
    ('The Less I Know the Better', 4, 5, 'Pop', 'path/to/thelessiknowthebetter.mp3', '00:03:39', FALSE),
    ('Past Life', 4, 5, 'Pop', 'path/to/pastlife.mp3', '00:03:48', FALSE),
    ('Disciples', 4, 5, 'Pop', 'path/to/disciples.mp3', '00:01:49', FALSE),
    ('Cause I''m a Man', 4, 5, 'Pop', 'path/to/causeimaman.mp3', '00:04:02', FALSE),
    ('Reality in Motion', 4, 5, 'Pop', 'path/to/realityinmotion.mp3', '00:04:13', FALSE),
    ('Love/Paranoia', 4, 5, 'Pop', 'path/to/loveparanoia.mp3', '00:03:06', FALSE),
    ('New Person, Same Old Mistakes', 4, 5, 'Pop', 'path/to/newpersonsameoldmistakes.mp3', '00:06:02', FALSE),

    -- Songs from "Wolfgang Amadeus"
    ('Lisztomania', 5, 6, 'Rock', 'path/to/lisztomania.mp3', '00:04:09', FALSE),
    ('1901', 5, 6, 'Rock', 'path/to/1901.mp3', '00:03:18', FALSE),
    ('Fences', 5, 6, 'Rock', 'path/to/fences.mp3', '00:03:50', FALSE),
    ('Love Like a Sunset', 5, 6, 'Rock', 'path/to/lovelikeasunset.mp3', '00:07:39', FALSE),
    ('Lasso', 5, 6, 'Rock', 'path/to/lasso.mp3', '00:02:50', FALSE),
    ('Rome', 5, 6, 'Rock', 'path/to/rome.mp3', '00:04:49', FALSE),
    ('Countdown', 5, 6, 'Rock', 'path/to/countdown.mp3', '00:04:00', FALSE),
    ('Girlfriend', 5, 6, 'Rock', 'path/to/girlfriend.mp3', '00:03:24', FALSE),
    ('Armistice', 5, 6, 'Rock', 'path/to/armistice.mp3', '00:03:06', FALSE);


-- Seed data for playlists table
INSERT INTO playlists (playlist_name, user_id)
VALUES
    ('Favorites', 1),
    ('Workout Mix', 2),
    ('Chill Vibes', 1),
    ('Road Trip', 3),
    ('Party Hits', 1),
    ('Relaxation', 1);

-- Seed data for playlist_songs table
INSERT INTO playlist_songs (playlist_id, song_id)
VALUES
    (1, 1),   -- Adding 'Bad' to Favorites playlist
    (1, 24),  -- Adding 'Contact' to Favorites playlist
    (2, 12),  -- Adding 'Give Life Back to Music' to Workout Mix playlist
    (2, 4),   -- Adding 'Liberian Girl' to Workout Mix playlist
    (3, 15),  -- Adding 'Within' to Chill Vibes playlist
    (3, 28),  -- Adding 'To Zion' to Chill Vibes playlist
    (4, 57),  -- Adding 'Past Life' to Road Trip playlist
    (4, 55),  -- Adding 'Gossip' to Road Trip playlist
    (5, 29),  -- Adding 'Doo Wop' to Party Hits playlist
    (3, 54),  -- Adding 'Eventually' to Chill Vibes playlist
    (6, 56),  -- Adding 'The Less I Know The Better' to Relaxation playlist
    (1, 65),  -- Adding 'Fences' to Favorites playlist
    (3, 63);  -- Adding 'Lisztomania' to Favorites playlist