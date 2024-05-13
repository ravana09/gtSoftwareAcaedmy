// import React, { useState } from "react";

// function Counter() {
//   let [input, setInput] = useState();
//   //   let [operation, setOperation] = useState("");
//   let [result, setResult] = useState();

//   //   function changeOperation(e) {
//   //     e.preventDefault();
//   //     setOperation(e.target.name);
//   //     console.log(e.target)
//   //     counter();

//   //   }

//   function counter(operation) {
//     // e.preventDefault();

//     let data = parseInt(input);
//     let i = parseInt(0);

//     switch (operation) {
//       case "increment":
        
//       data += 1;
//       console.log(data)
//         console.log(data);
//         break;
//       case "decrement":
//         setResult(data -=1);
//         console.log(data + --i);
//         break;
//       case "reset":
//         i = 0;

//         setResult(data );
//         console.log(data );
//         break;
//       default:
//         setResult("Enter a number");
//     }
//   }

//   return (
//     <>
      
//         <input
//           type="text"
//           //   value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button onClick={() => counter("increment")}>Increment</button>
//         <button onClick={() => counter("decrement")}>Decrement</button>
//         <button onClick={() => counter("reset")}>Reset</button>
//         {/* <button type="submit" onClick={ counter}>
//           Submit
//         </button> */}
//         <h1>{result}</h1>
      
//     </>
//   );
// }

// export default Counter;


import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleOperation = (operation) => {
    switch (operation) {
      case "increment":
        setCount(count + 1);
        break;
      case "decrement":
        setCount(count - 1);
        break;
      case "reset":
        setCount(count);
        break;
      default:
        break;
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSetCounter = () => {
    const initialValue = parseInt(input);
    if (!isNaN(initialValue)) {
      setCount(initialValue);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter initial value"
      />
      <button onClick={handleSetCounter}>Set Counter</button>
      <h1>Counter: {count}</h1>
      <button onClick={() => handleOperation("increment")}>Increment</button>
      <button onClick={() => handleOperation("decrement")}>Decrement</button>
      <button onClick={() => handleOperation("reset")}>Reset</button>
    </div>
  );
}

export default Counter;
