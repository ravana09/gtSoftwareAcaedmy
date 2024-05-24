import React, { createContext, useState } from "react";
import ColorChild from "./ColorChild";

export let themeContext = createContext();

let theme = false;
function ColorParent() {
  const [bgcolor, setBgcolor] = useState("white");
  let [color, setColor] = useState("black");

  function changeTheme(value) {
    if (value) {
      setBgcolor("black");
      setColor("white");
    } else {
      setBgcolor("red");
      setColor("Black");
    }
  }
  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      <>
        <div
          style={{
            backgroundColor: bgcolor,
            color: color,
            width: 1000,
            height: 1000,
          }}
        >
          ColorParent
          <ColorChild />
        </div>
      </>
    </themeContext.Provider>
  );
}

export default ColorParent;
