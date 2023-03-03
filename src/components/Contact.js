import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="contacts">
    <div className="contact-bx wow slideInUp">
      <h2>Get In Touch</h2>


      <span className='css'>
          <a href="mailto:lhnguye1@ualberta.ca">
              Email Me
          </a>            
      </span>
      </div>

    </section>
  )
};