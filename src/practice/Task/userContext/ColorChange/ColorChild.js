import React, { useContext, useState } from "react";
import { themeContext } from "./ColorParent";

function ColorChild() {
  let {theme,changeTheme} = useContext(themeContext);
  let [themecolor,setThemecolor] = useState(false)
 function handletheme(){
    setThemecolor(!themecolor)
    changeTheme(themecolor)
 }

  return (
    <div>
      ColorChild
      <button  onClick={handletheme}>
        Change
      </button>
      <h1>{theme}</h1>
     
    </div>
  );
}

export default ColorChild;
