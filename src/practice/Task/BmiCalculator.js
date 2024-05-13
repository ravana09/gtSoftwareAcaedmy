import React, { useState, Dropdown,Items } from "react";
import "../Task/BmiCalculator.css";
import { Row, Col, Button, Card, Container } from "react-bootstrap";

function BmiCalculator() {
  let [height, setHeight] = useState();
  let [weight, setWeight] = useState();

  let [gender, setGender] = useState();

  let [bmi, setBmi] = useState();
  let [result, setResult] = useState(false);

  let meterHeight = height / 100;

  let heightSquare = meterHeight * meterHeight;
  console.log(heightSquare);
  console.log(height);

  let calculation = (weight / heightSquare).toFixed(2);
  console.log(calculation);

  function checkBmi() {
    if (calculation <= 18.5) {
      setBmi(
        <div>
          <span style={{ color: "green", textShadow: "2px grey" }}>
            Underweight
          </span>
          :BMI is
          {calculation}
        </div>
      );
    } else if (calculation <= 24.9) {
      setBmi(
        <div>
          <span style={{ color: "green", textShadow: "2px grey" }}>
            Healthy weight
          </span>
          :BMI is
          {calculation}
        </div>
      );
    } else if (calculation <= 29.9) {
      setBmi(
        <div>
          <span style={{ color: "rgb(243, 197, 11)", textShadow: "2px grey" }}>
            Overweight
          </span>
          :BMI is
          {calculation}
        </div>
      );
    } else if(calculation >= 30.0) {
      setBmi(
        <div>
          <span style={{ color: "red", textShadow: "2px grey" }}>Obesity</span>
          :BMI is
          {calculation}
        </div>
      );
    }else{
      setBmi(
        <div>
          <span style={{ color: "red", textShadow: "2px grey" }}>Enter your Height  and Weight</span>
        </div>
      );

    }

    setResult(true);
  }

  return (
    <div>
      <Row className="Row">
        
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}>
          <Container>
          <div>
            <center>
              <Card className="Card">
                <Card.Header>BMI CALCULATOR</Card.Header>
                <Card.Body>
                  <Card.Title>Check Your Bmi</Card.Title>
                  <Card.Text>
                    

                    <div className="bmi-card">
                      <select onChange={(e) => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      <br />

                      <input
                        type="text"
                        placeholder="Height in Cm"
                        onChange={(e) => setHeight(e.target.value)}
                      />
                      <br />
                      <input
                        type="text"
                        placeholder="Weight in kg"
                        onChange={(e) => setWeight(e.target.value)}
                      />
                    </div>
                  </Card.Text>
                  <Button variant="info" onClick={checkBmi}>
                    Calculate
                  </Button>
                </Card.Body>
              </Card>
              {result ? (
                <Card>
                  <Card.Header className="resultHeader">Result</Card.Header>
                  <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Text>
                      <div className="result">
                        <h1>{bmi}</h1>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ) : (
                " "
              )}
            </center>
          </div>
          </Container>
        </Col>

        <Col xs={6} md={4}></Col>
      </Row>
    </div>
  );
}

export default BmiCalculator;
