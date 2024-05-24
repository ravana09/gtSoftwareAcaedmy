import React, { useContext, useState } from "react";
import { counterContex } from "./ParentCounter";
import DecrementCounter from "./DecrementCounter";

function CounterIncrement() {
  let { operation } = useContext(counterContex)
  console.log(typeof(operation))

//   function handleINcrement() {
//     operation("increment");
//   }

  return (
    <div>
      <button
        onClick={()=>{operation("increament")
        }}
        style={{
          width: 150,
          height: 50,
          backgroundColor: "skyblue",
          boxShadow: "none",
        }}
      >
        Increment
      </button>
      <span>
      <DecrementCounter/>
      </span>
      
    </div>
  );
}

export default CounterIncrement;
