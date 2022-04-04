import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const handlePlaySong = (e) => {
    e.preventDefault();
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleTimeUpdate = e => {
      setSongInfo({ ...songInfo,
          currentTime: Math.floor(e.target.currentTime),
          duration: Math.floor(e.target.duration)
      })
  }
  const formatTime = time => {
      return Math.floor(time/60) + ':' +  ( "0" + Math.floor(time % 60)).slice(-2)
  }
  const handleDrag = e => {
      audioRef.current.currentTime = e.target.value
      setSongInfo({...songInfo, currentTime: e.target.value})
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input 
            min={0}
            max={songInfo.duration ?? 0}
            value={songInfo.currentTime ?? 0}
            onChange={handleDrag}
            type="range"
        />
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={handlePlaySong}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio 
        src={currentSong.audio} 
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
      ></audio>
    </div>
  );
};

export default Player;
