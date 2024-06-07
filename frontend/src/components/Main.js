import './Main.css';

import { useState, useEffect } from 'react';
import TempoApi from '../api';
import TrackList from './TrackList';
import { v4 as uuidv4 } from "uuid";



const Main = ({ handleSectionChange, activeSection }) => {
    const [discover, setDiscover] = useState({ albumData: [], genreData: [] });
    const [songs, setSongs] = useState([]);

    // Mapping genre names to their corresponding icons
    // const genreIcons = {
    //     'Hip Hop': hiphopIcon,
    //     'Rock': rockIcon,
    //     'Pop': popIcon,
    //     'Electronic': electronicIcon
    // };

    useEffect(() => {
        async function homePage() {
            const result = await TempoApi.getDisc();
            console.log(result);
            setDiscover(result);
        }
        homePage();
    }, []);

    async function handleGenreClick(genre) {
        const result = await TempoApi.getSongsByGenre(genre);
        console.log(result);
        setSongs(result);
        handleSectionChange('trackList');
    };

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
                                <li key={uuidv4()}>
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
            {activeSection === 'trackList' && <TrackList songs={songs.songs} />}


        </div>
    );
};


export default Main;