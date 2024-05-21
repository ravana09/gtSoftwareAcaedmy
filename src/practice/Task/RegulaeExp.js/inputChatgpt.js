import React, { useState } from "react";

function InputFilterGpt() {
  const [data, setData] = useState({
    Alphabet: "",
    Number: "",
    Special: "",
  });

  const nonAlphabet = /^[a-zA-Z]*$/;
  const number = /^\d*$/;
  const special = /^[\W]*$/;

  function handleChanges(e) {
    const { name, value } = e.target;

    if (name === "Alphabet" && (nonAlphabet.test(value) || value === " ")) {
      setData((prevData) => ({ ...prevData, [name]: value }));
    } else if (name === "Number" && (number.test(value) || value === " ")) {
      setData((prevData) => ({ ...prevData, [name]: value }));
    } else if (name === "Special" && (special.test(value) || value === " ")) {
      setData((prevData) => ({ ...prevData, [name]: value }));
    }
  }

  // function alphabetCheck() {
  //   return nonAlphabet.test(data.Alphabet);
  // }

  // function numberCheck() {
  //   return number.test(data.Number);
  // }

  // function specialCheck() {
  //   return special.test(data.Special);
  // }

  return (
    <div>
      <input
        type="text"
        name="Alphabet"
        value={data.Alphabet}
        onChange={handleChanges}
        placeholder="Enter alphabet"
      />
      <input
        type="text"
        name="Number"
        value={data.Number}
        onChange={handleChanges}
        placeholder="Enter number"
      />
      <input
        type="text"
        name="Special"
        value={data.Special}
        onChange={handleChanges}
        placeholder="Enter special character"
      />
      <div>
        {/* <p>Alphabet valid: {alphabetCheck() ? "Yes" : "No"}</p>
        <p>Number valid: {numberCheck() ? "Yes" : "No"}</p>
        <p>Special character valid: {specialCheck() ? "Yes" : "No"}</p> */}
      </div>
    </div>
  );
}

export default InputFilterGpt;
