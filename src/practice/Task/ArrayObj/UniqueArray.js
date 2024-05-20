import React, { useState } from "react";

function UniqueArray() {
  let [data, setData] = useState();
  let [result, setResult] = useState();

  let finalArray = [];

  function uniqueCheck() {
    let givenData = data.split(",");
    // givenData = givenData.map((i) => parseInt(i));
    console.log(givenData);
    let finalArray=[""]
    givenData.forEach((i) => {
        let counter = 0;
        for (let j = 0; j < givenData.length; j++) {
          if (i === givenData[j]) {
            counter++;
          }
        }
        if (counter === 1) {
          finalArray.push(i);
        }
      });
  
      setResult(finalArray.join(" "));
    }

    

 

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button
        onClick={() => {
          uniqueCheck();
        }}
      >
        check unique
      </button>
      {result}
      
    </div>
  );
}

export default UniqueArray;
