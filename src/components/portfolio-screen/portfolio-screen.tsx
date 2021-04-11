import React from 'react';
import { IPortfolioScreen } from '../../ts/interfaces';
import Slider from '../slider/slider';
import './portfolio-screen.scss';

const portfolioScreen = (props: IPortfolioScreen): JSX.Element => {
  const currentSlide = props.slider.slides.filter((slide) => slide.active);

  return (
    <div id="portfolio" className="portfolio-screen">
      <Slider
        slide={currentSlide[0]}
        clickToPrevSlideBtn={props.clickToPrevSlideBtn}
        clickToNextSlideBtn={props.clickToNextSlideBtn}
      />
    </div>
  );
};

export default portfolioScreen;
