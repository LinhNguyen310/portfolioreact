import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState, useEffect} from "react";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import resume from '../assets/resume/resume.pdf';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, seScrolled] = useState(false)
    useEffect(() =>
    {
        const onScroll = () => {
            // the banner vertical size is 50
            // is position of current window > 50 => scroll
            if(window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);  
    }

    return (
        // What does this mean?
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
        <Navbar.Brand href="#home">
            {/* // add image here */}
            <img src={logo}
            alt = "Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            {/* // add logo on mobile phone */}
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {/* // highlight the link at the top
                // check if the active link == home. If not, the name will be navbar-link
                // onClick = check if the title is clicked   */}
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            {/* // add social contact */}
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href = "add social contact here"><img src = {navIcon1} alt=""></img></a>
                    <a href = "add social contact here"><img src = {navIcon2} alt=""></img></a>
                    <a href = "add social contact here"><img src = {navIcon3} alt=""></img></a>
                </div>
                <a href="../assets/resume/resume.pdf" download="resume">
                    <button type="button">Download Resume</button>
                    </a>            </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
