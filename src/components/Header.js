import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/serachSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

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
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-1 rounded-s-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="bg-gray-200 border border-gray-400 p-1 rounded-e-full">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white px-5 py-2 w-[28rem] shadow-lg rounded-lg border border-gray-200">
            <ul>
              {suggestions &&
                suggestions.map((item) => (
                  <li
                    key={item}
                    className="hover:bg-gray-200 cursor-pointer p-1 shadow-sm"
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        )}
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
