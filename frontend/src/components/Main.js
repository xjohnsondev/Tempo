import './Main.css';
import { useState, useEffect } from 'react';
import TempoApi from '../api';
import TrackList from './TrackList';
import { v4 as uuidv4 } from "uuid";


const Main = ({ handleSectionChange, activeSection, handleSongSelect }) => {
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

    if (!discover) {
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
                                <li key={uuidv4()} onClick={() => handleAlbumClick(tile.album_id)}>
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
                                    onClick={() => handleGenreClick(genre.genre)}
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
            {activeSection === 'trackList' && <TrackList songs={songs.songs} handleSongSelect={handleSongSelect} />}


        </div>
    );
};


export default Main;