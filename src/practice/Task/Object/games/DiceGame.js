import React, { useState } from "react";
import './Dice.css'; // Import the CSS file

function DiceGame() {
  let [diceOne, setDiceOne] = useState(1);
  let [diceTwo, setDiceTwo] = useState(1);

  function DiceRoll() {
    let newDiceOne = Math.floor(Math.random() * 6) + 1;
    let newDiceTwo = Math.floor(Math.random() * 6) + 1;

    setDiceOne(newDiceOne);
    setDiceTwo(newDiceTwo);
  }

  return (
    <div className="dice-game">
      <h1>Roll the Dice</h1>
      <div className="dice-container">
        <img src={`dice${diceOne}.png`} alt={`Dice ${diceOne}`} className="dice" />
        <img src={`dice${diceTwo}.png`} alt={`Dice ${diceTwo}`} className="dice" />
      </div>
      <button onClick={DiceRoll} className="roll-button">Roll</button>
    </div>
  );
}

export default DiceGame;
