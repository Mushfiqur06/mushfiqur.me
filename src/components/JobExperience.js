import React, { Component } from 'react';
import PageSectionTitle from './PageSectionTitle';
import {Container, Row, Col, Image} from 'react-bootstrap';
import TrendThemeLogo from './../trendytheme.png';
import ThemeOnLabLogo from './../themeonlab.jpg';
import ZenixNowLogo from './../zenixnow.png'

class JobExperience extends Component {

    state = {
        jobExperienceData: [
            {
                companyName: ZenixNowLogo,
                position: 'Senior Front-End Developer',
                joinDate: 'February 2016',
                leaveDate: 'March 2017',
                info: 'Zenix Technologies is a freelancing based company. I am a team leader of Front-End team. We have an awesome Back-End team. So we works together.',
                technology: ['HTML', 'CSS', 'CSS3', 'Javascript', 'Gulp', 'ReactJS', 'VueJS', 'NuxtJS', 'GatsByJS', 'GraphQL' ]
            },
            {
                companyName: ThemeOnLabLogo,
                position: 'Front-End Developer',
                joinDate: 'April 2017',
                leaveDate: 'December 2018',
                info: 'They make WP & HTML theme for client and Themeforest. So i was a Front-End Developer.',
                technology: ['HTML', 'CSS', 'CSS3', 'SASS', 'Javascript', 'Jquery', 'PSD to HTML', 'WordPress Theme Customize']
            },
            {
                companyName: TrendThemeLogo,
                position: 'Front-End Developer',
                joinDate: 'February 2016',
                leaveDate: 'March 2017',
                info: 'They make premium WP and HTML theme for Themeforest and they have their own market place to sell their product here.',
                technology: ['HTML', 'CSS', 'CSS3', 'Javascript', 'Jquery', 'PSD to HTML']
            },
            
            
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
                                <Col md={6} key={index}>
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
                                        <div className="jobExperienceWrapper__techList">
                                            <p><b>Technology:</b> {data.technology.map((tech, index) => {
                                                return <span key={index}>{tech},</span>
                                            })}</p>
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