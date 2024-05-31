import React, { useState } from "react";
import "../Components/Home.css";
import { Card, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";

function Home() {
  let [radio ,setRadio]=useState()
  function handleRadio(e) {
    setRadio(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    
  }
  return (
    <>
      <div>
        <div>
          <Row>
            <Col md={3} style={{ backgroundColor: "skyblue" }}>
              <div className="sidebar">
                <Container>
                  <Navbar>
                    <Row>
                      <Col md={12}></Col>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                    </Row>
                    <Nav defaultActiveKey="/home" className="flex-column">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#services">Services</Nav.Link>
                      <Nav.Link href="#clients">Clients</Nav.Link>
                      <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                  </Navbar>
                </Container>
              </div>
            </Col>

            <Col md={6} style={{ backgroundColor: "pink" }}>
              <Card style={{ width: '60rem' }}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card style={{ width: '50rem' }}>
                  <Card.Header>Featured</Card.Header>
                  <Card.Body>
                  <Card.Title>
                    <Form onSubmit={handleSubmit}>
                    <Form.Check
                        type="radio"
                        label="Male"
                        value="Male"
                        onChange={handleRadio}
                        checked={radio === "Male"}
                        className="formRadio"
                      />
                         <Form.Check
                        type="radio"
                        label="Female"
                        value="Female"
                        onChange={handleRadio}
                        checked={radio === "Female"}
                        className="formRadio"
                      />
                         <Form.Check
                        type="radio"
                        label="Transgender"
                        value="Transgender"
                        onChange={handleRadio}
                        checked={radio === "Transgender"}
                        className="formRadio"
                      />
                         <Form.Check
                        type="radio"
                        label="Others"
                        value="Others"
                        onChange={handleRadio}
                        checked={radio === "Others "}
                        className="formRadio"
                      />
                      <button type="Submit ">Vote</button>

                    </Form>
                    

                  </Card.Title>
                  </Card.Body>



                  </Card>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
            </Col>

            <Col md={3} style={{ backgroundColor: "lightgreen" }}>
              3
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Home;
