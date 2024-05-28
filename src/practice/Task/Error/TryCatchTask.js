import React, { useState } from "react";
import Swal from "sweetalert2";

function TryCatchTask() {
  let [data, setData] = useState({
    Numbers: "",
    Divisible: "",
  });



  let [result, setResult] = useState();

  function handleChanges(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleClick() {
    try {
      if (isNaN(data.Numbers || data.Divisible)) {
        throw new Error("Please enter a valid number");

      } 
      
      else if (parseInt (data.Divisible) === 0) {
        throw new Error("A number Divisible by Zero is not Alloweded");
      } 
      
      else {
        let Fianlans = data.Numbers / data.Divisible;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(()=>{
            setResult(Fianlans);
        },1000)
       
      }
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title:  err.message ,
        showConfirmButton: false,
        timer: 1000,
      });

      setResult("Error Occured"+ err.message);
    }
  }

  return (
    <div>
      <h1>Try Catch Task</h1>

      <input type="text" onChange={handleChanges} name="Numbers"  />
      <input type="text" onChange={handleChanges} name="Divisible" />
      <button onClick={handleClick}>Calculate</button>
     <div className="text-warning">
      <h2>{result}</h2>
      </div>
    </div>
  );
}

export default TryCatchTask;
