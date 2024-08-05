import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParam] = useSearchParams();

  return (
    <div>
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
