import './Main.css';
import { useState, useEffect } from 'react';
import TempoApi from '../api';
import { v4 as uuidv4 } from "uuid";


const Main = () => {
    const [showHome, setShowHome] = useState(false);
    const [discover, setDiscover] = useState([]);

    useEffect(() => {
        async function homePage() {
            const result = await TempoApi.getAlbums();
            // console.log(result.data);
            setDiscover(result.data);
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
                {discover.map((tile) => (
                    <div key={uuidv4()}>

                    </div>
                ))}
            </div>
        </div>
    );
};


export default Main;