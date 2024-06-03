import React from "react";
import "../Components/Home.css";
import { Col, Container, Row } from "react-bootstrap";

import Polling from "./Polling";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "auto",
          color: "white",
        }}
      >
        <Container fluid>
          <Row>
            
            <Col md={3}>
              <Navbar />
     
            </Col>
            <Col md={6}>
              <Polling />
            </Col>
            <Col md={3}></Col>
          </Row>
         
        </Container>
        
      </div>
    </>
  );
}

export default Home;
