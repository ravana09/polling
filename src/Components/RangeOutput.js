import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function RangeOutput() {
  

 

   let Malecounter = 30;
  let Femalecounter = 60;
  let TransgenderCounter = 70;
  let OthersCounter = 60;



  return (
    <div>
      <Row>
      <div className='polling'>
          <Col md={12} sm={12}>
            <Card style={{ width: "100%", backgroundColor: "#181c1c", color: "white" }}>
              {/* <Card.Header style={{ backgroundColor: "darkGrey",color:"black" }}>Featured</Card.Header> */}
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card style={{ width: "100%", backgroundColor: "#2a2d2d", color: "white", border: "1px solid White" }}>
                 
                  <Card.Body>
                    <div>
                      <span></span>
                    </div>

                    
                  </Card.Body>
                </Card>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </Col>
          </div>
      </Row>
    </div>
  );
}

export default RangeOutput;
