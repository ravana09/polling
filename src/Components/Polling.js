import React, { useState } from 'react';
import { Card, Col, Form, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RangeOutput from './RangeOutput'; // Import RangeOutput component

function Polling() {
  const [radio, setRadio] = useState("");
  const [result, setResult] = useState("");
  const [votedOption, setVotedOption] = useState(""); // State to store voted option

  
  let navigate = useNavigate();

  function handleRadio(e) {
    setRadio(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setVotedOption(radio); // Store the voted option in state
  }

  return (
    <>
      <div>
        <Row>
          <div className='polling'>
            <Col md={12} sm={12}>
              <Card style={{ width: "100%", backgroundColor: "#181c1c", color: "white" }}>
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
        {/* Conditionally render RangeOutput component if user has voted */}
        {votedOption && (
          <Row>
            <Col md={12} sm={12}>
              <RangeOutput votedOption={votedOption} />
            </Col>
          </Row>
        )}
      </div>
    </>
  );
}

export default Polling;
