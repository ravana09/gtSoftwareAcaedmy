import React, { useState } from "react";

function ColorObject() {
  let [result, setResult] = useState();

  function ChangeColor() {
    let color1 = Math.floor(Math.random() * 255) + 1;
    let color2 = Math.floor(Math.random() * 255) + 1;
    let color3 = Math.floor(Math.random() * 255) + 1;
    console.log(color1)
    console.log(color2)
    console.log(color3)


    let finalColor=`rgb(${color1}, ${color2},${color3})`;
    console.log(finalColor)
    setResult(finalColor);
  }

  return (
    <div>
      <h1>Color Object</h1>
      <button onClick={ChangeColor}>Change Color</button>
      <div
        style={{ width: 400, height: 400, backgroundColor:{result} }}
      ></div>
    </div>
  );
}

export default ColorObject;
