import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="col-span-1 flex cursor-pointer">
        <img
          className="w-10 h-10"
          onClick={() => toggleMenuHandler()}
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
          alt="menu"
        />
        <img
          className="w-24 h-10 mx-4"
          src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 text-center px-10">
        <input
          className="w-1/2 border border-gray-400 p-1 rounded-s-full"
          type="text"
        />
        <button className="bg-gray-200 border border-gray-400 p-1 rounded-e-full">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9tpT4I8IfwZouXLJMqWz-_dDSSDkTfuMl6xIN0M&s"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
