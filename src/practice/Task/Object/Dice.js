import React, { useState } from "react";

function Dice() {
  // let[diceOne,setDiceOne]=useState();
  // let[diceTwo,setDiceTwo]=useState();
  let [result, setResult] = useState();

  function DiceRoll() {
    let DiceOne = Math.floor(Math.random() * 6) + 1;
    let DiceTwo = Math.floor(Math.random() * 6) + 1;

    setResult(
      <div>
      <h1> dice one is {DiceOne} </h1> 
       <h1>dice two is {DiceTwo}</h1> 
      </div>
    );
  }
  return (
    <div>
      <h1>Roll the dice</h1>
      {/* <h1>{DiceOne}</h1>
      <h1>{DiceTwo}</h1> */}
      <button onClick={DiceRoll}>Rotate</button>
      {result}
    </div>
  );
}

export default Dice;
