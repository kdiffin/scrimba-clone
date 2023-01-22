import React from "react";
import { BsFillPlayFill, BsBookmark } from "react-icons/bs";
import { BiDotsHorizontalRounded, BiCog } from "react-icons/bi";
import { SlMenu } from "react-icons/sl";

import "../css-files/Videobar.css";
function Videobar() {
  return (
    <div className="videobar">
      <BsFillPlayFill size={35} color="#3b82f6" />
      <div className="bar"></div>
      <div className="videobar__stats small-text">
        <p>11:29</p>
        <BiDotsHorizontalRounded />
        <BsBookmark size={14} />
        <BiCog size={18} />
        <SlMenu size={14} />
      </div>
    </div>
  );
}

export default Videobar;
