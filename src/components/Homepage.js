import React from 'react';

import Header from './Header';
import Section from './Section';
import TimelineSection from './TimelineSection';
import Projects from './Projects';
import Contact from './Contact';

const HomePage = () => (
  <div className="container-fluid">
    <Header />
    <Section>
      <TimelineSection />
    </Section>
    <Section>
      <h1 className="title is-size-4">Projects</h1>
      <Projects />
    </Section>
    <Contact />
  </div>
);

export default HomePage;
