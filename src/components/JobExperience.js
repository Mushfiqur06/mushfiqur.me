import React, { Component } from 'react';
import PageSectionTitle from './PageSectionTitle';
import {Container, Row, Col, Image} from 'react-bootstrap';
import TrendThemeLogo from './../trendytheme.png'

class JobExperience extends Component {

    state = {
        jobExperienceData: [
            {
                companyName: TrendThemeLogo,
                position: 'Front-End Developer',
                joinDate: 'February 2016',
                leaveDate: 'March 2017',
                info: 'They make <i>premium WP and HTML theme</i> for <b>Themeforest</b> and they have their <b>own market</b> place to sell their product here.'
            },
            {
                companyName: TrendThemeLogo,
                position: 'Front-End Developer',
                joinDate: 'February 2016',
                leaveDate: 'March 2017',
                info: 'They make <i>premium WP and HTML theme</i> for <b>Themeforest</b> and they have their <b>own market</b> place to sell their product here.'
            },
            {
                companyName: TrendThemeLogo,
                position: 'Front-End Developer',
                joinDate: 'February 2016',
                leaveDate: 'March 2017',
                info: 'They make <i>premium WP and HTML theme</i> for <b>Themeforest</b> and they have their <b>own market</b> place to sell their product here.'
            }
        ]
    }

    render() { 
        return (
            <div>
                <PageSectionTitle />

                <Container>
                    <Row>
                        {this.state.jobExperienceData.map((data, index) => {
                            return(
                                <Col md={6}>
                                    <div className="jobExperienceWrapper">
                                        <div className="jobExperienceWrapper__header">
                                            <div className="jobExperienceWrapper__header--companyLogo">
                                                <Image src={data.companyName} alt="Trendytheme"/>
                                            </div>
                                            <div className="jobExperienceWrapper__header--stayDate">
                                                <p>Position: <b>{data.position}</b></p>
                                                <p><b>February 2016</b> to <b>{data.leaveDate}</b></p>
                                            </div>
                                        </div>
                                        <div className="jobExperienceWrapper__info">
                                            <p>{data.info}</p>
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
 
export default JobExperience;