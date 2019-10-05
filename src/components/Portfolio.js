import React, { Component } from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
// PortfolioImage
import PortfolioImageOne from './../probiz.jpg'

class Portfolio extends Component {
    state = {
        portfolio: [
            {
                img: PortfolioImageOne,
                title: 'Probiz - responsive business html template'
            },
            {
                img: PortfolioImageOne,
                title: 'Probiz - responsive business html template'
            },
            {
                img: PortfolioImageOne,
                title: 'Probiz - responsive business html template'
            },
            {
                img: PortfolioImageOne,
                title: 'Probiz - responsive business html template'
            },
            {
                img: PortfolioImageOne,
                title: 'Probiz - responsive business html template'
            },
            {
                img: PortfolioImageOne,
                title: 'Probiz - responsive business html template'
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
                                <Col lg={4} md={6} key={index}>
                                    <div className="portfolioWrapper">
                                        <div className="portfolioWrapper__img">
                                            <Image src={portfolio.img} />
                                        </div>
                                        <div className="portfolioWrapper__body text-center">
                                            <div className="portfolioWrapper__body--info">
                                                <h3>{portfolio.title}</h3>
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
                    </Row>
                </Container>
            </div>
        );
    }
}
 
export default Portfolio;