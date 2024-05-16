import React, { useState } from "react";

function StonePaperGame() {
  let [result, setResult] = useState();
  let [auto, setAuto] = useState();
  let [player, setPlayer] = useState();

  //   function autoCheck() {
  //     let random = Math.floor(Math.random() * 3 + 1);
  //     if (random === 1) {
  //       setAuto("stone");
  //     } else if (random === 2) {
  //       setAuto("paper");
  //     } else {
  //       setAuto("scissor");
  //     }
  //   }

  function chooseWeapon(name) {
   

    setPlayer(name);
    
    let weapon = ["stone", "paper", "scissor"];

    let computer = weapon[Math.floor(Math.random() * 3 + 1)];
    setAuto(computer)

    let GameResult = "";
    if (player === auto) {
      GameResult = "Draw";
    } else if (
      (auto === "stone" && player === "scissor") ||
      (auto === "paper" && player === "stone") ||
      (auto === "scissor" && player === "paper")
    ) {
      GameResult = "Computer wins";
    }else{
        GameResult = "Player wins"
    };
    setResult(GameResult);

    //     player function
    //     if (name === "stone") {
    //        setPlayer("stone");
    //        console.log("p",player)
    //     let player="stone"
    //     } else if (name === "paper") {
    //       setPlayer("paper");
    //      console.log("p",player)
    //     } else {
    //       setPlayer("scissor");
    //      console.log("p",player)
    //     }
    //    console.log("p",player)

    //computer function
    // let random = Math.floor(Math.random() * 3 + 1);

    // if (random === 1) {
    //   setAuto("stone");
    // console.log("p",auto)

    // } else if (random === 2) {
    //   setAuto("paper");
    //  console.log("p",auto)

    // } else {
    //   setAuto("scissor");
    //  console.log("p",auto)

    // }
    //  console.log("p",auto)
    //result function
    // if (
    //     player===auto
    //   (auto === "stone" && player === "stone") ||
    //   (auto === "paper" && player === "paper") ||
    //   (auto === "scissor" && player === "scissor")
    // )
    //  {
    //   setResult("Draw");
    //console.log("draw")
    // } else if (
    //   (auto === "stone" && player === "scissor") ||
    //   (auto === "paper" && player === "stone") ||
    //   (auto === "scissor" && player === "paper")
    // ) {
    //   setResult("Computer Wins");
    //  console.log("Computer Wins");
    // }
    // else if (
    //   (player === "stone" && auto === "scissor") ||
    //   (player === "paper" && auto === "stone") ||
    //   (player === "scissor" && auto === "paper")
    // ) {
    //   setResult("Player Wins");
    // }

    // else{
    //     setResult("Player Wins");
    // console.log("player Wins");
    // }
  }
  //   console.log("p",player)
  //   console.log("a",auto)
  //   console.log("r",result)
  //   function GameResult() {
  //     if (
  //       (auto === "stone" && player === "stone") ||
  //       (auto === "paper" && player === "paper") ||
  //       (auto === "scissor" && player === "scissor")
  //     ) {
  //       setResult("Draw");
  //     } else if (
  //       (auto === "stone" && player === "scissor") ||
  //       (auto === "paper" && player === "stone") ||
  //       (auto === "scissor" && player === "paper")
  //     ) {
  //       setResult("Computer Wins");
  //     } else if (
  //       (player === "stone" && auto === "scissor") ||
  //       (player === "paper" && auto === "stone") ||
  //       (player === "scissor" && auto === "paper")
  //     ) {
  //       setResult("Player Wins");
  //     }
  //   }

  return (
    <div>
      <h1>Stone Paper scissor Game</h1>
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
        // name="paper"
      >
        Paper
      </button>
      <button
        onClick={() => {
          chooseWeapon("scissor");
        }}
        // name="scissor"
      >
        Scissor
      </button>
      <h1> Player:{player}</h1>
      <h1> Computer:{auto}</h1>

      {result}

      <h2>Computer</h2>
    </div>
  );
}

export default StonePaperGame;
