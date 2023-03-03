import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icon3.png';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className='social-icon'>
              <a href = "https://www.linkedin.com/in/linh-nguyen-361825260/"><img src = {navIcon1} alt=""></img></a>
              <a href = "https://github.com/LinhNguyen310"><img src = {navIcon2} alt=""></img></a>
              <a href = "https://www.instagram.com/linhnguy_en/"><img src = {navIcon3} alt=""></img></a>
          </div>
          <span className='footer-text'>
          <a download="linh'sresume.pdf" href="./assets/img/linh'sresume.pdf">
              <button type="button">
                Download Resume
                </button>
              </a>            
          </span>
            <p>2023 Linh Nguyen</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}