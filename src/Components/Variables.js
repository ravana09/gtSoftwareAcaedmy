import React from "react";

function Variables() {
  let x = 25;
  let y = 20;

  let c1 = x > y;
  // console.log(c1)
  let c2 = x < y;
  // console.log(c1)
  let c3 = x >= y;
  // console.log(c3)
  let c4 = x <= y;

  // console.log(c3)

  
  let c5 = x == y;
  // console.log(c5)
  let c6 = x != y;
  // console.log(c6)
  let c7 = x === y;
  // console.log(c7)


  return (
    <div>
      <center>
        <h1>Operators</h1>
        x={x}
        <br />
        y={y}
        <hr />
        <h2>Arithametic operators</h2>
        {x + y} addition
        <br />
        {x - y} subtraction
        <br />
        {x * y} multiplication
        <br />
        {x / y} division
        <br />
        {x % y} modulus
        <br />
        <hr />
        <h2>Increments</h2>
        post
        <br />
        {x++}
        <br />
        {x}
        <br />
        pre
        <br />
        {++x}
        <br />
        {x}
        <h2>decrements</h2>
        post
        <br />
        {x--}
        <br />
        {x}
        <br />
        pre
        <br />
        {--x}
        <br />
        <hr />
        <h1>Comparision</h1>
        {c1.toString()}
        <br />
        {(x>y).toString()}
        <br />
        {c3.toString()}
        <br />
        {c4.toString()}
        <br />
        {c5.toString()}
        <br />
        {c6.toString()}
        <br />
        
        {c7.toString()}
        <br />

        this is from react
      </center>
    </div>
  );
}

export default Variables;
