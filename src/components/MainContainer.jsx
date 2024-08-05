import React, { useEffect, useState } from "react";
import { Youtube_api } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const MainContainer = () => {
  const [videos, setVideo] = useState([]);
  const apikey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const VideosApi = async () => {
      const data = await fetch(Youtube_api + apikey);
      const json = await data.json();

      setVideo(json.items);
      console.log(json.items);
    };

    VideosApi();
  }, [apikey]);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          {videos.length > 0 && <VideoCard key={video.id} info={video} />}
        </Link>
      ))}
    </div>
  );
};

export default MainContainer;
