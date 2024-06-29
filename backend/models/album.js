const db = require("../db");
const { NotFoundError, BadRequestError } = require("../expressError");
const axios = require("axios");

class Album {

/**
 * Returns some unique albums for the discover page.
 * 
 * @returns {Array} - An array of album objects each containing album_name, artist, and artwork_image.
 * @throws {NotFoundError} - Throws a NotFoundError if no albums are found.
 */
static async getDiscAlbums() {
    const result = await db.query(
        `SELECT *
         FROM albums
         ORDER BY RANDOM()
         LIMIT 5`
    );
    const albums = result.rows;
    if (albums.length === 0) throw new NotFoundError(`No albums found`);
    return albums;
}

/**
 * Returns the artwork image for the specified album.
 * 
 * @param {number} album_id - The ID of the album for which to retrieve the artwork image.
 * @returns {Object} - An object containing the artwork_image of the specified album.
 * @throws {NotFoundError} - Throws a NotFoundError if the artwork cannot be retrieved.
 */
static async getAlbumArt(album_id) {
    const result = await db.query(
        `SELECT artwork_image
         FROM albums
         WHERE album_id = $1`,
        [album_id]
    );
    const cover = result.rows[0];
    if (!cover) throw new NotFoundError(`Could not retrieve artwork`);
    return cover;
}


}
module.exports = Album;
