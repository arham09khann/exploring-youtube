import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg p-5 m-2">
      <div className="flex col-span-1 ">
        <img
          className="h-9 m-1 cursor-pointer"
          alt="menuBarIcon"
          onClick={toggleSidebar}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        ></img>
        <img
          className="h-9 m-1"
          alt="youtubeIcon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"
        ></img>
      </div>

      <div className="col-span-10 flex ">
        <input
          className="border border-gray-600 w-1/2 rounded-l-full p-2"
          placeholder="Search Videos"
          type="text"
        ></input>
        <button className="border border-gray-600 rounded-r-full p-2 bg-gray-300 ">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-9"
          alt="userIcon"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
