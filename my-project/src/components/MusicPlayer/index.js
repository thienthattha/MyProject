import "./MusicPlayer.scss";

import React, { useState, useEffect } from "react";
import { dataLayout, songs } from "./data";
import MusicPlayerDashboard from "./MusicPlayerDashboard";
import MusicPlayerList from "./MusicPlayerList";

function MusicPlayer() {
  
  const handleEvent = () => {};


  const handleRandom = () => {};

  const handleRepeat = () => {};

  const handleOption = () => {};

  return (
    <div className="music-player-wrapper">
      <div className="music-player">
        <MusicPlayerDashboard
          onSongs={songs}
          onDataLayout={dataLayout}
          onHandleRepeat={handleRepeat}
          onHandleRandom={handleRandom}
        />
        <MusicPlayerList onSongs={songs} onHandleOption={handleOption} />
      </div>
    </div>
  );
}

export default MusicPlayer;
