import React from "react";

function MouseEvents() {
  function handleMouse(e) {
    // console.log(e.clientX,"Mous</div>")
    console.log("mouse over");
  }

  function handleKeyDown(e) {
    //  console.log(e.key,"Key Down")
    console.log("mouse out");
  }

  return (
    <div
      onMouseEnter={handleMouse}
      onMouseLeave={handleKeyDown}
      style={{ height: 500, width: 500, backgroundColor: "red" }}
    >
      <button>change </button>
    </div>
  );
}

export default MouseEvents;
