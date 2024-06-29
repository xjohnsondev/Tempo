import './Main.css';
import { useState, useEffect } from 'react';
import TempoApi from '../api';
import TrackList from './TrackList';
import { v4 as uuidv4 } from "uuid";

const Main = ({ handleSectionChange, activeSection, handleSongSelect, setTracklistInfo, tracklistInfo }) => {
    const [discover, setDiscover] = useState({ albumData: [], genreData: [] });
    const [songs, setSongs] = useState([]);

    /**
    * Function to fetch initial discover data from the API.
    */
    useEffect(() => {
        async function homePage() {
            const result = await TempoApi.getDisc();
            console.log(result);
            setDiscover(result);
        }
        homePage();
    }, []);

    /**
     * Function to handle genre click and fetch songs by genre.
     */
    async function handleGenreClick(genre) {
        const result = await TempoApi.getSongsByGenre(genre);
        console.log(result);
        setSongs(result);
        handleSectionChange('trackList');
    };

    /**
     * Function to handle album click and fetch songs by album ID.
     */
    async function handleAlbumClick(album_id) {
        const result = await TempoApi.getSongsByAlbum(album_id);
        setSongs(result);
        handleSectionChange('trackList');
    }

    async function handleTracklistInfo(data) {
        try {
            if (data.artist_id) {
              const artist = await TempoApi.getArtistById(data.artist_id);
              
              // Update tracklistInfo based on artist data
              setTracklistInfo({
                image: data.image,
                title: data.title,
                info: artist.artist.bio, 
              });
            } else {
              // Handle case where data.artist_id does not exist (album was not clicked)
              setTracklistInfo({
                image: data.image,
                title: data.title,
                info: "",
              });
            }
          } catch (error) {
            console.error("Error fetching artist:", error);
          }
    }

    if (!discover || !tracklistInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="main-home">
            {activeSection === 'home' && (
                <div>
                    <div className='disc-div'>
                        <h1>Discover</h1>
                        <ul className='disc-list'>
                            {discover.albumData.map((tile) => (
                                <li key={uuidv4()} onClick={async () => {
                                    await handleAlbumClick(tile.album_id);
                                    handleTracklistInfo({
                                        title: tile.album_name,
                                        image: tile.artwork_image,
                                        artist_id: tile.artist_id,
                                    });
                                }}>
                                    <img src={tile.artwork_image} alt="Album Artwork" />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='browse-div'>
                        <h1>Browse</h1>
                        <ul className='disc-list'>
                            {discover.genreData.map((genre) => (
                                <li className="browse-list" key={uuidv4()}
                                    onClick={() => {
                                        handleGenreClick(genre.genre);
                                        handleTracklistInfo({
                                            title: genre.genre,
                                            image: `/images/${genre.genre}Icon.png`,
                                        });
                                    }}
                                >
                                    <div className="genre-container">
                                        <img src={`/images/${genre.genre}Icon.png`} alt={`${genre.genre} icon`} />
                                        <p className='genre-label'>{genre.genre}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {activeSection === 'trackList' && <TrackList songs={songs.songs} tracklistInfo={tracklistInfo} handleSongSelect={handleSongSelect} />}
        </div>
    );
};

export default Main;
