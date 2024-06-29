const Artist = require("../models/artist");
const express = require("express");
const router = express.Router();


/**
 * GET /artists/:artist_id
 * 
 * Retrieves information about a specific artist.
 * 
 * Parameters:
 *  - :artist_id: The ID of the artist whose information is to be retrieved.
 * 
 * Returns:
 *  - JSON object containing the artist information.
 * 
 * Error Handling:
 *  - If an error occurs during the retrieval of the artist information,
 *    it forwards the error to the error handling middleware.
 */
router.get("/:artist_id", async function (req, res, next) {
    try {
      const artist_id = req.params.artist_id;
      const artist = await Artist.getArtistById(artist_id);
      return res.json({ artist });
    } catch (e) {
      return next(e);
    }
  });

  
  module.exports = router;
