import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
     

      return { text: [...state.text, action.text],id:new Date() };

    case "remove":
        console.log(action.index)
      let splicedText= {text: state.text.filter((_,index) => index!==action.index  )};
      console.log(splicedText)
      return splicedText
    default:
      break;
  }
}

function TodoReduce() {
  let [data, setData] = useState("");
  const [state, dispatch] = useReducer(reducer, { text: [] });

  console.log(state.text);

  function handleInput(){
    dispatch({ type: "add", text: data,});
    setData(" ")
  }
  function handleClick(index) {
    dispatch({ type: "remove",index});
    setData(" ");
  }

  //   let [text,setText]=useState("")
  return (
    <div>
      <h1>TodoReduce</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      {state.text && state.text.map((i,index) => (
        <div>
          <li key={index}> {i}
          <button onClick={()=>{handleClick(index)}} 
          style={{
            width:150,
            height:50,
            margin:10,
            backgroundColor:"red"
          }}>Delete</button>
          </li>
        </div>
      ))}
      <button
        onClick={handleInput}
        style={{
            width:150,
            height:50,
            margin:10,
            backgroundColor:"green",
            color:"white"
          }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoReduce;
