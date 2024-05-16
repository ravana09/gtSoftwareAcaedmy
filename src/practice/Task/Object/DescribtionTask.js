import React, { useState } from "react";

function DescriptionTask() {
  const [selectedLevel, setSelectedLevel] = useState();
  const [result, setResult] = useState(null);

  function handleChanged(e) {
    const level = e.target.value;
    setSelectedLevel(level);
    // setSelectedLevel(e.target.value);
  

    levelOfGame(level);
  }

  function levelOfGame(level) {
    if (level === "easy") {
      setResult(
        <div>
          <h1>Easy</h1>
          <p>
            This mode is essentially interchangeable with “narrative” mode.
            You're not playing to be challenged; you're playing casually.
            Enemies are weaker, dumber, and you don't need to worry much about
            game mechanics to progress. Just enjoy yourself and you'll win
            eventually.
          </p>
        </div>
      );
    } else if (level === "medium") {
      setResult(
        <div>
          <h1>Medium</h1>
          <p>
            This mode is interchangeable with “normal” mode. Most developers
            consider their moderate difficulty to be the way the game was meant
            to be played. You'll be challenged, but once you get the gist of the
            game mechanics, you'll progress smoothly with a few challenging
            scenarios here and there for that sense of accomplishment.
          </p>
        </div>
      );
    } else if (level === "hard") {
      setResult(
        <div>
          <h1>Hard</h1>
          <p>
            This mode is interchangeable with “hard” mode. Enemies are stronger,
            more resilient, and smarter. You will feel a sense of challenge
            throughout your entire experience and probably earn some bragging
            rights by completing a game all the way through its highest
            difficulty.
          </p>
        </div>
      );
    }
  }

  return (
    <div>
      <h1>Description of Game Levels</h1>
      <select onChange={handleChanged}>
        <option value="">Select Level</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      {result}
    </div>
  );
}

export default DescriptionTask;

