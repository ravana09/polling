import React, { useState } from "react";
import "./SignUp.css"; // Import your CSS file for styling
import { Form, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import signUpimg from "../Images/signupCard.jpg";
import GoogleImg from "../Images/googleImg.png";

function SignUp() {
  const [showOtpInput, setShowOtpInput] = useState(false);
  let [formData, setFormData] = useState({
    Name: "",
    Email: "",
    MobileNumber: "",
    Password: "",
  });

  function handleChanges(e) {
    const number = /^\d*$/;
    const names = /^[a-zA-Z ]*$/;

    const { name, value } = e.target;

    if (name === "MobileNumber" && (number.test(value) || value === " ")) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else if (name === "Name" && (names.test(value) || value === " ")) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else if (name === "Email" || name === "Password") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  }

  const schema = yup.object().shape({
    Name: yup.string().required(),
    Email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/,
        "Enter a Valid Email"
      )
      .required(),

    MobileNumber: yup
      .string()
      .matches(/^\d{10}$/, "Enter only 10 digits")
      .required(),
    Password: yup
      .string()
      .matches(/^[\w\d\W]{8}$/, "Enter only 8 digits")
      .required("Password is required"),
  });

  function handleSendOTP() {
    setShowOtpInput(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormData({ Name: "", Email: "", MobileNumber: "", Password: "" });
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
                  <Formik
                    initialValues={formData}
                    validationSchema={schema}
                    enableReinitialize
                    onSubmit={handleSubmit}
                  >
                    {({ handleSubmit }) => (
                      <Form onSubmit={handleSubmit} noValidate>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Your Name"
                            required
                            name="Name"
                            value={formData.Name}
                            onChange={handleChanges}
                          />
                        </Form.Group>
                        <ErrorMessage
                          name="Name"
                          className="text-danger"
                          component="div"
                        />
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Your email"
                            required
                            name="Email"
                            value={formData.Email}
                            onChange={handleChanges}
                          />
                        </Form.Group>
                        <ErrorMessage
                          name="Email"
                          className="text-danger"
                          component="div"
                        />
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Mobile Number </Form.Label>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Row>
                              <Col sm={9}>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter Your  Mobile Number"
                                  required
                                  name="MobileNumber"
                                  value={formData.MobileNumber}
                                  onChange={handleChanges}
                                />
                                <ErrorMessage
                                  name="MobileNumber"
                                  className="text-danger"
                                  component="div"
                                />
                              </Col>
                              <Col sm={3}>
                                <Button onClick={handleSendOTP}>
                                  Send OTP
                                </Button>
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

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter Your Password"
                            required
                            name="Password"
                            value={formData.Password}
                            onChange={handleChanges}
                          />
                          <ErrorMessage
                            name="Password"
                            className="text-danger"
                            component="div"
                          />
                        </Form.Group>
                        <center>
                          <Button
                            variant="primary"
                            type="submit"
                            className="w-50 "
                          >
                            Sign Up
                          </Button>
                        </center>
                        <hr />

                        <div className="OtherLogin">
                          <Button
                            variant="light"
                            className="w-100 mb-2 d-flex align-items-center justify-content-center"
                            style={{ height: "60px" }}
                          >
                            <img
                              src={GoogleImg}
                              alt="googleImage"
                              className="GoogleImg"
                            ></img>
                            CONTINUE WITH GOOGLE
                          </Button>
                        </div>
                        <div>
                          <p className="text-center">
                            Already have an account? <Link to="/">Sign In</Link>{" "}
                          </p>
                        </div>
                      </Form>
                    )}
                  </Formik>
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
