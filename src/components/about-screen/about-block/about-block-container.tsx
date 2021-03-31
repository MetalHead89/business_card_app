import React from 'react';
import StoreContext from '../../../ts/redux/store-context';
import AboutBlock from './about-block';
import './about-block.scss';

const AboutBlockContainer = (): JSX.Element => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().aboutScreen;

        return (
          <AboutBlock
            text={state.aboutBlock.text}
            photoLink={state.aboutBlock.photoLink}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default AboutBlockContainer;
