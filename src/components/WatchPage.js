import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col">
      <div className="px-5 py-3">
        <iframe
          width="900"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="Youtube video player"
          frameBorder="0"
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer/>
    </div>
  );
};

export default WatchPage;
