// import React, { useState } from "react";

// function InputFilter() {
//   let [data, setData] = useState({
//     Alphabet: "",
//     Number: 0,
//     Special: "",
//   });

//   let nonAlphabet = /^[A-Za-z]$/;
//   let number = /^[\d]$/;
//   let special = /^[\W]$/;

//   function handleChages(e) {
//     let { value, name } = e.target;
//     console.log(value);
    
//     if (name === "Alphabet") {
//       if (nonAlphabet.test(value) || value === " ") {
//         setData({ ...data, [name]: value });
//       }
//     } 
//     else if (name === "Number") {
//       if (number.test(value) || value === " ") {
//         setData({ ...data, [name]: value });
//       }
//     }
//      else {
//       if (special.test(value) || value === " ") {
//         setData({ ...data, [name]: value });
//       }
//     }
//   }

//   return (
//     <div>
//       <h1>InputFilter</h1>
//       <input
//         type="text"
//         name="Alphabet"
//         onChange={handleChages}
//         placeholder="Enter a alphabet "
//       />

//       <hr />
//       <input
//         type="number"
//         name="Number"
//         onChange={handleChages}
//         placeholder="Enter a Number "
//       />

//       <hr />
//       <input
//         type="text"
//         name="Special"
//         onChange={handleChages}
//         placeholder="Enter a special Charcter "
//       />

//       <hr />
//     </div>
//   );
// }

// export default InputFilter;

import React, { useState } from "react";

function InputFilter() {
  const [data, setData] = useState({
    Alphabet: "gfhd",
    Number: "",
    Special: "",
  });

  const alphabetRegex = /^[A-Za-z]*$/;
  const numberRegex = /^[0-9]$/;
  const specialRegex = /^[\W_]$/;

  function handleChanges(e) {
    const { value, name } = e.target;
    console.log(value);

    if (name === "Alphabet") {
      if (alphabetRegex.test(value) || value === "") {
        setData((prevData) => ({ ...prevData, [name]: value }));
      }
    } else if (name === "Number") {
      if (numberRegex.test(value) || value === "") {
        setData((prevData) => ({ ...prevData, [name]: value }));
      }
    } else if (name === "Special") {
      if (specialRegex.test(value) || value === "") {
        setData((prevData) => ({ ...prevData, [name]: value }));
      }
    }
  }

  return (
    <div>
      <h1>InputFilter</h1>
      <input
        type="text"
        name="Alphabet"
         value={data.Alphabet}
        onChange={handleChanges}
        placeholder="Enter an alphabet"
      />
      <hr />
      <input
        type="text"
        name="Number"
        value={data.Number}
        onChange={handleChanges}
        placeholder="Enter a number"
      />
      <hr />
      <input
        type="text"
        name="Special"
        value={data.Special}
        onChange={handleChanges}
        placeholder="Enter a special character"
      />
      <hr />
    </div>
  );
}

export default InputFilter;

