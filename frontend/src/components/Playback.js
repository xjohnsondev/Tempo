import './Playback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

const Playback = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };
    return (
        <div className="playback">
            <div className="icon-container">
                <i className="fa-solid fa-repeat pb repeat"></i>
                <i className="fa-solid fa-backward-step pb back"></i>
                {isPlaying ? (
                    <i className="fa-solid fa-play pb play" onClick={() => togglePlay()}></i>
                ) : (
                    <i className="fa-solid fa-pause pb pause" onClick={() => togglePlay()}></i>
                )}
                <i className="fa-solid fa-forward-step pb forward"></i>
                <i className="fa-solid fa-shuffle pb shuffle"></i>
            </div>
        </div>
    );
}

export default Playback;