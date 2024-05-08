import {
  Button,
  Row,
  Col,
  Form,
  Card,
  CloseButton,
  Dropdown,
  ListGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NewAccount() {
  return (
    <>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Card>
            <Card.Header>
              <Row>
                <Col md={11}>
                  <h1>Sign Up</h1>
                  <p>it's quick and easy </p>
                </Col>
                <Col md={1}>
                  <CloseButton />
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Control
                      placeholder="First name"
                      className="formControl"
                      style={{ backgroundColor: "#F5F6F7" }}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Surname"
                      className="formControl"
                      style={{ backgroundColor: "#F5F6F7" }}
                    />
                  </Col>
                </Row>
                <Form.Control
                  placeholder="Mobile number or email address "
                  className="formControl"
                  style={{ backgroundColor: "#F5F6F7" }}
                />
                <Form.Control
                  placeholder="New password"
                  className="formControl"
                  style={{ backgroundColor: "#F5F6F7" }}
                />

                <Form.Label htmlFor="inputPassword5">gender</Form.Label>

                <ListGroup horizontal>
                  <ListGroup.Item>
                   <input  type="number" placeholder="Date"/>
                     
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <input type="date"/>
                  </ListGroup.Item>
                  <ListGroup.Item>renders</ListGroup.Item>
                </ListGroup>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </>
  );
}

export default NewAccount;
