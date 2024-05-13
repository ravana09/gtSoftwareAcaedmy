import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FloatingLabel } from "react-bootstrap";

function Notes() {
  let [data, setData] = useState();
  let [result, setResult] = useState([]);
  //   let finalData=([...result,data])
  console.log(data);

  function addData() {
    if (data.trim() !== "") {
      //   console.log(data);
      //  finalData.push( setResult(
      //     <FloatingLabel controlId="floatingTextarea2" label="Comments">
      //       <Form.Control
      //         as="textarea"
      //         placeholder="Leave a comment here"
      //         style={{
      //           height: "100px",
      //           backgroundColor: "skyBlue",
      //           color: "white",
      //         }}
      //         onChange={(e) => setData(e.target.value)}
      //       >{finalData}</Form.Control>
      //     </FloatingLabel>

      //     <p>{finalData}</p>
      //   ));

      setResult([
        ...result,
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{
              height: "100px",
              backgroundColor: "skyBlue",
              color: "white",
            }}
            onChange={(e) => setData(e.target.value)}
          >
            {data}
          </Form.Control>
        </FloatingLabel>,
      ]);
      setData("");
    }
  }

  return (
    <div>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{
            height: "100px",
            backgroundColor: "skyBlue",
            color: "white",
          }}
          onChange={(e) => setData(e.target.value)}
        />
      </FloatingLabel>
      <button onClick={addData}>Add</button>

      {result}
    </div>
  );
}

export default Notes;
