import React, { useState } from "react";

function Whileloop() {
  let [password, setPassword] = useState();
  let [result, setResult] = useState();
  let [check,setCheck]=useState(false);


  function passwordCheck() {
    while (!check) {
      if (password === "Asdfg12345") {
        console.log("Password is correct");
        setResult("Password is correct");
    setCheck(true)
      } else {
        console.log("Password is incorrect");
        setResult("Password is incorrect");
        
      }

      return  ;
    }
  }

  return (
    <div>
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={passwordCheck}>Check</button>
      <h1>{result}</h1>
    </div>
  );
}

export default Whileloop;
