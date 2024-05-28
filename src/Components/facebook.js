import { Button, Row, Col, Form, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NewAccount from "./newAccount";

function facebook() {
  function signUp(){
    
  }
  return (
    <>
    <Container>
    <Row className="title-comtainer">
        <Col xl={1} sm={2} md={1}></Col>

        <Col xl={5} sm={4} md={5}>
          <p className="title">Pradeep Sathish</p>
          <p className="sub-title">
            Facebook helps you to connect and share with the people in your life{" "}
          </p>
        </Col>

        <Col xl={5}  sm={4} md={5}>
          <Card className="loginCard">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter your mail id "
              className="nameBox"
            />
          
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter your password"
            />
            <br />
            <Button variant="primary" size="lg">
              Log In
            </Button>{" "}
            <br />
            <center>
              {" "}
              <a href="https://react-bootstrap.netlify.app/docs/layout/grid" className="anchoer1">
                Forgotten password ?
              </a>
            </center>
            <hr />
            <Button size="lg" className="createBUtton" onClick={NewAccount} style={{backgroundColor:'#36A420'}}>
              Create a new account
            </Button>{" "}
          </Card>
          <center>
            <p className="bottom">
              <a href="https://react-bootstrap.netlify.app/docs/layout/grid" className="anchoer2">
                Create a page
              </a>{" "}
              for a celebrity, brand or business.
            </p>
          </center>
        </Col>
        <Col xl={1}  sm={2} md={1}></Col>
      </Row>
    </Container>
    

{/* <Container>
<div className="a5">
<h1>Hello</h1>
<h2>Helloooo</h2>
</div>
</Container> */}
    </>
  );
}
export default facebook;
