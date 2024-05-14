import React from "react";
import TaskPropsChild from "./TaskPropsChild";

function TaskPropsParent() {
  let name = ["pradeep", "ravana", "shivani"];
  let details = ["male", "male", "Female"];
  let address = ["salem", "cbe", "trichy"];

  

  return (
    <div>
      <TaskPropsChild name={name} details={details}  address={address}

       />
    </div>
  );
}

export default TaskPropsParent;
