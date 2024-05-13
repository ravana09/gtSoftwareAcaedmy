import React, { useState } from "react";


function ColorChanging() {
  let [data, setData] = useState();
//   console.log(data);
  let [result, setResult] = useState();

  let style ={
    backgroundColor:result||"red",
    width:400,
    height:400
  }

  function changeColor() {
    if (data) {
      setResult(data)
    }
  }


  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setData(e.target.value)} />
        <button onClick={changeColor}>Change Color</button>
      </div>
      <br />
      <div style={style}></div>
    </div>
  );
}

export default ColorChanging;
