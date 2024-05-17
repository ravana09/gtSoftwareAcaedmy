import React, { useState } from "react";

function StonePaperGameCopy() {
  let [auto, setAuto] = useState("");
  let [player, setPlayer] = useState("");
  let [result, setResult] = useState("");

  function chooseWeapon(name) {
    setPlayer(name);

    let weapon = ["stone", "paper", "scissor"];

    let computer = weapon[Math.floor(Math.random() * 3)];
    setAuto(computer);

    let GameResult = "";
    if (name === computer) {
      GameResult = "Draw";
    } else if (
      (computer === "stone" && name === "scissor") ||
      (computer === "paper" && name === "stone") ||
      (computer === "scissor" && name === "paper")
    ) {
      GameResult = "Computer wins";
    } else {
      GameResult = "Player wins";
    }
    setResult(GameResult);
   
  }
  

  return (
    <div>
      <h1>Stone Paper Scissor Game</h1>
      <h2>Player 1</h2>

      <h1>Choose your weapon</h1>
      <button
        onClick={() => {
          chooseWeapon("stone");
        }}
      >
        Stone
      </button>
      <button
        onClick={() => {
          chooseWeapon("paper");
        }}
      >
        Paper
      </button>
      <button
        onClick={() => {
          chooseWeapon("scissor");
        }}
      >
        Scissor
      </button>
      <h1> Player: {player}</h1>
      <h1> Computer: {auto}</h1>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default StonePaperGameCopy;
