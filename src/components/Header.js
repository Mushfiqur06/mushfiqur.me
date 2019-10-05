import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll'
import { Container, Navbar, Nav} from 'react-bootstrap';

class Header extends React.Component{
    render(){
        return(
            <Navbar className="navbar-area" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto hader-navbar">
                            <Link 
                                className="nav-link"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Home</Link>
                            <Link
                                className="nav-link"
                                to="aboutMeSection"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >About Me</Link>
                            <Link 
                                className="nav-link"
                                to="jobExperienceSection"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >job experience</Link>
                            <Link 
                                className="nav-link"
                                to="portfolioSection"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Portfolio</Link>
                            <Link 
                                className="nav-link"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            
                            >Skills</Link>
                            <Nav.Link 
                                className="nav-link"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Education</Nav.Link>
                            <Link 
                                className="nav-link hireMeBtn btnStyle"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500} 
                            >Contact Me</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header;