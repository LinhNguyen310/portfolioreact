import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/cat-header.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const storageKey = 'theme-preference'
  const onClick = () => {
  // flip current value
  theme.value = theme.value === 'light'
      ? 'dark'
      : 'light'
  setPreference()    
  }

  const getColorPreference = () => {
  if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey)
  else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }

  const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
  }

  const reflectPreference = () => {
  document.firstElementChild
      .setAttribute('data-theme', theme.value)

  document
      .querySelector('#theme-toggle')
      ?.setAttribute('aria-label', theme.value)
  }

  const theme = {
  value: getColorPreference(),
  }

  // set early so no page flashes / CSS is made aware
  reflectPreference()

  window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference()

  // now this script can find and listen for clicks on the control
  document
      .querySelector('#theme-toggle')
      .addEventListener('click', onClick)
  }

  // sync with system changes
  window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({matches:isDark}) => {
      theme.value = isDark ? 'dark' : 'light'
      setPreference()
  })
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
                
                  <p1>I'm a student of computer science at University of Alberta. I have a deep passion for coding and designing, and I love to spend my free time tinkering with new projects and learning new programming languages. In addition to my love for technology, I also adore cats and enjoy spending time with my furry friends.</p1>
                  {/* <a href="geeksforgeeks.png" download="GFG">
                    <button type="button">Download Resume</button>
                    </a> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <div class="bottomleft">                  
                        <img src={headerImg}
                        width="20" 
                        height="20"
                    alt="Header Img"/>
                  </div>


                </div>}

            </TrackVisibility> */}
            <button class="theme-toggle" id="theme-toggle" title="Toggles light & dark" aria-label="auto" aria-live="polite">
                <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                    <mask class="moon" id="moon-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <circle cx="24" cy="10" r="6" fill="black" />
                    </mask>
                    <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
                    <g class="sun-beams" stroke="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                </svg>
            </button>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}