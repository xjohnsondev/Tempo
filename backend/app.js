const Album = require("./models/album");
const Song = require("./models/song");
const Playlist = require("./models/playlist");

const express = require("express");
const cors = require("cors");

const { NotFoundError } = require("./expressError");

// const { authenticateJWT } = require("./middleware/auth");



const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
// app.use(authenticateJWT);

const songsRoutes = require("./routes/songs");
const albumsRoutes = require("./routes/albums");
const playlistRoutes = require("./routes/playlists");

app.use("/songs", songsRoutes);
app.use("/albums", albumsRoutes);
app.use("/playlists", playlistRoutes);

app.get("/", async (req, res, next) => {
  try {
    const albumData = await Album.getDiscAlbums();
    const genreData = await Song.getGenres();
    return res.json({ albumData, genreData })
    // res.json({ message: "Welcome to your Tempo application" });
  } catch (e) {
    next(e);
  }
});

// Route to serve the MP3 files
// http://localhost:3000/music/albumFolderName/yourfile.mp3 - route template
// Serve static files from the "music" directory
app.use('/music', express.static('/Users/xjohnsondev/Documents/coding/Tempo/backend/music'));

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;