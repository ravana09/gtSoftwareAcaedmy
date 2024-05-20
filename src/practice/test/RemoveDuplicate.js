import React from "react";

function RemoveDuplicate() {
  let data = ["kumar", "pradeep", "shivan", "pradeep"];
  let finalData = [];

  for (let i = 0; i < data.length; i++) {
    if (!finalData.includes(data[i])) {
      finalData.push(data[i]);
    }
  }

  console.log(finalData);

  return <div>RemoveDuplicate</div>;
}

export default RemoveDuplicate;
