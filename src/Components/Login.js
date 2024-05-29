import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function Login() {
  let [formData, setFormData] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here
  }

  return (
    <>
      <div className="Body-cointainer">
        <div>
            <center>
          <Row>
            <Col sm={6} md={3} lg={3} xl={2}></Col>
            <Col sm={6} md={6} lg={3} xl={2}></Col>
            <Col sm={6} md={3} lg={3} xl={2}></Col>
          </Row>
          <Card style={{ width: "45rem", height: "25rem" }}>
            <div>
                
            </div>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your email"
                    required
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Your Password"
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
          </center>
        </div>
      </div>
    </>
  );
}

export default Login;
