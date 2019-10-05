import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
// PortfolioImage
import PortfolioImageTwo from './../Healthnor-thumb.jpg';
import PortfolioImageThree from './../consulex-wp-thumb.jpg'
import PortfolioImageFour from './../evenement-thumb.jpg';
import PortfolioImageFive from './../Max_Rank_Thumb.jpg'

class Portfolio extends Component {
    state = {
        portfolio: [
            {
                img: PortfolioImageFour,
                title: 'Evenement',
                info: 'Create Your Next Conference and Event Websites'
            },
            {
                img: PortfolioImageFive,
                title: 'Max Rank',
                info: 'WordPress SEO And Digital Marketing Theme'
            },
            {
                img: PortfolioImageTwo,
                title: 'Healthnor',
                info: 'WordPress Theme For Doctors, Health, And Clinics'
            },
            {
                img: PortfolioImageThree,
                title: 'Consulex',
                info: 'Finance and Consulting Business WordPress Theme'
            }
        ]
    }
    render() { 
        return (
            <div>
                <Container>
                    <Row>
                        {this.state.portfolio.map((portfolio, index) => {
                            return (
                                <Col lg={6} md={6} key={index}>
                                    <div className="portfolioWrapper">
                                        <div className="portfolioWrapper__img">
                                            <Image src={portfolio.img} />
                                        </div>
                                        <div className="portfolioWrapper__body text-center">
                                            <div className="portfolioWrapper__body--info">
                                                <h3>{portfolio.title}</h3>
                                                <p>{portfolio.info}</p>
                                                <div className="portfolioWrapper__body--info--btns">
                                                    <a>Details</a>
                                                    <a>Demo</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}

                        <button className="morePortfolioBtn">More Portfolio</button>
                    </Row>
                </Container>
            </div>
        );
    }
}
 
export default Portfolio;