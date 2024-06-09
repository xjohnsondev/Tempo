import TempoApi from '../api';
import './TrackList.css';


const TrackList = ({ songs }) => {
    const formatTrackLength = (length) => {
        // Extract hours, minutes, and seconds
        const [hours, minutes, seconds] = length.split(':');

        // Convert to numbers and remove leading zeros
        const minutesInt = parseInt(minutes, 10);
        const secondsInt = parseInt(seconds, 10);

        // Format as m:ss or mm:ss
        return `${minutesInt}:${secondsInt.toString().padStart(2, '0')}`;
    };

    if (!songs || songs.length === 0) {
        return (
            <div>
                <p style={{ color: 'red' }}>No songs</p>
            </div>
        );
    }

    return (
        <div>
            {console.table(songs)}
            <div className='tracklist-header'>
                <div className='header-title'>Title</div>
                <div className='header-plays'>Plays</div>
                <div className='header-length'>Length</div>
            </div>
            
            <ul className='tracklist'>
                {songs.map((song) => (
                    <li className='listing' key={song.song_id}>
                        <img className="listing-art" src={song.artwork_image} alt='Album Art' />
                        <div className='song-details'>
                            <h4>
                                {song.song_name}
                                {song.is_explicit && <img src='/images/explicit.png' className='explicit-tag' alt="explicit"></img>}
                            </h4>

                            <span className='tl-artist'>
                                {song.artist_name}
                            </span>
                        </div>
                        <p className='tl-plays'>{song.number_of_plays}</p>
                        <p className='tl-length'>{formatTrackLength(song.track_length)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrackList;
