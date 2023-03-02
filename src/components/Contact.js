import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="contacts">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
 {/* // add social contact */}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
};