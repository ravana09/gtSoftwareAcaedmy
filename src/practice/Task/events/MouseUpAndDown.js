import React, { useState } from "react";

function MouseUpAndDown() {
  let [initalPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  let [position, setPosition] = useState({ x: 0, y: 0 });
  let [drag, setDrag] = useState(false);

  function handleMouseDown() {
    setDrag(true);
    console.log(setDrag, "true");

    setInitialPosition({ x: position.x, y: position.y });
  }

  function handleDown(e) {
    if (!drag) {
      console.log(setDrag, "flase");
      let x1 = e.clientX - initalPosition.x;
      console.log(e.clientX);
      let y1 = e.clientY - initalPosition.y;
      console.log(e.clientY);

      setPosition({ x: x1 + position.x, y: y1 + position.y });
      setInitialPosition({ x: e.clientX, y: e.clientY });
    }
  }

  function handleUp() {
    setDrag(false);
    console.log(setDrag, "false2");
  }

  return (
    <div>
      <div>
        <button
          onMouseDown={handleMouseDown}
          onMouseMove={handleDown}
          onMouseUp={handleUp}
          style={{ position: "absolute", left: position.x, top: position.y }}
        >
          Click to change{" "}
        </button>
      </div>
    </div>
  );
}

export default MouseUpAndDown;
