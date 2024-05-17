import React from "react";

function LoopControls() {
  let i = 0;
  while (i < 10) {
    if (i == 5) {
      continue;
    }
    console.log(i);
  }
  return <div>LoopControls</div>;
}

export default LoopControls;
