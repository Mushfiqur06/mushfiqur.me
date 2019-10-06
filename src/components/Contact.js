import React, { Component } from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap'

class Contact extends Component {
    state = {  }
    render() { 
        
        return (
            <Container>
                <Form className="contactFormWrapper">
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId="validationCustom01">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Your Name"
                                    defaultValue="Mushfiqur Niloy"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control
                                    required
                                    type="Email"
                                    placeholder="Your Email"
                                    defaultValue="message@example.com"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId="validationCustom03">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Subject"
                                    defaultValue="Web Application"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={12}>
                            <Form.Group controlId="validationCustom03">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    className="textarea"
                                    as="textarea" 
                                    rows="5"
                                    required
                                    type="text"
                                    placeholder="Message"
                                    defaultValue="Tell me your plan or anything"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <div className="submitBtn">
                            <button>Send Message</button>
                        </div>
                        
                    </Row>
                </Form>
            </Container>
        );
    }
}
 
export default Contact;