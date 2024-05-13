
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function MultiState() {
  const [data, setData] = useState({
    firstName: "",
    surName: "",
    email: "",
    number: "",
    password: "",
  });

  //   console.log(data);

  function handlechange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data, "has been called ");
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Name"
          onChange={handlechange}
          name="firstName"
        />
        <Form.Control
          type="text"
          placeholder="SurName"
          onChange={handlechange}
          name="surName"
        />
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={handlechange}
          name="email"
        />
        <Form.Control
          type="text"
          placeholder="Number"
          onChange={handlechange}
          name="number"
        />
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handlechange}
          name="password"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default MultiState;
