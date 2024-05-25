import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./Calculator.css";

function BasicCalculator() {
  let [data, setData] = useState("");

  let [result, setResult] = useState("");

  function handleButtonClick(value) {
    setData(data + value);
    console.log(data + value);

  }

  function handleSubmit() {
    
   let r= calculation();
    setData(r)
  }

  function calculation() {
    let givenData = data.split(" ");

    let Number1 = parseInt(givenData[0]);

    for (let i = 1; i <= givenData.length; i++) {
      let sign = givenData[i];
      let Number2 = parseInt(givenData[i + 1]);
     

      switch (sign) {
        case "+":
          Number1 += Number2;
          break;
        case "-":
          Number1 -= Number2;
          break;
        case "*":
          Number1 *= Number2;
          break;
        case "/":
          Number1 /= Number2;
          break;
        default:
          break;
      }
    }
    setResult(Number1);
    return Number1
    
  }


  return (
    <>
     <div className="body">
      <Row className="Row justify-content-center" style={{ margin: "20px 0" }}>
        <Col xs={12} md={8} lg={6}>
          <Card className="p-3">
            <Container>
              <div>
                <div className="mb-4">
                  <Form.Control
                    type="text"
                    className="input"
                    placeholder="Enter to calculate"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <Row>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick("7")}
                      >
                        7
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick("8")}
                      >
                        8
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick("9")}
                      >
                        9
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick(" * ")}
                      >
                        *
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick("4")}
                      >
                        4
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick("5")}
                      >
                        5
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick("6")}
                      >
                        6
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick(" / ")}
                      >
                        /
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick("1")}
                      >
                        1
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick("2")}
                      >
                        2
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick("3")}
                      >
                        3
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick(" - ")}
                      >
                        -
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick("0")}
                      >
                        0
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick(".")}
                      >
                        .
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                        variant="secondary"
                        className="button"
                        onClick={() => handleButtonClick(" + ")}
                      >
                        +
                      </Button>
                    </Col>
                    <Col xs={3}>
                      <Button
                       className="button" 
                        variant="success"
                       
                        onClick={handleSubmit}
                      >
                        =
                      </Button>
                    </Col>
                  </Row>
                </div>
                
              </div>
            </Container>
          </Card>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default BasicCalculator;
