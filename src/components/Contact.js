import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icon3.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const Contact = () => {
  return (
    <section className="contact" id="connect">
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
                  <span className='navbar-text'>

                  <div className='social-icon'>
                      <a href = "https://www.linkedin.com/in/linh-nguyen-361825260/"><img src = {navIcon1} alt=""></img></a>
                      <a href = "https://github.com/LinhNguyen310"><img src = {navIcon2} alt=""></img></a>
                      <a href = "https://www.instagram.com/linhnguy_en/"><img src = {navIcon3} alt=""></img></a>
                  </div>
                  <a download="linh'sresume.pdf" href="./assets/img/linh'sresume.pdf">
                      <button type="button">Download Resume</button>
                      </a>            
                  </span>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
};