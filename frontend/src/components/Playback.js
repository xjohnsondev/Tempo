import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Playback.css';
import { useState, useRef, useEffect } from 'react';

const Playback = ({ selectedSong }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [songRoute, setSongRoute] = useState(selectedSong && selectedSong.file_path ? selectedSong.file_path : null);
    const playerRef = useRef();

    /**
    * Function to load and play the selected song when `selectedSong` changes.
    */
    useEffect(() => {
        const loadSong = () => {
            if (playerRef.current && playerRef.current.audio && selectedSong) {
                // Setting the audio source dynamically based on selectedSong's file_path.
                playerRef.current.audio.current.src = `http://localhost:3001/music/${selectedSong.file_path}`;
                playerRef.current.audio.current.load();
                setIsPlaying(true);
            }
        };
        loadSong();
    }, [selectedSong]);

    /**
    * Function to toggle play/pause state of the audio.
    */
    const togglePlay = () => {
        if (isPlaying) {
            playerRef.current.audio.current.pause();
        } else {
            playerRef.current.audio.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="playback">

            {selectedSong &&
                <div className='playback-info'>
                    <img src={selectedSong.artwork_image} alt='artwork' />
                    <h4>{selectedSong.song_name}</h4>
                    <span>{selectedSong.artist_name}</span>
                </div>
            }
            <AudioPlayer
                showDownloadProgress={false}
                autoPlay
                showSkipControls
                showJumpControls={false}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                ref={playerRef}
            />
        </div>
    );
}

export default Playback;
