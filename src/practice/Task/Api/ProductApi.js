import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function ProductApi() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
     .then((res) => res.json())
      .then((res) => {
        setData(res.products);
      });
  },[]);
  console.log(data);

  return (
    <div>
      <h1>Products</h1>
      {data.map((i, id) => (
        <div key={id}>
            <Row>
                <Col>
            <Container>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={i.images[0]} />
            <Card.Body>
              <Card.Title>{i.title}</Card.Title>
              <Card.Text>
              Brand:  {i.brand}
              </Card.Text>
              <Card.Text>
                {i.description}
              </Card.Text>
              <Card.Text>
               rating: {i.rating}
              </Card.Text>
              <Card.Text>
              Price:{i.price}
              </Card.Text>
            </Card.Body>
          </Card>
          </Container>
          </Col>
          </Row>
          <br/>
        </div>
      ))}
    </div>
  );
}

export default ProductApi;
