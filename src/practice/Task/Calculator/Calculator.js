import React, { useState } from "react";
import { Form } from "react-bootstrap";

function BasicCalculator() {
  let [data1, setData1] = useState();
  let [data2, setData2] = useState();
  let [result, setResult] = useState();
  let [operation, setOperation] = useState();

  function Calculator() {}

  function handleSubmit(e) {
    e.preventDefault();
  }

  
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setData1(e.target.value)} />
        <input type="text" onChange={(e) => setData1(e.target.value)} />
        <input type="text" onChange={(e) => setData1(e.target.value)} />

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>+</button>
        <button>-</button>
        <button>/</button>
        <button>*</button>
        <button type="submit">=</button>
        <h1>Result:{result}</h1>
      </Form>
    </div>
  );
}

export default BasicCalculator;
