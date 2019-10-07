import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className="footerWrapper text-center">
                                <p>&copy; 2019 All rights Reserved</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
 
export default Footer;