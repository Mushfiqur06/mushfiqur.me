import React, { Component } from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import MyPic from './../my-pic.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class About extends Component {
    render() { 
        return (
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="author-img text-center">
                            <img src={MyPic} alt="Mushfiqur Rahman Niloy"/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="about-info">
                            <p>Hi! I am a Front-End Developer, Speaker, Organizer and I'm very passionate and dedicated to my work. With 4 years experience as a professional Front-End Developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
                            <h4>Social Link: </h4>
                            <Nav className="about-social-Links">
                                <Nav.Item as="li">
                                    <Nav.Link href="https://twitter.com/mushfiqur06">
                                       <FontAwesomeIcon icon={['fab', 'twitter-square']} />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="https://facebook.com/mushfiqur06">
                                       <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="https://www.linkedin.com/in/mushfiqur06/">
                                       <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link title="Skype ID: mushfiqur06">
                                       <FontAwesomeIcon icon={['fab', 'skype']} />
                                    </Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default About;