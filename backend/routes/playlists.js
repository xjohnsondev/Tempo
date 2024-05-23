const Playlist = require("../models/playlist");
const express = require("express");
const router = express.Router();

router.get('/user/:user_id', async (req, res, next) => {
    try {
        let userId = parseInt(req.params.user_id, 10);
        if (isNaN(userId)) {
            return res.status(400).json({ error: 'Invalid user_id' });
        }
        const playlists = await Playlist.getUserPlaylists(userId); 
        res.json({ playlists });
    } catch (e) {
        next(e);
    }
});


module.exports = router;