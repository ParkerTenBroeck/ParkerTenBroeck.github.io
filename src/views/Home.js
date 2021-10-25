import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import SkillTiles from '../components/sections/SkillTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import ProjectTiles from '../components/sections/ProjectTiles';
import Contact from '../components/sections/Contact';

const Home = () => {

  return (
    <>
      <Hero id="about" className="illustration-section-01" />
      <SkillTiles id="skills" />
      <FeaturesSplit id="projects" invertMobile imageFill className="illustration-section-02" />
      <ProjectTiles topDivider />
      <Contact id="contact" split />
    </>
  );
}

export default Home;