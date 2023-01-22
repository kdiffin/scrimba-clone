import React, { memo } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "../css-files/TextEditor.css";
function TextEditor(props) {
  return (
    <div className="TextEditor">
      <div className="texteditor__top">
        <p className="white small-text">index.html</p>
        <button className="run-button">
          <BsFillPlayFill /> RUN
        </button>
        <button
          className="preview-button"
          onClick={() => props.setShowSiteWindow(!props.showSiteWindow)}
        >
          {" "}
          PREVIEW
        </button>
        <button className="console-button"> CONSOLE</button>
      </div>
      <div className="texteditor-container">
        <div
          contentEditable="true"
          className="texteditor-type"
          spellCheck="false"
        />
      </div>
    </div>
  );
}

export default memo(TextEditor);
