import React, { useContext } from "react";
import { details } from "./UserContextParent";
import ChildTwo from "./ChildTwo";

function ChildOne() {
  let name = useContext(details);

  return (
    <div>
      ChildOne
      <br></br>
      <h1>The name of the person is {name[0]}</h1>
      <ChildTwo/>
    
    </div>
  );
}

export default ChildOne;
