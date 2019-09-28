import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import ArrowDonwImg from './../arrow-down.svg'

class Slider extends Component {
    render() { 
        return (
            <div>
                <div className="slider-riangle-up"></div>
                <div className="slider-riangle-up-two"></div>
                <div className="slider-three"></div>
                <Container>
                    <div className="hero-section">
                        <div className="hero-content">
                            <span className="hero-intro-greeting">Hello, I am</span>
                            <h1>Mushfiqur Rahman niloy</h1>
                            <h4>Senior Front End Developer <span>At Zenix Technology</span></h4>
                            <a className="hireBtn" href="#">hire Me</a>
                            <a className="resumeBtn" href="#">Resume</a>
                        </div>
                    </div>
                </Container>

                <div className="next-section-link solitude-bg text-center">
                    <span className="scroll-to-target">
                        <img src={ArrowDonwImg} alt="" />
                    </span>
                </div>
            </div>
        );
    }
}
 
export default Slider;