import React, { createContext, useState } from "react";
import Messag1 from "./Message1";
import { getValue } from "@testing-library/user-event/dist/utils";


export let MessageContext = createContext();

function MessgeParent() {
  let [data, setData] = useState("");
  let [result, setResult] = useState("");

   let finaldata = [...result];

  function gettingdata(value) {
    if (value) {
     // setData(value);
      let getValue = value;
      finaldata.push(getValue);
    }
    setResult(finaldata)
  }

  return (
    <MessageContext.Provider value={{ gettingdata }}>
      <div>
        MessgeParent
        <p>{result}</p>
        <Messag1 />
      </div>
    </MessageContext.Provider>
  );
}

export default MessgeParent;
