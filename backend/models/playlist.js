const db = require("../db");
const { NotFoundError, BadRequestError } = require("../expressError");
const axios = require("axios");

class Playlist {

    /****
     * Returns playlist with of given user_id
     * 
     ****/
    static async getUserPlaylists(user_id) {
        const result = await db.query(
            `SELECT 
                p.playlist_id,
                p.playlist_name,
                p.user_id,
                JSON_AGG(
                    JSON_BUILD_OBJECT(
                        'song_id', s.song_id,
                        'song_name', s.song_name,
                        'artist', s.artist_id
                    )
                ) AS songs
            FROM 
                playlists p
            LEFT JOIN 
                playlist_songs ps ON p.playlist_id = ps.playlist_id
            LEFT JOIN 
                songs s ON ps.song_id = s.song_id
            WHERE 
                p.user_id = $1
            GROUP BY 
                p.playlist_id, p.playlist_name, p.user_id`,
            [user_id]
        );

        const playlists = result.rows;
        if (playlists.length === 0) throw new NotFoundError(`No playlists found for user_id: ${user_id}`);
        return playlists;
    }


}

module.exports = Playlist;
