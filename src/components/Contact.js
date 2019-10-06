import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'

class Contact extends Component {
    state = {  }
    render() { 
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>Hello from Contact Component</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default Contact;