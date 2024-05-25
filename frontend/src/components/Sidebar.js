import './Sidebar.css';
import musicCover from '../images/musicCover.jpeg'
import TempoApi from '../api';
import { useState, useEffect } from 'react';

const Sidebar = ({homeClick}) => {
    const [sidePlaylists, setSidePlaylists] = useState([]);

    useEffect(() => {
        async function getUserPlaylists() {
            try {
                const result = await TempoApi.getUserPlaylists(1);
                console.log(result.playlists);
                setSidePlaylists(result.playlists);
            } catch (error) {
                console.error("Error fetching user playlists:", error);
            }
        }
        getUserPlaylists();
    }, []);



    return (
        <div className="sidebar-shell">
            <div className='sidebar'>
                <div className="icon-bar">
                <i className="fa-solid fa-house home-btn" onClick={homeClick}></i>
                    <i className="fa-solid fa-heart heart-btn"></i>
                    <i className="fa-solid fa-circle-plus add-btn"></i>
                    <i className="fa-solid fa-bars list-btn"></i>
                </div>
                <hr></hr>
                    <ul className='sidebar-bottom'>
                        {sidePlaylists.map((tile) => (
                            <li key={tile.id} className='sideTile'>
                                <img src={musicCover}></img>
                                
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    );
};

export default Sidebar;
