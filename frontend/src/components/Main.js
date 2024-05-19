import './Main.css';
import { useState, useEffect } from 'react';
import TempoApi from '../api';
import { v4 as uuidv4 } from "uuid";


const Main = () => {
    const [showHome, setShowHome] = useState(false);
    const [discover, setDiscover] = useState({albumData : [], genreData : []});

    useEffect(() => {
        async function homePage() {
            const result = await TempoApi.getDisc();
            console.log(result);
            setDiscover(result);
        }
        homePage();
    }, [showHome]);

    if (!discover) {
        return <div>Loading...</div>;
    }

    return (
        <div className="main-home">
            <div className='disc-div'>
                <h1>Discover</h1>
                <ul className='disc-list'>
                    {discover.albumData.map((tile) => (
                        <li key={uuidv4()}>
                            <img src={tile.artwork_image}></img>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='browse-div'>
                <h1>Browse</h1>
                <ul className='disc-list'>
                    {discover.genreData.map((tile) => (
                        <li key={uuidv4()}>
                            <p>{tile.genre}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default Main;