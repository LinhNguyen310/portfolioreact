import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  return (
    <div className="newsletter-bx wow slideInUp">
      <button >
      <a  href="mailto:lhnguye1@ualberta.ca">Email Me</a>
      </button>
    </div>
  )
};