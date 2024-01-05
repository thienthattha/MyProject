import { FaEllipsis } from "react-icons/fa6";

function MusicPlayerList({ onSongs, onHandleOption }) {
  return (
    <div className="music-player__list">
      {onSongs.map((song, index) => {
        return (
          <div key={index} className="song">
            <div className="song__img">
              <div className="song__img__box">
                <img src={song?.image} alt="" />
              </div>
            </div>
            <div className="song__body">
              <h6 className="song__body__title">{song?.name}</h6>
              <p className="song__body__auther">{song?.singder}</p>
            </div>
            <div className="song__option" onClick={(evt) => onHandleOption(evt)}>
              <FaEllipsis />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MusicPlayerList;
