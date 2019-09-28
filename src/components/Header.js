import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';

class Header extends React.Component{
    render(){
        return(
            <Navbar className="navbar-area" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About Me</Nav.Link>
                            <Nav.Link href="#link">job experience</Nav.Link>
                            <Nav.Link href="#link">Portfolio</Nav.Link>
                            <Nav.Link href="#link">Skills</Nav.Link>
                            <Nav.Link href="#link">Education</Nav.Link>
                            <Nav.Link className="hireMeBtn" href="#link">Hire Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header;