import './Main.css';
import hiphopIcon from '../images/hiphopIcon.png'
import rockIcon from '../images/rockIcon.png'
import popIcon from '../images/popIcon.png'
import electronicIcon from '../images/electronicIcon.png'
import { useState, useEffect } from 'react';
import TempoApi from '../api';
import { v4 as uuidv4 } from "uuid";


const Main = ({ handleSectionChange, activeSection }) => {
    const [discover, setDiscover] = useState({ albumData: [], genreData: [] });

    // Mapping genre names to their corresponding icons
    const genreIcons = {
        'Hip Hop': hiphopIcon,
        'Rock': rockIcon,
        'Pop': popIcon,
        'Electronic': electronicIcon
    };

    useEffect(() => {
        async function homePage() {
            const result = await TempoApi.getDisc();
            console.log(result);
            setDiscover(result);
        }
        homePage();
    }, []);

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
                            {Object.entries(genreIcons).map(([genre, icon]) => (
                                <li className="browse-list" key={uuidv4()}
                                onClick={() => TempoApi.getSongsByGenre(genre).then((result) => console.log(result))}>
                                    <img src={icon} alt={`${genre} icon`} />
                                    <p className='genre-label'>{genre}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}


        </div>
    );
};


export default Main;