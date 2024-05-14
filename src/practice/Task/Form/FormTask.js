import React, { useState } from "react";
import { Form, Row, Col, Card, Container, Button } from "react-bootstrap";
import "../Form/Form.css";

function FormTask() {
  let [data, setData] = useState({
    Name: "",
    surName: "",
    Email: "",
    Phone: 0,
  });
  let [radio, setRadio] = useState();
  let [checkBox, setCheckbox] = useState(false);

  function handleInput(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (data || radio || checkBox === null)
      alert("your data has been submited ");
    console.log(data, radio, checkBox);
  }

  function handleRadio(e) {
    setRadio(e.target.value);
  }

  function handleCheckbox() {
    setCheckbox(!checkBox);
  }

  return (
    <>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Container>
            <Card className="Card">
              <Card.Header>
                <h1>Sign up</h1>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    onChange={handleInput}
                    name="Name"
                    className="FormInput"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Enter Surname"
                    onChange={handleInput}
                    name="surName"
                    className="FormInput"
                  />
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    onChange={handleInput}
                    name="Email"
                    className="FormInput"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Enter PhoneNumber"
                    onChange={handleInput}
                    name="Phone"
                    className="FormInput"
                  />
                  <Row>
                    <Col md={4}>
                      {" "}
                      <Form.Check
                        type="radio"
                        label="Male"
                        value="Male"
                        onChange={handleRadio}
                        checked={radio === "Male"}
                        className="formRadio"
                      />
                    </Col>

                    <Col md={4}>
                      <Form.Check
                        type="radio"
                        label="Female"
                        value="Female"
                        onChange={handleRadio}
                        checked={radio === "Female"}
                        className="formRadio"
                      />
                    </Col>

                    <Col md={4}>
                      {" "}
                      <Form.Check
                        type="radio"
                        value="Others"
                        label="Others"
                        onChange={handleRadio}
                        checked={radio === "Others"}
                        className="formRadio"
                      />
                    </Col>
                  </Row>

                  <Button type="submit" style={{ width: 450 }}>
                    Submit
                  </Button>

                  <Form.Check
                    type="Checkbox"
                    label="Remember Me"
                    onChange={handleCheckbox}
                    className="formCheckBox"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </Col>
        <Col md={4}></Col>
      </Row>
    </>
  );
}

export default FormTask;
