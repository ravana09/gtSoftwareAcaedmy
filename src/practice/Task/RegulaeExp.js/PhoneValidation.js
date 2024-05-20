import React, { useState } from "react";

function PhoneValidation() {
  let [data, setData] = useState();
  let [result, setResult] = useState();

  function checkPhoneNum() {

    let phoneNum = data;
    
    let phoneExpersion = /^\d{10}$/;
    if (phoneExpersion.test(phoneNum)) {
      setResult("Valid Phone Number");
      setData(" ");
    } else {
      setResult("Invalid Phone Number");
    }
  }
//   setData(" ");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your  phone  number"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button
        onClick={() => {
          checkPhoneNum();
        }}
      >
        Check
      </button>
      <br/>
      {result}
    </div>
  );
}

export default PhoneValidation;
