import React, { useState } from "react";
import "./SignUp.css";
import { Form, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import signUpimg from "../Images/signupCard.jpg";
import GoogleImg from "../Images/googleImg.png";

function SignUp() {
  const [showOtpInput, setShowOtpInput] = useState(false);

  const schema = yup.object().shape({
    Name: yup.string().required("Name is required"),
    Email: yup
      .string()
      .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]{2,6}$/, "Enter a valid email")
      .required("Email is required"),
    MobileNumber: yup
      .string()
      .matches(/^\d{10}$/, "Enter a valid 10 digit mobile number")
      .required("Mobile Number is required"),
    Password: yup
      .string()
      .matches(/^[\w\d\W]{8}$/, "Password must be exactly 8 characters")
      .required("Password is required"),
  });

  const initialValues = {
    Name: "",
    Email: "",
    MobileNumber: "",
    Password: "",
  };

  const handleSendOTP = () => {
    setShowOtpInput(true);
  };

  const handleVerifyOTP = () => {
    setShowOtpInput(false);
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className="Body-container">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6} className="d-flex justify-content-center mb-3">
            <img className="LoginImages" src={signUpimg} alt="signupImage" />
          </Col>
          <Col xs={12} md={6}>
            <Card
              className="LoginCard mx-auto"
              style={{ maxWidth: "95%", height: "auto" }}
            >
              <Card.Body>
                <Formik
                  initialValues={initialValues}
                  validationSchema={schema}
                  onSubmit={handleSubmit}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Name"
                          name="Name"
                          value={values.Name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.Name && !!errors.Name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Name}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Row>
                          <Col sm={9}>
                            <Form.Control
                              type="text"
                              placeholder="Enter Your Email"
                              name="Email"
                              value={values.Email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.Email && !!errors.Email}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.Email}
                            </Form.Control.Feedback>
                          </Col>
                          <Col sm={3}>
                            <Button type="button" onClick={handleSendOTP}>
                              Send OTP
                            </Button>
                          </Col>
                        </Row>
                      </Form.Group>

                      {showOtpInput && (
                        <Form.Group className="mb-3" controlId="formOtp">
                          <Row>
                            <Form.Label>Enter OTP</Form.Label>
                            <Col sm={6}>
                              <Form.Control
                                type="text"
                                placeholder="Enter OTP"
                                required
                              />
                            </Col>
                            <Col sm={6}>
                              <Button
                                onClick={handleVerifyOTP}
                                variant="success"
                              >
                                Verify
                              </Button>
                            </Col>
                          </Row>
                        </Form.Group>
                      )}

                      <Form.Group className="mb-3" controlId="formMobileNumber">
                        <Form.Label>Mobile Number</Form.Label>
                        <Row>
                          <Col sm={9}>
                            <Form.Control
                              type="text"
                              placeholder="Enter Your Mobile Number"
                              name="MobileNumber"
                              value={values.MobileNumber}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.MobileNumber && !!errors.MobileNumber}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.MobileNumber}
                            </Form.Control.Feedback>
                          </Col>
                          <Col sm={3}>
                            <Button type="button" onClick={handleSendOTP}>
                              Send OTP
                            </Button>
                          </Col>
                        </Row>
                      </Form.Group>
                      {showOtpInput && (
                        <Form.Group className="mb-3" controlId="formOtp">
                          <Row>
                            <Form.Label>Enter OTP</Form.Label>
                            <Col sm={6}>
                              <Form.Control
                                type="text"
                                placeholder="Enter OTP"
                                required
                              />
                            </Col>
                            <Col sm={6}>
                              <Button
                                onClick={handleVerifyOTP}
                                variant="success"
                              >
                                Verify
                              </Button>
                            </Col>
                          </Row>
                        </Form.Group>
                      )}

                      <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter Your Password"
                          name="Password"
                          value={values.Password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.Password && !!errors.Password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Password}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <center>
                        <Button variant="primary" type="submit" className="w-50">
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
                          />
                          CONTINUE WITH GOOGLE
                        </Button>
                      </div>
                      <div>
                        <p className="text-center">
                          Already have an account? <Link to="/">Sign In</Link>
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
  );
}

export default SignUp;
