import React, { Component } from 'react';
import './App.scss';

// FontAwesome

import Header from './components/Header';
import Slider from './components/Slider';
import AboutMe from './components/About'
import JobExperience from './components/JobExperience';
import Portfolio from './components/Portfolio';
import PageSectionTitle from './components/PageSectionTitle'

class App extends Component {
  state = {
    jobExperienceSection: {
      title: 'Job Experience',
      info: 'I have 4 years job experience as a professional Front-End Developer'
    },
    portfolioSectionTitle: {
      title: 'Portfolio',
      info: 'Here is my some Portfolio. If you show all Portfolio then you can click More Portfolio Button'
    }
  }
  render (){
    return (
      <div className="App">

        <header className="header">
          <Header />
        </header>

        <section className="slider-section">
          <Slider />
        </section>

        <section className="about-me-section">
          <AboutMe />
        </section>

        <section className="jobExperienceSection">
          <PageSectionTitle title={this.state.jobExperienceSection.title} info={this.state.jobExperienceSection.info} />
          <JobExperience />
        </section>

        <section className="portfolioSection">
          <PageSectionTitle title={this.state.portfolioSectionTitle.title} info={this.state.portfolioSectionTitle.info} />
          <Portfolio />
        </section>

      </div>
    );
  }
}

export default App;
