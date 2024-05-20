import React, { useState } from "react";

function EmailValidation() {
    let[data,setData]=useState();
    let[result,setResult]=useState();

    function checkEmail(){
        let email = data;
        let emailVaidate = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
        if(emailVaidate.test(email)){
            setResult("Email is valid")
        }else{
            setResult("Email is invalid")
        }
    }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button onClick={checkEmail}>Check</button>
      <br/>
      {result}
    </div>
  );
}

export default EmailValidation;
