import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/cat-header.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Hi", "My name is Linh Nguyen","I am a Web Developer", "Web Designer" ];
  const period = 200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <center><h1><span className="txt-rotate" dataPeriod="200" data-rotate='["Hi", "My name is Linh Nguyen","I am a Web Developer", "Web Designer" ]'><span className="wrap">{text}</span></span></h1></center>
                  <p1>I'm a computer science student at the University of Alberta who loves coding and design. I enjoy the challenges and rewards of writing code, as well as exploring the world of user interface and user experience design.</p1>
                  {/* <a href="geeksforgeeks.png" download="GFG">
                    <button type="button">Download Resume</button>
                    </a> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <div class="bottomleft">                  
                        <img src={headerImg}
                        width="20" 
                        height="20"
                    alt="Header Img"/>
                  </div>


                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}