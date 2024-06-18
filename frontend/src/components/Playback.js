import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Playback.css';
import { useState, useRef } from 'react';

const Playback = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef();

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
      <AudioPlayer
        // className='audio-player'
        src="http://localhost:3001/music/Bad/01 - Bad.mp3"  // Replace with the dynamic URL as needed
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        ref={playerRef}
      />
      {/* <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
    </div>
  );
}

export default Playback;
