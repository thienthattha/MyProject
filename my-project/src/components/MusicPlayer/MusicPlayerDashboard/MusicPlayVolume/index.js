import React, { useEffect, useRef } from "react";
import { FaVolumeLow, FaVolumeXmark } from "react-icons/fa6";

function MusicPlayVolume({ onIsButtonVolue, onHandleVolum, onCurrentVolume, onGetRefVolume }) {
  const volume = useRef();

  useEffect(() => {
    onGetRefVolume(volume);
  }, [onGetRefVolume, volume]);

  return (
    <div className="music-player__dashboard__volume">
      {onIsButtonVolue ? (
        <div
          className="icon icon--volum"
          onClick={(evt) => onHandleVolum({ evt: evt, type: "opentVolum" })}
        >
          <FaVolumeLow />
        </div>
      ) : (
        <div
          className="icon icon--volum"
          onClick={(evt) => onHandleVolum({ evt: evt, type: "offVolum" })}
        >
          <FaVolumeXmark />
        </div>
      )}
      <input
        ref={volume}
        className="volume"
        type="range"
        defaultValue="100"
        step="1"
        min="0"
        max="100"
      ></input>
      <span className="percent">{`${onCurrentVolume}%`}</span>
    </div>
  );
}

export default MusicPlayVolume;
