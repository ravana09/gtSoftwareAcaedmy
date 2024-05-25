import React, { createContext, useState } from "react";
import Shopping from "./Shopping";

export let shoppingContext = createContext();

function Cart() {
  let [receive, setReceive] = useState([]);


  return (
    <shoppingContext.Provider value={{ setReceive }}>
      <div>Cart</div>
      
      <li>{receive.name}</li>
      <li>{receive.price}</li>
      
      
      
      <Shopping />
    </shoppingContext.Provider>
  );
}

export default Cart;
