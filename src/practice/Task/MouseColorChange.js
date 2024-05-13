import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

function MouseColorChange() {
  let [style, setStyle] = useState();
  let [style1, setStyle1] = useState();

  function handleMouseOver() {
    setStyle({
      color: "red",
    });

    console.log("Mouse over");
  }

  function handleMouseOut() {
    setStyle({
      color: "green",
    });
  }

  function handleMouse() {
    setStyle1({
      color: "white",
      backgroundColor: "red",
      width: 200,
      height: 200,
      textalign: "center",
    });
  }

  function handleMouseDiv() {
    setStyle1({
      color: "Yellow",
      backgroundColor: "Green",
      width: 200,
      height: 200,
    });
  }

  return (
    <>
      <Row>
        <Col md={6}>
          <h1
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={style}
          >
            Color
          </h1>
        </Col>

        <Col md={6}>
          <div
            onMouseOver={handleMouse}
            onMouseOut={handleMouseDiv}
            sstyle={style1}
          >
            color change
          </div>
        </Col>
      </Row>
    </>
  );
}

export default MouseColorChange;
