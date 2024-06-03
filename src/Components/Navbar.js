// Import necessary dependencies
import React, { useState } from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import RangeOutput from "./RangeOutput";

// Define the NavBar component
function NavBar() {
  // State for showing/hiding the Offcanvas menu
  const [show, setShow] = useState(false);

  // Function to close the Offcanvas menu
  const handleClose = () => {
    setShow(false);
  };

  // Function to open the Offcanvas menu
  const handleShow = () => {
    setShow(true);
  };

  // React Router's navigate function
  let navigate = useNavigate();

  // Function to handle navigation and close menu
  function handleClick(input) {
    navigate(input);
    handleClose();
  }

  // Function to handle sign-out
  function handleSignOut() {
   
    localStorage.removeItem("Phone Number");
    localStorage.removeItem("Phone Number ");
    navigate("/login"); // Redirect to login page after sign-out
  }

  // Return JSX for NavBar component
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
                    className={`navbar-toggle-custom ${
                      show ? "navbar-toggler" : ""
                    }`}
                    onClick={handleShow}
                  />

                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav defaultActiveKey="/home" className="flex-column">
                      <Nav.Link
                        onClick={() => handleClick("/home")}
                        style={{ color: "white", fontSize: 30 }}
                      >
                        Hello !! {localStorage.getItem("Phone Number ")}
                      </Nav.Link>
                      <hr />

                      <Nav.Link
                        onClick={() => handleClick("/home")}
                        style={{ color: "white" }}
                      >
                        Home
                      </Nav.Link>
                      <Nav.Link
                        onClick={() => handleClick("/Polling")}
                        style={{ color: "white" }}
                      >
                        Services
                      </Nav.Link>
                      <Nav.Link
                        onClick={() => handleClick("/home")}
                        style={{ color: "white" }}
                      >
                        Clients
                      </Nav.Link>
                      <Nav.Link
                        onClick={() => handleClick("/home")}
                        style={{ color: "white" }}
                      >
                        Contact
                      </Nav.Link>
                      {/* Sign-out button */}
                      <Nav.Link
                        onClick={handleSignOut}
                        style={{ color: "white" }}
                        className="d-flex align-items-end"
                      >
                        Sign Out
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Col>
              </Row>
            </Navbar>
          </Container>
        </div>

        {/* Offcanvas menu */}
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="start"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Offcanvas.Header closeButton style={{ color: "white" }}>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link
                onClick={() => handleClick("/home")}
                style={{ color: "white" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => handleClick("/Polling")}
                style={{ color: "white" }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                onClick={() => handleClick("/home")}
                style={{ color: "white" }}
              >
                Clients
              </Nav.Link>
              <Nav.Link
                onClick={() => handleClick("/home")}
                style={{ color: "white" }}
              >
                Contact
              </Nav.Link>
              {/* Sign-out button */}
              <Nav.Link
                onClick={handleSignOut}
                style={{ color: "white" }}
                className="d-flex align-items-end"
              >
                Sign Out
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
        <footer></footer>
      </Col>
    </>
  );
}

// Export the NavBar component
export default NavBar;
