import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import SkillTiles from '../components/sections/SkillTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <SkillTiles />
      <FeaturesSplit invertMobile imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;