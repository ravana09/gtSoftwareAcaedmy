import React, { useContext } from "react";
import { details } from "./UserContextParent";
import ChildThree from "./ChildThree";

function ChildTwo() {
  let mailId = useContext(details);

  return (
    <div>
      ChildTwo
      <h1>The mail id {mailId[1]}</h1>
      <ChildThree/>
    </div>
  );
}

export default ChildTwo;
