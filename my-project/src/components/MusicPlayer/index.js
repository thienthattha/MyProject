import "./MusicPlayer.scss";

import React, { useState, useEffect, useRef } from "react";
import {
  FaArrowRotateRight,
  FaBackwardStep,
  FaPause,
  FaPlay,
  FaForwardStep,
  FaVolumeLow,
  FaVolumeXmark,
  FaEllipsis,
} from "react-icons/fa6";
import { FaRandom } from "react-icons/fa";

import { dataLayout, songs } from "./data";

function MusicPlayer() {
  const [cdWidth, setCdWidth] = useState(0);
  const [isButtonPlay, setButtonPlay] = useState(true);
  const [currentTime, setCurrentTime] = useState({
    currentTime: 0,
    duration: 0,
  });
  const audio = useRef();
  const progress = useRef();

  const [timesong, setTimeSong] = useState(0);
  const cd = useRef();
  const volume = useRef();

  useEffect(() => {
    if (cd.current) {
      setCdWidth(cd.current?.offsetWidth);
    }
  }, []);

  document.onscroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const newWidth = cdWidth - scrollTop;
    cd.current.style.width = newWidth > 0 ? newWidth + "px" : 0;
    cd.current.style.opacity = newWidth / cdWidth;
  };

  const handlePlayPause = (evt) => {
    const cdThumbAnimate = cd.current.animate(
      [{ transform: "rotate(360deg)" }],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );

    if (evt.type === "play") {
      audio.current.play();

      audio.current.ontimeupdate = () => {
        const progressPercent = Math.floor(
          (audio.current.currentTime / audio.current.duration) * 100
        );
        const volumePercen = audio.current.volume * 100;

        progress.current.value = progressPercent;
        volume.current.value = volumePercen;

        setCurrentTime({
          currentTime: audio?.current?.currentTime,
          duration: audio?.current?.duration,
        });
      };

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

      // cdThumbAnimate.play();

      setButtonPlay(false);
    } else if (evt.type === "pause") {
      console.log("aaaaaaa")
      audio.current.pause();

      // cdThumbAnimate.pause();

      setButtonPlay(true);
    }
  };

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
    <div className="music-player">
      <div className="music-player__dashboard">
        <div className="music-player__dashboard__header">
          <h4 className="title">{dataLayout?.Title}</h4>
          <h2 className="subtitle">{dataLayout?.SubTitle}</h2>
        </div>
        <div ref={cd} className="music-player__dashboard__cd">
          <div className="cd-thumb">
            <img src={songs[0].image} alt="" />
          </div>
        </div>
        <div className="music-player__dashboard__control">
          <div className="icon icon--repeat">
            <FaArrowRotateRight />
          </div>
          <div className="icon icon--prev">
            <FaBackwardStep />
          </div>
          {isButtonPlay ? (
            <div
              className="icon icon--play-pause"
              onClick={(evt) => handlePlayPause({ event: evt, type: "play" })}
            >
              <FaPlay />
            </div>
          ) : (
            <div
              className="icon icon--play-pause"
              onClick={(evt) => handlePlayPause({ event: evt, type: "pause" })}
            >
              <FaPause />
            </div>
          )}
          <div className="icon icon--next">
            <FaForwardStep />
          </div>
          <div className="icon icon--random">
            <FaRandom />
          </div>
        </div>
        <div className="music-player__dashboard__progress">
          <span className="time time--current">
            {secondsToMinutes(currentTime?.currentTime)}
          </span>
          <input
            ref={progress}
            id="progress"
            className="progress"
            type="range"
            defaultValue="0"
            step="1"
            min="0"
            max="100"
          ></input>
          <span className="time time--duration">
            {secondsToMinutes(currentTime?.duration)}
          </span>
        </div>
        <div className="music-player__dashboard__volume">
          <div className="icon icon--volum">
            <FaVolumeLow />
            {/* <FaVolumeXmark /> */}
          </div>
          <input
            ref={volume}
            id="volume"
            className="volume"
            type="range"
            defaultValue="0"
            step="1"
            min="0"
            max="100"
          ></input>
        </div>
        <audio ref={audio} id="audio" src={songs[0].path}></audio>
      </div>
      <div className="music-player__list">
        {songs.map((song, index) => {
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
              <div className="song__option">
                <FaEllipsis />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MusicPlayer;
