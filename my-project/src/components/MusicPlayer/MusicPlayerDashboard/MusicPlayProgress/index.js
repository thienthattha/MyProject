import React, { useEffect, useRef } from "react";

function MusicPlayProgress({ onCurrentTime, onGetRefProgress }) {
  const progress = useRef();

  useEffect(() => {
    onGetRefProgress(progress);
  }, [onGetRefProgress, progress]);

  const secondsToMinutes = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);
    let formattedTime =
      String(minutes).padStart(2, "0") +
      ":" +
      String(remainingSeconds).padStart(2, "0");
    return formattedTime;
  };

  return (
    <div className="music-player__dashboard__progress">
      <span className="time time--current">
        {secondsToMinutes(onCurrentTime?.currentTime)}
      </span>
      <input
        ref={progress}
        className="progress"
        type="range"
        defaultValue="0"
        step="1"
        min="0"
        max="100"
      ></input>
      <span className="time time--duration">
        {secondsToMinutes(onCurrentTime?.duration)}
      </span>
    </div>
  );
}

export default MusicPlayProgress;
