import React from 'react';
import AboutBlockContainer from './about-block/about-block-container';
import './about-screen.scss';

const AboutScreen = (): JSX.Element => {
  return (
    <div id="about" className="about-screen">
      <AboutBlockContainer />
    </div>
  );
};

export default AboutScreen;
