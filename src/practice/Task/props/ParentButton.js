import React from "react";
import ChildButton from "./ChildButton";

function ParentButton({onClick}) {
  return (
    <div>
      ParentButton
      <ChildButton onClick={onClick} nametag='ButtonClicked'></ChildButton>
    </div>
  );
}

export default ParentButton;
