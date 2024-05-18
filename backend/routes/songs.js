const Song = require("../models/song");
const express = require("express");
const router = express.Router();

/** 
 * GET /
 * 
 * Retrieves information about all songs.
 * 
 * Returns:
 *  - JSON object containing information about all songs.
 * 
 * Error Handling:
 *  - If an error occurs during the retrieval of the songs, it forwards the error to the error handling middleware.
 */
router.get("/", async function (req, res, next) {
    try {
      const songs = await Song.getAll();
      return res.json( songs );
    } catch (e) {
      return next(e);
    }
  });


/** 
 * GET /:song
 * 
 * Retrieves information about a specific song.
 * 
 * Parameters:
 *  - :song: The identifier of the song to retrieve.
 * 
 * Returns:
 *  - JSON object containing information about the requested song.
 * 
 * Error Handling:
 *  - If an error occurs during the retrieval of the song, it forwards the error to the error handling middleware.
 */
router.get("/:song", async function (req, res, next) {
    try {
      const song = await Song.get(req.params.song);
      return res.json( song );
    } catch (e) {
      return next(e);
    }
  });

/** 
 * GET /artist/:artist
 * 
 * Retrieves songs by a specific artist.
 * 
 * Parameters:
 *  - :artist: The name of the artist whose songs are to be retrieved.
 * 
 * Returns:
 *  - JSON object containing the artist name and an array of songs by the artist.
 * 
 * Error Handling:
 *  - If an error occurs during the retrieval of songs, it forwards the error to the error handling middleware.
 */
  router.get("/artist/:artist", async function (req, res, next) {
    try {
        const artist = req.params.artist;
        const songs = await Song.getArtistSongs(artist);
        return res.json({artist, songs});
    } catch (e) {
      return next(e);
    }
  });



module.exports = router;
