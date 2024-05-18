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

    /****
    * Returns some unique albums for discover page
    * 
    * {album_name, artist, artwork_image}
    ****/
    static async getAlbums() {
        const result = await db.query(
            `SELECT DISTINCT *
            FROM (
                SELECT album_name, artist, artwork_image
                FROM songs
                ORDER BY RANDOM()
                LIMIT 5
            )`
        );
        const albums = result.rows;
        if (albums.length === 0) throw new NotFoundError(`No albums found`);
        return albums;
    }



    
}
module.exports = Song;
