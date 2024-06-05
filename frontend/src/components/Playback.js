import './Playback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Playback = () => {
    return (
        <div className="playback">
            {/* <i class="fa-solid fa-pause"></i>  */}
            <i className="fa-solid fa-backward-step pb back"></i>
            <i className="fa-solid fa-play pb play"></i>    
            <i className="fa-solid fa-forward-step pb forward"></i>
   
            <i class="fa-solid fa-shuffle pb shuffle"></i>

            </div>
    );
}

export default Playback;