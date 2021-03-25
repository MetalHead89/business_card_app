import React from 'react';
import { IAboutScreen } from '../../ts/interfaces';
import AboutBlock from './about-block/about-block';
import './about-screen.scss';

const AboutScreen = (props: IAboutScreen): JSX.Element => {
  return (
    <div id="about" className="about-screen">
      <AboutBlock
        text={props.aboutBlock.text}
        photoLink={props.aboutBlock.photoLink}
      />
    </div>
  );
};

export default AboutScreen;
