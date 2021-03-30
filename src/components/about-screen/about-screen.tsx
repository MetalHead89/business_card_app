import React from 'react';
import { IStore } from '../../ts/interfaces';
import AboutBlockContainer from './about-block/about-block-container';
import './about-screen.scss';

const AboutScreen = (props: IStore): JSX.Element => {
  return (
    <div id="about" className="about-screen">
      <AboutBlockContainer store={props.store} />
    </div>
  );
};

export default AboutScreen;
