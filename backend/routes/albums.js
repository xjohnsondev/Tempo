const { getAlbumArt } = require("../models/album");
const Album = require("../models/album");
const express = require("express");
const router = express.Router();


/**
 * GET albums/cover/:album_id
 * 
 * Retrieves the cover art of a specific album.
 * 
 * Parameters:
 *  - :album_id: The ID of the album whose cover art is to be retrieved.
 * 
 * Returns:
 *  - JSON object containing the cover art URL or data of the requested album.
 * 
 * Error Handling:
 *  - If an error occurs during the retrieval of the cover art,
 *    it forwards the error to the error handling middleware.
 */
router.get("/cover/:album_id", async function(req, res, next){
    try{
        const id = req.params.album_id;
        const cover = await Album.getAlbumArt(id);
        return res.json({ cover });
    }catch(e){
        next(e);
    }
})

module.exports = router;