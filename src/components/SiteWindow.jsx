import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  BsArrowLeft,
  BsArrowLeftShort,
  BsArrowRight,
  BsArrowRightShort,
} from "react-icons/bs";
import { SlRefresh } from "react-icons/sl";
import "../css-files/SiteWindow.css";
import useDrag from "../custom hooks/useDrag";

function SiteWindow(props) {
  const [showMushroom, setShowMushroom] = useState(true);
  const [dragStart, draggingFunc, dragEnd, styles, dragging] = useDrag();

  return props.showSiteWindow ? (
    <div className="sitewindow" style={styles}>
      <div
        className="sitewindow-top"
        onMouseDown={dragStart}
        onMouseMove={draggingFunc}
        onMouseUp={dragEnd}
        onMouseLeave={dragEnd}
      >
        <div
          className="circle redbg"
          onClick={() => props.setShowSiteWindow(false)}
        ></div>
        <div
          className="circle yellowbg"
          onClick={() => setShowMushroom(false)}
        ></div>
        <div
          className="circle greenbg"
          onClick={() => setShowMushroom(true)}
        ></div>

        <BsArrowLeftShort size={24} />
        <BsArrowRightShort size={24} />
        <span className="margin-right"></span>

        <SlRefresh />
        <span className="margin-right"></span>

        <input
          className={`white searchbar ${dragging ? "non-selectable" : null}`}
          defaultValue="/try to drag and resize me!"
        />
        <span className="margin-right-auto"></span>

        <BiDotsVerticalRounded />
      </div>
      {showMushroom ? (
        <img
          src="https://cdn.dribbble.com/users/22930/screenshots/2789166/media/707fb43dc6e03b312b4cd369ef2b100d.gif"
          className={`container-img ${dragging ? "non-selectable" : null}`}
        />
      ) : (
        <div className="warning">
          <h1>hey turn me back on!!! ;c</h1>
          <p>✨you can drag the mushroom into the text editor ! ✨</p>
        </div>
      )}{" "}
    </div>
  ) : (
    <></>
  );
}

export default SiteWindow;
