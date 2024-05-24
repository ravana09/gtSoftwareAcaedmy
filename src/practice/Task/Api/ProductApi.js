import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";

function ProductApi() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res.products);
        console.log(res.products)
      });
  }, []);
  console.log(data);

  return (
    <div>
      <Container>
        <h1>Products</h1>
        <Row>
          {data.map((i, id) => (
            <Col key={id} md={4} className="mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={i.images[0]}
                  style={{
                    width: 250,
                    height: 200,
            
                  
                    padding: 10,
                  }}
                />
                <Card.Body>
                  <Card.Title>{i.title}</Card.Title>
                  <Card.Text>Brand: {i.brand}</Card.Text>
                  <Card.Text>{i.description}</Card.Text>
                  <Card.Text>Rating: {i.rating}</Card.Text>
                  <Card.Text>Price: {i.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductApi;
