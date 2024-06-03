import React, { useState } from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useNavigate } from "react-router-dom";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  let navigate = useNavigate();
  function handleClick(input) {
    navigate(input);
    handleClose();
  }

  return (
    <>
      <Col>
        <div className="sidebar">
          <Container>
            <Navbar expand="lg" className="p-0">
              <Row className="w-100 m-0">
                <Col md={12} sm={12} className="p-0">
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className={`navbar-toggle-custom ${show ? 'navbar-toggler' : ''}`}
                    onClick={handleShow}
                  />
                  <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav defaultActiveKey="/home" className="flex-column">
                      <Nav.Link onClick={() => handleClick("/home")} style={{ color: "white" }}>
                        Home
                      </Nav.Link>
                      <Nav.Link onClick={() => handleClick("/Polling")} style={{ color: "white" }}>
                        Services
                      </Nav.Link>
                      <Nav.Link onClick={() => handleClick("/home")} style={{ color: "white" }}>
                        Clients
                      </Nav.Link>
                      <Nav.Link onClick={() => handleClick("/home")} style={{ color: "white" }}>
                        Contact
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Col>
              </Row>
            </Navbar>
          </Container>
        </div>

        <Offcanvas show={show} onHide={handleClose} placement="start" style={{ backgroundColor: "black", color: "white" }}>
          <Offcanvas.Header closeButton style={{ color: "white" }}>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link onClick={() => handleClick("/home")} style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link onClick={() => handleClick("/Polling")} style={{ color: "white" }}>
                Services
              </Nav.Link>
              <Nav.Link onClick={() => handleClick("/home")} style={{ color: "white" }}>
                Clients
              </Nav.Link>
              <Nav.Link onClick={() => handleClick("/home")} style={{ color: "white" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Col>
    </>
  );
}

export default NavBar;

