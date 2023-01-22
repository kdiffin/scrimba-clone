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

function SiteWindow(props) {
  const [diffX, setDiffX] = useState();
  const [dragging, setDragging] = useState(false);

  const [diffY, setDiffY] = useState();
  const [styles, setStyles] = useState({ left: "70%", top: 144 });

  function dragStart(e) {
    setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setDragging(true);
  }

  function draggingFunc(e) {
    if (dragging) {
      var left = e.screenX - diffX;
      var top = e.screenY - diffY;

      setStyles({
        left: left,
        top: top,
      });
    }
  }

  function dragEnd() {
    setDragging(false);
  }

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
          onClick={() => props.setShowMushroom(false)}
        ></div>
        <div
          className="circle greenbg"
          onClick={() => props.setShowMushroom(true)}
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
      {props.showMushroom ? (
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
