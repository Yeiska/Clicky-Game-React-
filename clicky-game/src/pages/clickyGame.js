import React from "react";
//import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const clickyGame = () => (
  <div>
    <clickyGame backgroundImage="https://media.giphy.com/media/ZnKdSM5piRLDW/giphy.gif">
      <h1>Clicky Game!</h1>
      <h2>Click on an image to earn points, but don't click on any more than once!</h2>
    </clickyGame>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            
          </p>
          <p>
            
          </p>
          <p>
            
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default clickyGame;
