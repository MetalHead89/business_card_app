import React from 'react';
import AboutBlock from './about-block/about-block';
import './about-screen.scss';

interface IProps {
  text: string[];
  photoLink: string;
}

const AboutScreen = (props: IProps): JSX.Element => {
  return (
    <div id="about" className="about-screen">
      <AboutBlock text={props.text} photoLink={props.photoLink} />
    </div>
  );
};

export default AboutScreen;
