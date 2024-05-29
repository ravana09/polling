import React, { useState } from "react";
import "./SignUp.css"; // Import your CSS file for styling
import { Form, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import signUpimg from "../Images/signupCard.jpg";
import GoogleImg from'../Images/googleImg.png'

function SignUp() {
  const [showOtpInput, setShowOtpInput] = useState(false);

  function handleSendOTP() {
    // Logic to send OTP (not implemented in this example)
    setShowOtpInput(true);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Add your form submission logic here
  }

  return (
    <>
      <div className="Body-container">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={6} className="d-flex justify-content-center mb-3">
              <img className="LoginImages" src={signUpimg} alt="loginImage" />
            </Col>

            <Col xs={12} md={6}>
              <Card
                className="LoginCard mx-auto"
                style={{ maxWidth: "95%", height: "auto" || "95%" }}
              >
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Name"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Your email"
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Mobile Number </Form.Label>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                     
                      <Row>
                        <Col sm={9}>
                          <Form.Control
                            type="text"
                            placeholder="Enter Your Email or Mobile Number"
                            required
                          />
                        </Col>
                        <Col sm={3}>
                          <Button onClick={handleSendOTP}>Send OTP</Button>
                        </Col>
                      </Row>
                    </Form.Group>
                    {showOtpInput && (
                      <Form.Group className="mb-3" controlId="formOtp">
                        <Form.Label>Enter OTP</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter OTP"
                          required
                        />
                      </Form.Group>
                    )}
                   
                     
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Your Password"
                        required
                      />
                    </Form.Group>
                    <center>
                      <Button variant="primary" type="submit" className="w-50 ">
                        Sign Up
                      </Button>
                    </center>
                    <hr />
                    

                    <div className="OtherLogin">
                      <Button
                        variant="light"
                        className="w-100 mb-2 d-flex align-items-center justify-content-center"
                        style={{ height: "60px" }}
                      ><img src={GoogleImg} alt="googleImage" className="GoogleImg"></img>
                        CONTINUE WITH GOOGLE
                      </Button>
                    
                    </div>
                    <div>
                      <p className="text-center">
                        Already have an account? <Link to="/">Sign In</Link>{" "}
                      </p>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SignUp;
