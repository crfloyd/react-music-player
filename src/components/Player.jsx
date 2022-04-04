import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from 'react'
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong }) => {

    const audioRef = useRef(null)

    const handlePlaySong = e => {
        audioRef.current.play()
        console.log(audioRef)
    }

  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon 
            className="skip-back" 
            size="2x" 
            icon={faAngleLeft} />
        <FontAwesomeIcon 
            className="play" 
            size="2x" 
            icon={faPlay}
            onClick={handlePlaySong} />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio src={currentSong.audio} ref={audioRef}></audio>
    </div>
  );
};

export default Player;
