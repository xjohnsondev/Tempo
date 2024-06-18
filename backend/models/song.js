const db = require("../db");
const { NotFoundError, BadRequestError } = require("../expressError");
const axios = require("axios");

class Song {

    /****
     * Given a song id, return song data
     * 
     * {song_id, song_name, artist, 
     * album_name, artwork_image, genre, file_path
     * number_of_plays, track_length, is_explicit}
     ****/
    static async get(id) {
        const result = await db.query(
            `SELECT *
            FROM songs
            WHERE song_id = $1`, [id]
        );
        const song = result.rows[0];
        if (!song) throw new NotFoundError(`No song with id: ${id}`);
        return song;
    }

    /****
     * Returns all songs 
     * 
     * {song_id, song_name, artist, 
     * album_name, artwork_image, genre, file_path
     * number_of_plays, track_length, is_explicit}
     ****/
    static async getAll() {
        const result = await db.query(
            `SELECT *
                FROM songs`
        );
        const songs = result.rows;
        if (!songs) throw new NotFoundError(`No songs`);
        return songs;
    }

    /****
    * Returns all songs for given artist
    * 
    * {song_id, song_name, artist, 
    * album_name, artwork_image, genre, file_path
    * number_of_plays, track_length, is_explicit}
    ****/
    static async getArtistSongs(artist) {
        const result = await db.query(
            `SELECT *
                FROM songs
                WHERE artist = $1`, [artist]
        )
        const artistResult = result.rows[0];
        if (!artistResult) throw new NotFoundError(`We don't have that artist's music`);
        return artistResult;
    }    

     /***
     * Returns all distinct genres available in the database
     * 
     * Returns an array of strings representing distinct genres.
     * Throws a NotFoundError if no genres are found.
     ***/
    static async getGenres() {
        const result = await db.query(
            `SELECT genre
            FROM (
              SELECT DISTINCT genre
              FROM songs
            ) AS distinct_genres
            ORDER BY RANDOM();
            `
        )
        const genreResult = result.rows;
        if (!genreResult) throw new NotFoundError(`No genres`);
        return genreResult;
    }

     /***
     * Returns all songs belonging to the specified genre
     * 
     * @param {string} genre - The genre for which to retrieve songs
     * Returns an array of song objects matching the specified genre.
     * Ordered by song name.
     * Throws a NotFoundError if no songs are found in the specified genre.
     ***/
    static async getSongsByGenre(genre) {
        const result = await db.query(
            `SELECT 
                s.*,
                al.artwork_image,
                al.album_name,
                ar.artist_name
            FROM 
                songs AS s
            JOIN 
                albums AS al ON s.album_id = al.album_id
            JOIN 
                artists AS ar ON s.artist_id = ar.artist_id           
             WHERE 
                s.genre = $1
            ORDER BY s.song_name ASC`,
            [genre]
        );
        const genreSongs = result.rows;
        if (!genreSongs) throw new NotFoundError(`No songs in this genre`);
        
        return genreSongs;
    }
    
/**
 * Returns all songs belonging to the specified album.
 * 
 * @param {number} album_id - The ID of the album for which to retrieve songs.
 * @returns {Array} - An array of song objects from the specified album.
 * @throws {NotFoundError} - Throws a NotFoundError if no songs are found in the specified album.
 */
    static async getSongsByAlbum(album_id) {
        const result = await db.query(
            `SELECT 
                s.*,
                al.artwork_image,
                al.album_name,
                ar.artist_name
            FROM 
                songs AS s
            JOIN 
                albums AS al ON s.album_id = al.album_id
            JOIN
                artists AS ar ON s.artist_id = ar.artist_id
            WHERE 
                s.album_id = $1`,
            [album_id]
        );
        const data = result.rows;
        if (data.length === 0) throw new NotFoundError('No songs found');
        return data;
    }
}
module.exports = Song;
