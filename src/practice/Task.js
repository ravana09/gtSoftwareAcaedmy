import React from "react";

function Task() {
  let mark1 = 40;
  let mark2 = 50;

  let result = mark1 > 50 && mark2 > 50 ? "pass" : "fail";

  var button = false;

  let items = 4;
  let totalPrice = 4000;

  let discount =
    (items >= 10 || totalPrice >= 5000)
      ? "Discount Available"
      : "Discount  not available";

  return (
    <div>
      <center>
        <h1>Task</h1>
        <div>
          <h2>task 1</h2>
          <p>change the color </p>
          {button && (
            <button style={{ backgroundColor: "red", color: "white" }}>
              Click me
            </button>
          )}
          {!button && (
            <button style={{ color: "white", backgroundColor: "green" }}>
              Click me
            </button>
          )}
          <hr />

          <h1>task 2</h1>

          <p style={{ color: "red", fontSize: "large" }}>{discount}</p>
          <hr />

          <h1>task 3</h1>
          <h1>{result}</h1>
        </div>
      </center>
    </div>
  );
}

export default Task;
