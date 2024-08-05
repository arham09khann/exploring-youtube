import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-56 shadow-lg h-66">
      <img className="rounded-md" src={thumbnails.medium.url} alt="thumnail" />
      <ul>
        <li className="truncate">{title}</li>
        <li className="font-bold truncate">{channelTitle}</li>
        <li>{statistics.viewCount} -views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
