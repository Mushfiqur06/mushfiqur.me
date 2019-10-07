import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import {Link, animateScroll as scroll} from 'react-scroll'
import ArrowDonwImg from './../arrow-down.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                            <a className="hireBtn" href="https://github.com/Mushfiqur06"><FontAwesomeIcon icon={['fab', 'github-square']} /> Visit Github</a>
                            <a className="resumeBtn" href="#"><FontAwesomeIcon icon={['far', 'file']} /> Download Resume</a>
                        </div>
                    </div>
                </Container>

                <div className="next-section-link solitude-bg text-center">
                    <Link 
                        to="aboutMeSection"
                        className="scroll-to-target"
                        spy={true}
                        smooth={true}
                		offset={0}
                		duration={500}>
                        <img src={ArrowDonwImg} alt="" />
                    </Link>
                </div>
            </div>
        );
    }
}
 
export default Slider;