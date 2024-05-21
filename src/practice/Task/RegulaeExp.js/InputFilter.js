import React, { useState } from "react";

function InputFilter() {
  let [data, setData] = useState({
    Alphabet: "",
    Number: 0,
    Special: "",
  });
  let [result, setResult] = useState();

  let nonAlphabet = /^[A-Za-z]$/;
  let number = /^[\d]$/;
  let special = /^[\W]$/;

  function handleChages(e) {
    let {value }= e.target
    console.log(value)
    
    if (nonAlphabet.test(value)|| value === " ") {
      console.log({ ...data, [e.target.name]: e.target.value });
    }
  }

  function alaphabetCheck() {}

  function NumberCheck() {}

  function SpecialCheck() {}

  return (
    <div>
      <h1>InputFilter</h1>
      <input
        type="text"
        name="Alphabet"
        onChange={handleChages}
        placeholder="Enter a alphabet "
      />
      <button onChange={alaphabetCheck}>Check</button>
      <hr />
      <input
        type="number"
        name="Number"
        onChange={handleChages}
        placeholder="Enter a Number "
      />
      <button onChange={NumberCheck}>Check</button>
      <hr />
      <input
        type="text"
        name="Special"
        onChange={handleChages}
        placeholder="Enter a special Charcter "
      />
      <button onChange={SpecialCheck}>Check</button>
      <hr />

      {result}
    </div>
  );
}

export default InputFilter;
