import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state.count;
  }
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      UseReducerHook
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default UseReducerHook;
