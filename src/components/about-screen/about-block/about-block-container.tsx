import React from 'react';
import { IStore } from '../../../ts/interfaces';
import AboutBlock from './about-block';
import './about-block.scss';

const AboutBlockContainer = (props: IStore): JSX.Element => {
  const state = props.store.getState().aboutScreen;

  return (
    <AboutBlock
      text={state.aboutBlock.text}
      photoLink={state.aboutBlock.photoLink}
    />
  );
};

export default AboutBlockContainer;
