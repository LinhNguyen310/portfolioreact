import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/project2.jpg";
import projImg3 from "../assets/img/project3.gif";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ASlingo",
      imgUrl: projImg1}
    // },
    // {
    //   title: "FitAI",
    //   imgUrl: projImg2
    // },
    // {
    //   title: "Online White Board",
    //   imgUrl: projImg3
    // },
    // {
    //   title: "Image Classfier",
    //   imgUrl: projImg4
    // },
    // {
    //   title: "Simple Chat Room",
    //   imgUrl: projImg5
    // }
  ];
  const projects2 = [
    {
      title: "FitAI",
      imgUrl: projImg2
    }

  ];  const projects3 = [
    {
      title: "Online White Board",
      imgUrl: projImg3
    }
  ];  const projects4 = [
    {
      title: "Image Classfier",
      imgUrl: projImg4
    }
  ];  const projects5 = [
    {
      title: "Simple Chat Room",
      imgUrl: projImg5
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Col>
          <Row >
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">ASLingo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">FitAI</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Online White Board</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Image Classfier</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Simple Chat Room</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                    <Row>
                        {
                          projects4.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                    <Row>
                        {
                          projects5.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Row>
        </Col>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}