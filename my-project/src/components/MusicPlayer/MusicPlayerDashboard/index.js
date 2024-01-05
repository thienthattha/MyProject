import React, { useState, useEffect, useRef } from "react";

import MusicPlayerControl from "./MusicPlayerControl";
import MusicPlayProgress from "./MusicPlayProgress";
import MusicPlayVolume from "./MusicPlayVolume";

function MusicPlayerDashboard({
  onSongs,
  onDataLayout,
  onCurrentIndex,
  onHandleRepeat,
  onHandleRandom,
}) {
  const audio = useRef();
  const cd = useRef();
  const progress = useRef();
  const volume = useRef();
  const cdThumbAnimate = useRef();
  const [cdWidth, setCdWidth] = useState(0);
  const [isButtonPlay, setButtonPlay] = useState(true);
  const [isButtonVolue, setButtonVolue] = useState(true);
  const [currentTime, setCurrentTime] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [currentVolume, setCurrentVolume] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(4);

  useEffect(() => {
    if (cd.current) {
      cdThumbAnimate.current = cd.current.animate(
        [{ transform: "rotate(360deg)" }],
        {
          duration: 30000,
          iterations: Infinity,
        }
      );

      cdThumbAnimate.current.pause();
    }
  }, [cd.current]);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      setCurrentTime({
        currentTime: 0,
        duration: audio.current.duration,
      });

      setCurrentVolume(audio.current.volume * 100);
    };

    audio.current.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    if (cd.current) {
      setCdWidth(cd.current.offsetWidth);
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newWidth = cdWidth - scrollTop;
      if (cd.current) {
        cd.current.style.width = newWidth > 0 ? newWidth + "px" : 0;
        cd.current.style.opacity = newWidth / cdWidth;
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [cdWidth]);

  const getRefProgress = (ref) => {
    progress.current = ref.current;
  };

  const getRefVolume = (ref) => {
    volume.current = ref.current;
  };

  const handleUpdate = () => {
    audio.current.ontimeupdate = () => {
      const progressPercent = Math.floor(
        (audio.current.currentTime / audio.current.duration) * 100
      );
      const volumePercen = audio.current.volume * 100;

      progress.current.value = progressPercent;
      volume.current.value = volumePercen;

      setCurrentVolume(volumePercen);
      setCurrentTime({
        currentTime: audio.current.currentTime,
        duration: audio.current.duration,
      });
    };
  };

  const handleChange = () => {
    progress.current.onchange = () => {
      const seekTime = Math.floor(
        (audio.current.duration / 100) * progress.current.value
      );
      audio.current.currentTime = seekTime;
    };

    volume.current.onchange = () => {
      const seekVolume = volume.current.value / 100;
      audio.current.volume = seekVolume;
    };
  };

  const handleReset = () => {};

  const handleVolum = (evt) => {
    if (evt.type === "opentVolum") {
      audio.current.volume = 0;
      setButtonVolue(false);
    } else if (evt.type === "offVolum") {
      audio.current.volume = 1;
      setButtonVolue(true);
    }
  };

  const handleCDRotate = (evt) => {
    if (evt === "play") {
      cdThumbAnimate.current.play();
    } else {
      cdThumbAnimate.current.pause();
    }
  };

  const handlePlayPause = (type) => {
    if (type === "play") {
      audio.current.play();
      handleUpdate();
      handleChange();
      handleCDRotate("play");
      setButtonPlay(false);
    } else if (type === "pause") {
      audio.current.pause();
      handleCDRotate("pause");
      setButtonPlay(true);
    }
  };

  const handleNextPrev = (type) => {
    audio.current.pause();

    if (type === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex >= onSongs.length - 1 ? 0 : prevIndex + 1
      );
    } else if (type === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : onSongs.length - 1
      );
    }

    audio.current.onloadeddata = () => {
      handlePlayPause("play");
    };
  };

  return (
    <div className="music-player__dashboard">
      <div className="music-player__dashboard__header">
        <h4 className="title">{onDataLayout?.Title}</h4>
        <h3 className="subtitle">{onSongs?.[currentIndex]?.name}</h3>
      </div>
      <div ref={cd} className="music-player__dashboard__cd">
        <div id="cd-thumb" className="cd-thumb">
          <img src={onSongs?.[currentIndex]?.image} alt="" />
        </div>
      </div>
      <MusicPlayerControl
        onIsButtonPlay={isButtonPlay}
        onHandleRepeat={onHandleRepeat}
        onHandleNextPrev={handleNextPrev}
        onHandlePlayPause={handlePlayPause}
        onHandleRandom={onHandleRandom}
      />
      <MusicPlayProgress
        onCurrentTime={currentTime}
        onGetRefProgress={getRefProgress}
      />
      <MusicPlayVolume
        onIsButtonVolue={isButtonVolue}
        onHandleVolum={handleVolum}
        onCurrentVolume={currentVolume}
        onGetRefVolume={getRefVolume}
      />
      <audio ref={audio} src={onSongs?.[currentIndex].path}></audio>
    </div>
  );
}

export default MusicPlayerDashboard;
