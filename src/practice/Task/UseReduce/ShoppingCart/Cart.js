import React, { createContext, useReducer, useState } from "react";
import Shopping from "./Shopping";

export let shoppingContext = createContext();
 
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        count: state.count + 1,
        text: [...state.text, action.text],
        totalPrice: state.totalPrice + action.text.price,
      };
    case "remove":
        const updatedText = state.text.filter((_, id) => id !== action.id);
        console.log(updatedText);
        const DeletedText = state.text.filter((_, id) => id === action.id);
        console.log(DeletedText[0].price)


      console.log({
        count: state.count - 1,
       text: updatedText,
       totalPrice:state.totalPrice-DeletedText[0].price
      });

      return {
        count: state.count - 1,
      text: updatedText,
      totalPrice:state.totalPrice-DeletedText[0].price
      };

    default:
      break;
  }
}

function Cart() {
  let [receive, setReceive] = useState([]);

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: [],
    totalPrice: 0,
  });

  function Delete(id) {
    dispatch({ type: "remove", id });
  }

  return (
    <shoppingContext.Provider value={{ receive, setReceive, dispatch }}>
      <div>Cart</div>
      <li>
        {" "}
        {state.count}
        <h1> {state.totalPrice}</h1>
      </li>

      {state.text &&
        state.text.map((i, id) => (
          <li key={id}>
            {i.name}
            {i.price}
            <button onClick={() => Delete(id)}>Remove</button>
          </li>
        ))}

      <Shopping />
    </shoppingContext.Provider>
  );
}

export default Cart;
