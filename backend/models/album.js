const db = require("../db");
const { NotFoundError, BadRequestError } = require("../expressError");
const axios = require("axios");

class Album {

    /****
    * Returns some unique albums for discover page
    * 
    * {album_name, artist, artwork_image}
    ****/
    static async getDiscAlbums() {
        const result = await db.query(
            `SELECT *
            FROM albums
            ORDER BY RANDOM()
            LIMIT 5
            `
        );
        const albums = result.rows;
        if (albums.length === 0) throw new NotFoundError(`No albums found`);
        return albums;
    }    
}
module.exports = Album;