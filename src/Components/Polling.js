import React, { useState } from 'react';
import { Card, Col, Form, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Polling() {
  const [radio, setRadio] = useState("");
  const [result, setResult] = useState("");

  let navigate=useNavigate()

//   let Malecounter = 30;
//   let Femalecounter = 60;
//   let TransgenderCounter = 70;
//   let OthersCounter = 60;

  function handleRadio(e) {
    setRadio(e.target.value);
  }

//   function checked() {
//     if (radio === "Male") {
//       Malecounter++;
//     } else if (radio === "Female") {
//       Femalecounter++;
//     } else if (radio === "Transgender") {
//       TransgenderCounter++;
//     } else {
//       OthersCounter++;
//     }
//   }

  function handleSubmit(e) {
    e.preventDefault();
    // checked();
    navigate('/RangeOutput')
    
    // let counterValue = 0;
    // if (radio === "Male") {
    //   counterValue = Malecounter;
    // } else if (radio === "Female") {
    //   counterValue = Femalecounter;
    // } else if (radio === "Transgender") {
    //   counterValue = TransgenderCounter;
    // } else {
    //   counterValue = OthersCounter;
    // }
  
  }

  return (
    <>
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
                    <Card.Title style={{margin:10}}>
                      <Form onSubmit={handleSubmit}>
                        <Form.Check
                          type="radio"
                          label="Male"
                          value="Male"
                          onChange={handleRadio}
                          checked={radio === "Male"}
                          className="formRadio"
                          style={{margin:10}}
                        />
                     
                        <Form.Check
                          type="radio"
                          label="Female"
                          value="Female"
                          onChange={handleRadio}
                          checked={radio === "Female"}
                          className="formRadio"
                          style={{margin:10}}
                        />
                        <Form.Check
                          type="radio"
                          label="Transgender"
                          value="Transgender"
                          onChange={handleRadio}
                          checked={radio === "Transgender"}
                          className="formRadio"
                          style={{margin:10}}
                        />
                        <Form.Check
                          type="radio"
                          label="Others"
                          value="Others"
                          onChange={handleRadio}
                          checked={radio === "Others"}
                          className="formRadio"
                          style={{margin:10}}
                        />
                        <Button type="submit" style={{margin:10,backgroundColor:"grey"}}>Vote</Button>
                      </Form>
                    </Card.Title>

                    
                  </Card.Body>
                </Card>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </Col>
          </div>
        </Row>
      </div>
    </>
  );
}

export default Polling;
