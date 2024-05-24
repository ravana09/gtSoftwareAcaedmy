import React, { createContext, useState } from "react";
import CounterIncrement from "./CounterIncrement";

export let counterContex = createContext();

function ParentCounter() {
  let [data, Setdata] = useState(0);

  function operation(values) {
    if (values === "increament") {
      Setdata(data + 1);
    } else if (values === "decrement") {
      Setdata((data -= 1));
    } else {
      Setdata(0);
    }
  }

  return (
    <counterContex.Provider value={{ operation }}>
      <div>
        ParentCounter
        <div>
          <h1> Counter : {data}</h1>
          <CounterIncrement />
        </div>
      </div>
    </counterContex.Provider>
  );
}

export default ParentCounter;
