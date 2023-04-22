import React from "react";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import LaunchpadValue from "./LaunchpadValue";
import Chart from "../chart/Chart";
import { images } from "../../assets/images/images";
import LaunchpadComment from "./LaunchpadComment";

const LaunchpadDescription = ({ item }) => {
  return (
    <div>
      <p className="font-13 mb-4">{item.description}</p>
      <VideoPlayer />
      <div className="my-4">
        {item.data.map((data, index) => {
          return (
            <LaunchpadValue key={index} name={data.name} value={data.value} />
          );
        })}
      </div>

      <div className="token_chart">
        <h4>Token Metrics</h4>
        {/* <Chart/> */}
        <img className="my-4" src={images.chart} alt="" />
        <LaunchpadComment/>
      </div>

    </div>
  );
};

export default LaunchpadDescription;
