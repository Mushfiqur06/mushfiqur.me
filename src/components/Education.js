import React, { Component } from 'react';
import {Container, Row, Col, Accordion, Card} from 'react-bootstrap'
import PageSectionTitle from './PageSectionTitle';

class Education extends Component {
    state = {}
    render() { 
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <Accordion defaultActiveKey="0" className="accordingWrapper">
                                <Card className="accordingWrapper__card">
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="accordingWrapper__card--header">
                                        Mastering JavaScript & Node.js
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0" className="accordingWrapper__card--body">
                                        <Card.Body>
                                            <div className="accordingWrapper__card--body--institutionName">
                                                <h2><span>Institution: </span> TechMasters</h2>
                                            </div>
                                            <div className="accordingWrapper__card--body--courseDate">
                                                <p><b> March 2017</b> to <b>Jully 2017</b></p>
                                            </div>
                                            <div className="accordingWrapper__card--body--trainerInfo">
                                                <p>Trainer: <b>Mizanur Rahman</b></p>
                                                <p>Head of Engineering at Telenor Health</p>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="accordingWrapper__card">
                                    <Accordion.Toggle as={Card.Header} eventKey="1" className="accordingWrapper__card--header">
                                        Fullstack Javascript Bootcamp
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1" className="accordingWrapper__card--body">
                                        <Card.Body>
                                            <div className="accordingWrapper__card--body--institutionName">
                                                <h2><span>Institution: </span> Twinkle Cats</h2>
                                            </div>
                                            <div className="accordingWrapper__card--body--courseDate">
                                                <p><b> January 2018</b> to <b>Jun 2018</b></p>
                                            </div>
                                            <div className="accordingWrapper__card--body--trainerInfo">
                                                <p>Trainer: <b>HM Nayem</b></p>
                                                <p>Founder & CEO at Twinkle Cats</p>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card className="accordingWrapper__card">
                                    <Accordion.Toggle as={Card.Header} eventKey="2" className="accordingWrapper__card--header">
                                        B.S.C In Computer Science
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2" className="accordingWrapper__card--body">
                                        <Card.Body>
                                            <div className="accordingWrapper__card--body--institutionName">
                                                <h2><span>Institution: </span> Southeast University</h2>
                                            </div>
                                            <div className="accordingWrapper__card--body--courseDate">
                                                <p><b> 2018</b> to <b>2022</b></p>
                                            </div>
                                            <div className="accordingWrapper__card--body--trainerInfo">
                                                <p>Class Date <b> Friday </b> and <b> Saturday</b></p>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
 
export default Education;