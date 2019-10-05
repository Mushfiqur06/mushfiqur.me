import React, { Component } from 'react';
import './App.scss';

// FontAwesome

import Header from './components/Header';
import Slider from './components/Slider';
import AboutMe from './components/About'
import JobExperience from './components/JobExperience';
import Portfolio from './components/Portfolio';
import PageSectionTitle from './components/PageSectionTitle';
import Education from './components/Education'

class App extends Component {
  state = {
    jobExperienceSection: {
      title: 'Job Experience',
      info: 'I have 4 years job experience as a professional Front-End Developer'
    },
    portfolioSectionTitle: {
      title: 'My Portfolio',
      info: 'Here is my Portfolio List. If you show all Portfolio then Just click More Portfolio Button'
    },
    educationSectionTitle: {
      title: 'Education',
      info: 'If you are looking for a dope free barber shop website template,'
    }
  }
  render (){
    return (
      <div className="App" id="home">

        <header className="header">
          <Header />
        </header>

        <section className="slider-section">
          <Slider />
        </section>

        <section id="aboutMeSection" className="about-me-section">
          <AboutMe />
        </section>

        <section className="jobExperienceSection" id="jobExperienceSection">
          <PageSectionTitle title={this.state.jobExperienceSection.title} info={this.state.jobExperienceSection.info} />
          <JobExperience />
        </section>

        <section className="portfolioSection" id="portfolioSection">
          <PageSectionTitle title={this.state.portfolioSectionTitle.title} info={this.state.portfolioSectionTitle.info} />
          <Portfolio />
        </section>

        <section className="educationSection" id="educationSection">
          <PageSectionTitle title={this.state.educationSectionTitle.title} info={this.state.educationSectionTitle.info} />

          <Education />
        </section>

      </div>
    );
  }
}

export default App;
