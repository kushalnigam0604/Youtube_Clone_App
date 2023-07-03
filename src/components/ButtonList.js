import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Songs",
    "Movies",
    "Entertainment",
    "Sports",
    "Comedy",
    "Podcast",
    "Motivation",
    "Live",
    "Photos",
  ];
  return <div className="flex">
    {list.map((item,index) => <Button key={index} name={item}/>)}
  </div>;
};

export default ButtonList;
