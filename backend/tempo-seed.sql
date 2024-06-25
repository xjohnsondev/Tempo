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
    ('Phoenix', 'Bio of Phoenix', 'ph_profile.jpg'),
    ('1999 Write the Future', 'Bio of 1999 Write the Future', '19_profile.jpg');

-- Seed data for albums table
INSERT INTO albums (album_name, artist_id, artwork_image)
VALUES
    ('Bad', 1, '/images/bad_cover.png'),
    ('Random Access Memories', 2, '/images/ram_cover.png'),
    ('The Miseducation of Lauryn Hill', 3, '/images/miseducation_cover.jpg'),
    ('Thriller', 1, '/images/thriller_cover.png'),
    ('Currents', 4, '/images/currents_cover.png'),
    ('Wolfgang Amadeus', 5, '/images/wolfgang_cover.png'),
    ('hella (˃̣̣̥╭╮˂̣̣̥) ✧ ♡ ‧º·˚', 6, '/images/hella_cover.png');

-- Seed data for songs table
INSERT INTO songs (song_name, artist_id, album_id, genre, file_path, track_length, is_explicit)
VALUES

    -- Songs from "Bad"
    ('Bad', 1, 1, 'Pop', 'Bad/Bad.mp3', '00:04:07', FALSE),
    ('The Way You Make Me Feel', 1, 1, 'Pop', 'Bad/The Way You Make Me Feel.mp3', '00:04:58', FALSE),
    ('Speed Demon', 1, 1, 'Pop', 'Bad/Speed Demon.mp3', '00:04:01', FALSE),
    ('Liberian Girl', 1, 1, 'Pop', 'Bad/Liberian Girl.mp3', '00:03:52', FALSE),
    ('Just Good Friends', 1, 1, 'Pop', 'Bad/Just Good Friends.mp3', '00:04:08', FALSE),
    ('Another Part of Me', 1, 1, 'Pop', 'Bad/Another Part of Me.mp3', '00:03:55', FALSE),
    ('Man in the Mirror', 1, 1, 'Pop', 'Bad/Man in the Mirror.mp3', '00:05:19', FALSE),
    ('I Just Can''t Stop Loving You', 1, 1, 'Pop', 'Bad/I Just Can''t Stop Loving You.mp3', '00:04:13', FALSE),
    ('Dirty Diana', 1, 1, 'Pop', 'Bad/Dirty Diana.mp3', '00:04:41', FALSE),
    ('Smooth Criminal', 1, 1, 'Pop', 'Bad/Smooth Criminal.mp3', '00:04:17', FALSE),
    ('Leave Me Alone', 1, 1, 'Pop', 'Bad/Leave Me Alone.mp3', '00:04:40', FALSE),

    -- Songs from "Random Access Memories"
    ('Give Life Back to Music', 2, 2, 'Electronic', 'Random Access Memories/Give Life Back to Music.mp3', '00:04:34', FALSE),
    ('The Game of Love', 2, 2, 'Electronic', 'Random Access Memories/The Game of Love.mp3', '00:05:22', FALSE),
    ('Giorgio by Moroder', 2, 2, 'Electronic', 'Random Access Memories/Giorgio by Moroder.mp3', '00:09:04', FALSE),
    ('Within', 2, 2, 'Electronic', 'Random Access Memories/Within.mp3', '00:03:48', FALSE),
    ('Instant Crush', 2, 2, 'Electronic', 'Random Access Memories/Instant Crush.mp3', '00:05:37', FALSE),
    ('Lose Yourself to Dance', 2, 2, 'Electronic', 'Random Access Memories/Lose Yourself to Dance.mp3', '00:05:53', FALSE),
    ('Touch', 2, 2, 'Electronic', 'Random Access Memories/Touch.mp3', '00:08:18', FALSE),
    ('Get Lucky', 2, 2, 'Electronic', 'Random Access Memories/Get Lucky.mp3', '00:06:09', FALSE),
    ('Beyond', 2, 2, 'Electronic', 'Random Access Memories/Beyond.mp3', '00:04:50', FALSE),
    ('Motherboard', 2, 2, 'Electronic', 'Random Access Memories/Motherboard.mp3', '00:05:41', FALSE),
    ('Fragments of Time', 2, 2, 'Electronic', 'Random Access Memories/Fragments of Time.mp3', '00:04:39', FALSE),
    ('Doin'' It Right', 2, 2, 'Electronic', 'Random Access Memories/Doin'' It Right.mp3', '00:04:11', FALSE),
    ('Contact', 2, 2, 'Electronic', 'Random Access Memories/Contact.mp3', '00:06:21', FALSE),

    -- Songs from "The Miseducation of Lauryn Hill"
    ('Intro', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/Intro.mp3', '00:00:47', FALSE),
    ('Lost Ones', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/Lost Ones.mp3', '00:05:33', TRUE),
    ('Ex-Factor', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/Ex-Factor.mp3', '00:05:26', TRUE),
    ('To Zion', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/To Zion.mp3', '00:06:09', FALSE),
    ('Doo Wop (That Thing)', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/Doo Wop (That Thing).mp3', '00:05:20', TRUE),
    ('Superstar', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/Superstar.mp3', '00:04:57', FALSE),
    ('Final Hour', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/Final Hour.mp3', '00:04:16', TRUE),
    ('When It Hurts So Bad', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/When It Hurts So Bad.mp3', '00:05:42', FALSE),
    ('I Used to Love Him', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/I Used to Love Him.mp3', '00:05:39', FALSE),
    ('Forgive Them Father', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/Forgive Them Father.mp3', '00:05:15', FALSE),
    ('Every Ghetto, Every City', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/Every Ghetto, Every City.mp3', '00:05:14', TRUE),
    ('Nothing Even Matters', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/Nothing Even Matters.mp3', '00:05:50', FALSE),
    ('Everything Is Everything', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/Everything Is Everything.mp3', '00:04:53', TRUE),
    ('The Miseducation of Lauryn Hill', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/The Miseducation of Lauryn Hill.mp3', '00:03:55', FALSE),
    ('Can''t Take My Eyes Off of You', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/Can''t Take My Eyes Off of You.mp3', '00:03:41', FALSE),
    ('Tell Him', 3, 3, 'Hip Hop', 'The Miseducation of Lauryn Hill/Tell Him.mp3', '00:04:40', FALSE),

    -- Songs from "Thriller"
    ('Wanna Be Startin'' Somethin''', 1, 4, 'Pop', 'Thriller/Wanna Be Startin'' Somethin''.mp3', '00:06:03', FALSE),
    ('Baby Be Mine', 1, 4, 'Pop', 'Thriller/Baby Be Mine.mp3', '00:04:20', FALSE),
    ('The Girl Is Mine', 1, 4, 'Pop', 'Thriller/The Girl Is Mine.mp3', '00:03:42', FALSE),
    ('Thriller', 1, 4, 'Pop', 'Thriller/Thriller.mp3', '00:05:57', FALSE),
    ('Beat It', 1, 4, 'Rock', 'Thriller/Beat It.mp3', '00:04:18', TRUE),
    ('Billie Jean', 1, 4, 'Pop', 'Thriller/Billie Jean.mp3', '00:04:54', FALSE),
    ('Human Nature', 1, 4, 'Pop', 'Thriller/Human Nature.mp3', '00:04:06', FALSE),
    ('P.Y.T. (Pretty Young Thing)', 1, 4, 'Pop', 'Thriller/P.Y.T. (Pretty Young Thing).mp3', '00:03:58', FALSE),
    ('The Lady in My Life', 1, 4, 'Pop', 'Thriller/The Lady in My Life.mp3', '00:04:59', FALSE),

    -- Songs from "Currents"
    ('Let It Happen', 4, 5, 'Pop', 'Currents/Let It Happen.mp3', '00:07:47', FALSE),
    ('Nangs', 4, 5, 'Pop', 'Currents/Nangs.mp3', '00:01:47', FALSE),
    ('The Moment', 4, 5, 'Pop', 'Currents/The Moment.mp3', '00:04:15', FALSE),
    ('Yes I''m Changing', 4, 5, 'Pop', 'Currents/Yes I''m Changing.mp3', '00:04:30', TRUE),
    ('Eventually', 4, 5, 'Pop', 'Currents/Eventually.mp3', '00:05:19', FALSE),
    ('Gossip', 4, 5, 'Pop', 'Currents/Gossip.mp3', '00:00:55', FALSE),
    ('The Less I Know the Better', 4, 5, 'Pop', 'Currents/The Less I Know the Better.mp3', '00:03:36', TRUE),
    ('Past Life', 4, 5, 'Pop', 'Currents/Past Life.mp3', '00:03:48', FALSE),
    ('Disciples', 4, 5, 'Pop', 'Currents/Disciples.mp3', '00:01:48', FALSE),
    ('Cause I''m a Man', 4, 5, 'Pop', 'Currents/Cause I''m a Man.mp3', '00:04:01', TRUE),
    ('Reality in Motion', 4, 5, 'Pop', 'Currents/Reality in Motion.mp3', '00:04:12', FALSE),
    ('Love/Paranoia', 4, 5, 'Pop', 'Currents/Love/Paranoia.mp3', '00:03:06', TRUE),
    ('New Person, Same Old Mistakes', 4, 5, 'Pop', 'Currents/New Person, Same Old Mistakes.mp3', '00:06:03', FALSE),
  
    -- Songs from "Wolfgang Amadeus"
    ('Lisztomania', 5, 6, 'Rock', 'Wolfgang Amadeus/Lisztomania.mp3', '00:04:09', FALSE),
    ('1901', 5, 6, 'Rock', 'Wolfgang Amadeus/1901.mp3', '00:03:18', FALSE),
    ('Fences', 5, 6, 'Rock', 'Wolfgang Amadeus/Fences.mp3', '00:03:50', FALSE),
    ('Love Like a Sunset', 5, 6, 'Rock', 'Wolfgang Amadeus/Love Like a Sunset.mp3', '00:07:39', FALSE),
    ('Lasso', 5, 6, 'Rock', 'Wolfgang Amadeus/Lasso.mp3', '00:02:50', FALSE),
    ('Rome', 5, 6, 'Rock', 'Wolfgang Amadeus/Rome.mp3', '00:04:49', FALSE),
    ('Countdown', 5, 6, 'Rock', 'Wolfgang Amadeus/Countdown.mp3', '00:04:00', FALSE),
    ('Girlfriend', 5, 6, 'Rock', 'Wolfgang Amadeus/Girlfriend.mp3', '00:03:24', FALSE),
    ('Armistice', 5, 6, 'Rock', 'Wolfgang Amadeus/Armistice.mp3', '00:03:06', FALSE),

    -- Songs from "hella (˃̣̣̥╭╮˂̣̣̥) ✧ ♡ ‧º·˚"
    ('avOcadO SHakE૮꒰ ˶• ༝ •˶꒱ა ̅_̅/̷̚ʾ', 6, 7, 'Pop', 'hella/avOcadO SHakE.mp3', '00:03:45', TRUE),
    ('SPIKY BOiz', 6, 7, 'Hip Hop', 'hella/SPIKY BOiz.mp3', '00:04:10', TRUE),
    ('LiGhT rAiLs *ੈ✩‧₊˚', 6, 7, 'Hip Hop', 'hella/LiGhT rAiLs.mp3', '00:03:55', TRUE),
    ('yes LOvELy', 6, 7, 'Hip Hop', 'hella/yes LOvELy.mp3', '00:04:25', TRUE),
    ('L’Eggo MY EGO', 6, 7, 'Hip Hop', 'hella/L’Eggo MY EGO.mp3', '00:04:00', TRUE),
    ('thanksgivin', 6, 7, 'Hip Hop', 'hella/thanksgivin.mp3', '00:03:50', TRUE),
    ('COuGhDrOPs (,,Ծ‸Ծ,, )', 6, 7, 'Hip Hop', 'hella/COuGhDrOPs.mp3', '00:04:15', TRUE),
    ('i KnOW itS LatE… ♥︎(❀❛ ֊ ❛„)♡', 6, 7, 'Hip Hop', 'hella/i KnOW itS LatE.mp3', '00:04:05', TRUE),
    ('cOoL WATeR foR thE nIGHT', 6, 7, 'Hip Hop', 'hella/cOoL WATeR foR thE nIGHT.mp3', '00:03:45', FALSE),
    ('MiNt cHoCoLaTe', 6, 7, 'Hip Hop', 'hella/MiNt cHoCoLaTe.mp3', '00:04:10', TRUE),
    ('JoEys song ༼つ ◕_◕ ༽つ', 6, 7, 'Hip Hop', 'hella/JoEys song.mp3', '00:03:55', FALSE),
    ('BiG IsLaND jazz hOUr', 6, 7, 'Hip Hop', 'hella/BiG IsLaND jazz hOUr.mp3', '00:04:25', FALSE),
    ('LONG in the tOOth', 6, 7, 'Hip Hop', 'hella/LONG in the tOOth.mp3', '00:04:00', TRUE),
    ('PrAisE nIgHt BluES InteRLUde', 6, 7, 'Hip Hop', 'hella/PrAisE nIgHt BluES InteRLUde.mp3', '00:03:50', FALSE),
    ('PLAYSTATION 2', 6, 7, 'Hip Hop', 'hella/PLAYSTATION 2.mp3', '00:04:15', TRUE),
    ('a LEAp in tIME', 6, 7, 'Hip Hop', 'hella/a LEAp in tIME.mp3', '00:04:05', TRUE),
    ('rUN tHE FaDE', 6, 7, 'Hip Hop', 'hella/rUN tHE FaDE.mp3', '00:03:45', FALSE),
    ('STeAKFACe** ᕙ(⇀‸↼‶)ᕗ', 6, 7, 'Hip Hop', 'hella/STeAKFACe.mp3', '00:04:10', TRUE),
    ('SLOPES', 6, 7, 'Hip Hop', 'hella/SLOPES.mp3', '00:03:55', TRUE),
    ('♡ StiCKy piCtURe SyNDroMe ʕ•́ᴥ•̀ʔっ♡', 6, 7, 'Hip Hop', 'hella/StiCKy piCtURe SyNDroMe.mp3', '00:04:25', FALSE),
    ('WOWoW! ✎ (❁ᴗ͈ˬᴗ͈)', 6, 7, 'Hip Hop', 'hella/WOWoW!.mp3', '00:04:00', FALSE),
    ('silence STArEs me down', 6, 7, 'Hip Hop', 'hella/silence STArEs me down.mp3', '00:03:50', TRUE),
    ('VOoDOo BOogie', 6, 7, 'Hip Hop', 'hella/VOoDOo BOogie.mp3', '00:04:15', TRUE),
    ('siGiL aNd the MaZE ✼ ҉ ✼ ҉', 6, 7, 'Hip Hop', 'hella/siGiL aNd the MaZE.mp3', '00:04:05', FALSE);


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
    (3, 63),  -- Adding 'Lisztomania' to Chill Vibes playlist
    (1, 72),  -- Adding 'Advocado Shake' to Favorites playlist
    (2, 92);  -- Adding 'Wowow' to Workout Mix playlist