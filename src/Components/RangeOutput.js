import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

function RangeOutput() {
  // Define vote counts
  let Malecounter = 30;
  let Femalecounter = 60;
  let TransgenderCounter = 70;
  let OthersCounter = 60;

  // Calculate total votes
  const totalVotes =
    Malecounter + Femalecounter + TransgenderCounter + OthersCounter;

  // Calculate percentages
  const malePercentage = (Malecounter / totalVotes) * 100;
  const femalePercentage = (Femalecounter / totalVotes) * 100;
  const transgenderPercentage = (TransgenderCounter / totalVotes) * 100;
  const othersPercentage = (OthersCounter / totalVotes) * 100;

  return (
    <div>
      <Row>
        <div className="polling">
          <Col md={12} sm={12}>
            <Card
              style={{
                width: "100%",
                backgroundColor: "#181c1c",
                color: "white",
              }}
            >
              <Card.Body>
                <Card.Title> Results</Card.Title>
                <Card
                  style={{
                    width: "100%",
                    backgroundColor: "#2a2d2d",
                    color: "white",
                    border: "1px solid White",
                  }}
                >
                  <Card.Body>
                    <div>
                      <span>Male: {malePercentage.toFixed(2)}%</span>
                      <div
                        style={{
                          backgroundColor: "blue",
                          width: `${malePercentage}%`,
                          height: "20px",
                          margin: "5px 0",
                        }}
                      ></div>
                      <span>Female: {femalePercentage.toFixed(2)}%</span>
                      <div
                        style={{
                          backgroundColor: "pink",
                          width: `${femalePercentage}%`,
                          height: "20px",
                          margin: "5px 0",
                        }}
                      ></div>
                      <span>
                        Transgender: {transgenderPercentage.toFixed(2)}%
                      </span>
                      <div
                        style={{
                          backgroundColor: "purple",
                          width: `${transgenderPercentage}%`,
                          height: "20px",
                          margin: "5px 0",
                        }}
                      ></div>
                      <span>Others: {othersPercentage.toFixed(2)}%</span>
                      <div
                        style={{
                          backgroundColor: "green",
                          width: `${othersPercentage}%`,
                          height: "20px",
                          margin: "5px 0",
                        }}
                      ></div>
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

