import React from "react";
import "../css-files/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <svg
        width="25.7"
        height="13.8"
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
      <div className="navbar__left">
        <a
          className="scrimba"
          target="_blank"
          rel=" noreferrer"
          href="https://scrimba.com/"
        >
          scrimba
        </a>
        <span>/</span>{" "}
        <a
          className="navbar-text"
          target="_blank"
          rel=" noreferrer"
          href="https://github.com/diffim
          "
        >
          kdiffin!!
        </a>{" "}
        <span>/</span>{" "}
        <a
          className="navbar-text "
          target="_blank"
          rel=" noreferrer"
          href="https://github.com/diffim/scrimba-clone
         "
          id="white"
        >
          Scrimba Clone Challenge
        </a>
      </div>

      <div className="navbar__right">
        <img
          src="https://cdn.discordapp.com/avatars/593007920417996821/8a15c6ec8f099ad078e0c2743b705acc.webp?size=128"
          alt="me"
          className="img_avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
