import React, { useReducer, useState } from "react";
//state from inital
//action that we are giving

function reducer(initial, action) {
  switch (action.type) {
    case "Add":
        console.log(Date.now())
        console.log({ text: [...initial.text, action.text], id: new Date().getTime() })
       
      return { text: [...initial.text, action.text], id: new Date().getTime() }
      

    case "Delete":

      let restData = { text: initial.text.filter((_, id) => id !== action.id) };
      return restData;
    default:
      break;

  }
}

function ReviseTodoReduce() {
  // create a state
  let [given, setGiven] = useState();

  //initialization of reducer
  const [initial, dispatch] = useReducer(reducer, { text: [] });

  //function for Add
  function handleAdd() {
    dispatch({ type: "Add", text: given });
    setGiven(" ");
  }

  //function for delete
  function handleDelete(id) {
    dispatch({ type: "Delete", id });
    setGiven(" ");
  }

  return (
    <div>
      {/* input  */}
      <input type="text" value={given} onChange={(e) => setGiven(e.target.value)} />

      {/* add button */}

      <button
        // onclick function
        onClick={() => {
          handleAdd();
        }}
        //style
        style={{
          width: 150,
          height: 50,
          backgroundColor: "green",
          color: "white",
        }}
      >
        Add
      </button>

      {/* result */}

      {initial.text &&
        initial.text.map((i, id) => (
          <ol >
            <li key={id}>
              {i}
              <button
                // onclick function

                onClick={() => {
                  handleDelete(id);
                }}
                //style
                style={{
                  width: 150,
                
                  height: 50,
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                delete
              </button>
            </li>
          </ol>
        ))}
    </div>
  );
}

export default ReviseTodoReduce;
