import React from "react";
import "../props/props.css";
import { Row, Col } from "react-bootstrap";

function TaskPropsChild(props) {
  return (
    <div>
      <Row>
        <Col md={4}>
          <div className="childDiv">
            <h1>Name: {props.name[0]}</h1>
            <h1>gender: {props.details[0]}</h1>
            <h1>Address: {props.address[0]}</h1>
          </div>
        </Col>
        <Col md={4}>
          <div className="childDiv">
            <h1>Name: {props.name[1]}</h1>
            <h1>gender: {props.details[1]}</h1>
            <h1>Address: {props.address[1]}</h1>
          </div>
        </Col>
        <Col md={4}>
          <div className="childDiv">
            <h1>Name: {props.name[2]}</h1>
            <h1>gender: {props.details[2]}</h1>
            <h1>Address: {props.address[2]}</h1>
            <br/>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TaskPropsChild;
