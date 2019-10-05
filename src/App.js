import React from 'react';
import './App.scss';

// FontAwesome


import Haders from './components/Header';
import Slider from './components/Slider';
import AboutMe from './components/About'
import JobExperience from './components/JobExperience';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">

      <header className="header">
        <Haders />
      </header>

      <section className="slider-section">
        <Slider />
      </section>

      <section className="about-me-section">
        <AboutMe />
      </section>

      <section className="jobExperienceSection">
        <JobExperience />
      </section>

      <section className="portfolioSection">
        <Portfolio />
      </section>

    </div>
  );
}

export default App;
