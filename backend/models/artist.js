const db = require("../db");
const { NotFoundError, BadRequestError } = require("../expressError");
const axios = require("axios");

class Artist {

   /**
 * Returns the artist with the specified ID.
 * 
 * @param {number} artist_id - The ID of the artist to retrieve.
 * @returns {Object} - An object containing the artist details.
 * @throws {NotFoundError} - Throws a NotFoundError if the artist cannot be retrieved.
 */
   static async getArtistById(artist_id){
    const result = await db.query(
        `SELECT *
        FROM artists
        WHERE artist_id = $1`,
        [artist_id]
    );
    const artist = result.rows[0];
    if (!artist) throw new NotFoundError(`Could not retrieve artist`);
    return artist;
   }

}

module.exports = Artist;
