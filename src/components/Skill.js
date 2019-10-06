import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

class Skill extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className="skillWrapper">
                                <div className="skillWrapper__title">
                                    <h3><FontAwesomeIcon icon={['fas', 'angle-double-right']} /> Skill of Front-End</h3>
                                </div>
                                <div className="skillWrapper__skillList">
                                    <span className="skillWrapper__skillList--item">HTML</span>
                                    <span className="skillWrapper__skillList--item">css</span>
                                    <span className="skillWrapper__skillList--item">css3</span>
                                    <span className="skillWrapper__skillList--item">sass</span>
                                    <span className="skillWrapper__skillList--item">Javascript</span>
                                    <span className="skillWrapper__skillList--item">jquery</span>
                                    <span className="skillWrapper__skillList--item">Reactjs</span>
                                    <span className="skillWrapper__skillList--item">vuejs</span>
                                    <span className="skillWrapper__skillList--item">NextJs</span>
                                    <span className="skillWrapper__skillList--item">NuxtJS</span>
                                    <span className="skillWrapper__skillList--item">GatsByJS</span>
                                    <span className="skillWrapper__skillList--item">Gulp</span>
                                </div>
                            </div>

                            <div className="skillWrapper">
                                <div className="skillWrapper__title">
                                    <h3><FontAwesomeIcon icon={['fas', 'angle-double-right']} /> Skill of Back-End</h3>
                                </div>
                                <div className="skillWrapper__skillList">
                                    <span className="skillWrapper__skillList--item">WordPress Theme Customization</span>
                                    <span className="skillWrapper__skillList--item">NodeJS</span>
                                </div>
                            </div>

                            <div className="skillWrapper">
                                <div className="skillWrapper__title">
                                    <h3><FontAwesomeIcon icon={['fas', 'angle-double-right']} /> Skill of Design</h3>
                                </div>
                                <div className="skillWrapper__skillList">
                                    <span className="skillWrapper__skillList--item">Adobe Photoshop</span>
                                    <span className="skillWrapper__skillList--item">Adobe illustration</span>
                                    <span className="skillWrapper__skillList--item">Figma</span>
                                </div>
                            </div>

                            <div className="skillWrapper">
                                <div className="skillWrapper__title">
                                    <h3><FontAwesomeIcon icon={['fas', 'angle-double-right']} /> Skill of OS (Operating System )</h3>
                                </div>
                                <div className="skillWrapper__skillList">
                                    <span className="skillWrapper__skillList--item">Linux (Arch Linux & Ubuntu)</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
 
export default Skill;