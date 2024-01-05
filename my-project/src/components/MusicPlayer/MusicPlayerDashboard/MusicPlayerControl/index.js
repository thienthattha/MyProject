import {
  FaArrowRotateRight,
  FaBackwardStep,
  FaPause,
  FaPlay,
  FaForwardStep,
} from "react-icons/fa6";
import { FaRandom } from "react-icons/fa";

function MusicPlayerControl({
  onIsButtonPlay,
  onHandleRepeat,
  onHandleNextPrev,
  onHandlePlayPause,
  onHandleRandom,
}) {
  return (
    <div className="music-player__dashboard__control">
      <div className="icon icon--repeat" onClick={onHandleRepeat}>
        <FaArrowRotateRight />
      </div>
      <div className="icon icon--prev" onClick={() => onHandleNextPrev("prev")}>
        <FaBackwardStep />
      </div>
      {onIsButtonPlay ? (
        <div
          className="icon icon--play-pause"
          onClick={() => onHandlePlayPause("play")}
        >
          <FaPlay />
        </div>
      ) : (
        <div
          className="icon icon--play-pause"
          onClick={() => onHandlePlayPause("pause")}
        >
          <FaPause />
        </div>
      )}
      <div className="icon icon--next" onClick={() => onHandleNextPrev("next")}>
        <FaForwardStep />
      </div>
      <div className="icon icon--random" onClick={onHandleRandom}>
        <FaRandom />
      </div>
    </div>
  );
}

export default MusicPlayerControl;
