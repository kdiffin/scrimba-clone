import React, { memo } from "react";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";

import "../css-files/Sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <p className="sidebar__title">EXPLORER</p>
      <div className="sidebar__items">
        <div className="flex">
          <span className="green">&lt;&gt;</span>
          <p>index.html</p>
        </div>

        <div className="flex">
          <span className="yellow">JS</span>
          <p>index.js</p>
        </div>
        <div className="flex">
          <span className="white"> | |</span>
          <p>scrimba-logo.png</p>
        </div>
        <div className="flex">
          <span className="lightblue">#</span>

          <p>styles.css</p>
        </div>

        <img src="./" alt="" />
      </div>
      <p className="sidebar__title dependencies">DEPENDENCIES</p>
      <div className="sidebar__items">
        <div className="flex">
          <span className="blue">
            <FaReact />
          </span>
          <p>react-dom</p>
        </div>
        <div className="flex">
          <div className="blue">
            <FaReact />
          </div>
          <p>react</p>
        </div>
        <div className="flex">
          <svg
            width="13.7"
            height="8.8"
            viewBox="0 0 108 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ei ei-ag "
          >
            <rect
              fill="#fff"
              x="48"
              width="60"
              height="20"
              rx="10"
              className="ei ei-ai "
            ></rect>
            <rect
              fill="#fff"
              x="25"
              y="52"
              width="60"
              height="20"
              rx="10"
              className="ei ei-aj "
            ></rect>
            <rect
              fill="#fff"
              x="49"
              y="26"
              width="36"
              height="20"
              rx="10"
              className="ei ei-ak "
            ></rect>
            <rect
              fill="#fff"
              y="52"
              width="20"
              height="20"
              rx="10"
              className="ei ei-al "
            ></rect>
          </svg>
          <p>scrimba</p>
        </div>
        <div className="flex">
          <SiVite />
          <p>vite</p>
        </div>
      </div>
    </div>
  );
}

export default memo(Sidebar);
