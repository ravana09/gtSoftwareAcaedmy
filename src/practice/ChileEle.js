import React from "react";
import ParentEle from "./ParentEle";

function ChileEle(param) {

    let d =param.c+10
  return (
    <div>
      {param.a}
      <br />
      {param.b}
      <br />
      {param.c }
      <br />
      {d}
      <ParentEle d={d}/>
    </div>

  );
}

export default ChileEle;
