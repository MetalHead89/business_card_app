import React from 'react';
import AboutBlock from './aboutBlock/aboutBlock';
import './aboutScreen.scss';

interface IProps {
  text: string[];
  photoLink: string;
}

const AboutScreen = (props: IProps): JSX.Element => {
  return (
    <div id="about" className="aboutScreen">
      <AboutBlock text={props.text} photoLink={props.photoLink} />
    </div>
  );
};

export default AboutScreen;
