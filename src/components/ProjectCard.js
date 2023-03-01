import { Row } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icon3.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Row size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Row>
  )
}