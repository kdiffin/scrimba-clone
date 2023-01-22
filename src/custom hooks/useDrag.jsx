import React, { useState } from "react";

function useDrag() {
  const [diffX, setDiffX] = useState();

  const [diffY, setDiffY] = useState();

  const [dragging, setDragging] = useState(false);

  //this is what the item which is draggable gets its positioning from
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

  return [dragStart, draggingFunc, dragEnd, styles, dragging];
}

export default useDrag;
