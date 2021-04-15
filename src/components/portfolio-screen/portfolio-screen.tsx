import React from 'react';
import { ISlider } from '../../ts/interfaces';
import Slider from '../slider/slider';
import './portfolio-screen.scss';

const portfolioScreen = (props: ISlider): JSX.Element => {
  return (
    <div id="portfolio" className="portfolio-screen">
      <Slider
        slider={props.slider}
        clickToPrevSlideBtn={props.clickToPrevSlideBtn}
        clickToNextSlideBtn={props.clickToNextSlideBtn}
      />
    </div>
  );
};

export default portfolioScreen;
