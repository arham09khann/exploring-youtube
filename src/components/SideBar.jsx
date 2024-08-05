import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import store from "../utils/store";

const SideBar = () => {
  const isOpenMenu = useSelector((store) => store.app.isMenuOpen);

  if (!isOpenMenu) return null;
  return (
    <div className="shadow-lg m-2 p-8 w-40 mr-8">
      <ul>
        <h1 className="font-bold pt-5">Discover</h1>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts </li>
        <li>History</li>
        <li>Movies</li>
      </ul>
      <ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <li>Music</li>
        <li>Sports </li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <ul>
        <h1 className="font-bold pt-5">Watch Later</h1>

        <li>Music</li>
        <li>Sports </li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
