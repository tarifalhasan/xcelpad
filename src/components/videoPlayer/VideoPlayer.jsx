import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import "./videoplayer.css";
import { images } from "./../../assets/images/images";
const VideoPlayer = () => {
  return (
    <div className="position-relation">
      <Player
        poster={images.thumbnail}
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      ></Player>
    </div>
  );
};
export default VideoPlayer;
