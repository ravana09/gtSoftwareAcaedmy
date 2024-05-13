import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Events() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    mobNo: "",
  });
  // const [inputs1,setInputs1]=useState()

  function handlechange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
  }
  return (
    <div>
      Events
      <Form onSubmit={handleSubmit}>
        <Form.Control type="text" name="username" onChange={handlechange} />
        <Form.Control type="text" name="email" onChange={handlechange} />
        <Form.Control type="text" name="mobNo" onChange={handlechange} />
        <Button type="submit">submit</Button>
      </Form>
    </div>
  );
}

export default Events;
