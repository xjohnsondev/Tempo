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

    static async getGenres() {
        const result = await db.query(
            `SELECT DISTINCT genre
                FROM songs
            `
        )
        const genreResult = result.rows;
        if (!genreResult) throw new NotFoundError(`No genres`);
        return genreResult;
    }

}
module.exports = Song;
