import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-4 w-64 h-80 shadow-lg hover:bg-red-100 bg-red-50 rounded-md">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
          <li className="font-bold py-1">{title}</li>
          <li>{channelTitle}</li>
          <li className="text-sm text-gray-600">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
