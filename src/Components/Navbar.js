// Import necessary dependencies
import React, { useState } from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import RangeOutput from "./RangeOutput";
import Swal from "sweetalert2";


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
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      title: "Log out  successfully"
      
    });
    setTimeout(()=>{
      navigate('/');
    },1000)
    
  }

  // Return JSX for NavBar component
  return (
    <>
      <Col>
        <div className="sidebar">
          <Container className="navBar-cointainer">
            <Navbar id="desktop_view" expand="lg" className="p-0">
              <Row className="w-100 m-0">
                <Col md={12} sm={12} className="p-0">
                  {/* <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className={`navbar-toggle-custom ${
                      show ? "navbar-toggler" : ""
                    }`}
                    onClick={handleShow}
                  /> */}

                  {/* <Navbar.Collapse id="basic-navbar-nav"> */}
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
                        style={{ color: "white",
                          
                         }}
                        className="d-flex align-items-end m-10 signOut "
                      >
                        Sign Out
                      </Nav.Link>
                    </Nav>
                  {/* </Navbar.Collapse> */}
                </Col>
              </Row>
            </Navbar>
          </Container>
        </div>

        <Navbar expand="lg" id="Mobile_view" className="bg-body-tertiary" >
      <Container style={{color:"white"}} >
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" 
        className={`navbar-toggle-custom ${
          show ? "navbar-toggler" : ""
        }`}
        
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"  >
          <Nav.Link
                        onClick={() => handleClick("/home")}
                        style={{ color: "white",paddingLeft:20 }}
                      >
                        Home
                      </Nav.Link>
                      <Nav.Link
                        onClick={() => handleClick("/Polling")}
                        style={{ color: "white",paddingLeft:20 }}
                      >
                        Services
                      </Nav.Link>
                      <Nav.Link
                        onClick={() => handleClick("/home")}
                        style={{ color: "white",paddingLeft:20 }}
                      >
                        Clients
                      </Nav.Link>
                      <Nav.Link
                        onClick={() => handleClick("/home")}
                        style={{ color: "white",paddingLeft:20 }}
                      >
                        Contact
                      </Nav.Link>
                      {/* Sign-out button */}
                      <Nav.Link
                        onClick={handleSignOut}
                        style={{ color: "white",paddingLeft:20 }}
                        className="d-flex align-items-end"
                      >
                        Sign Out
                      </Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>

      
        {/* <Offcanvas
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
        <footer></footer> */}
      </Col>
    </>
  );
}

// Export the NavBar component
export default NavBar;
