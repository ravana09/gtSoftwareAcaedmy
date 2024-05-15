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
  let [checkboxes, setCheckboxes] = useState({
    checkBox1: false,
    checkBox2: false,
  });

  function handleInput(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (data || radio || checkBox === null)
      alert("your data has been submited ");
    console.log(data, radio, checkBox, checkboxes);
  }

  function handleRadio(e) {
    setRadio(e.target.value);
  }

  function handleCheckbox() {
    setCheckbox(!checkBox);
  }

  function handleCheckboxes(CName) {
    setCheckboxes({ ...checkboxes, [CName]: !checkboxes[CName] });
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
                      <Form.Check
                        type="Checkbox"
                        label="Remember Me"
                        name="checkBox1"
                        checked={checkboxes.checkBox1}
                        onChange={() => {
                          handleCheckboxes("checkBox1");
                        }}
                        className="formCheckBox"
                      />
                      <Form.Check
                        type="Checkbox"
                        label="Remember Me"
                        name="checkBox2"
                        checked={checkboxes.checkBox2}
                        onChange={() => {
                          handleCheckboxes("checkBox2");
                        }}
                        className="formCheckBox"
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
