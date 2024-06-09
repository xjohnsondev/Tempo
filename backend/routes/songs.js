const Song = require("../models/song");
const express = require("express");
const router = express.Router();

/** 
 * GET /songs
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
 * GET /songs/:song
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
 * GET /songs/artist/:artist
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

  /** 
 * GET /songs/genre/:genre
 * 
 * Retrieves information about songs of a specific genre.
 * 
 * Parameters:
 *  - :genre: The genre of the songs to retrieve.
 * 
 * Returns:
 *  - JSON object containing an array of songs of the requested genre.
 * 
 * Error Handling:
 *  - If an error occurs during the retrieval of the songs, 
 * it forwards the error to the error handling middleware.
 */
router.get("/genre/:genre", async function (req, res, next) {
  try {
    const genreParam = decodeURIComponent(req.params.genre);
    const genre = genreParam.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const songs = await Song.getSongsByGenre(genre);
    return res.json({ songs });
  } catch (e) {
    return next(e);
  }
});

/**
 * GET /songs/album/:album_id
 * 
 * Retrieves information about songs in a specific album.
 * 
 * Parameters:
 *  - :album_id: The ID of the album whose songs are to be retrieved.
 * 
 * Returns:
 *  - JSON object containing an array of songs from the requested album.
 * 
 * Error Handling:
 *  - If an error occurs during the retrieval of the songs,
 *    it forwards the error to the error handling middleware.
 */
router.get("/album/:album_id", async function (req, res, next) {
  try{
    const id = req.params.album_id;
    const songs = await Song.getSongsByAlbum(id);
    return res.json({ songs });
  } catch (e) {
    return next(e);
  }
})




module.exports = router;
