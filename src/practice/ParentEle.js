import React from "react";
import ChileEle from "./ChileEle";

function ParentEle(param) {
  let a = 10;
  let b = 20;

  let c = a + b;
  

  return (
    <div>
      <ChileEle a={a} b={b} c={c} />
    </div>
  );
}

export default ParentEle;
