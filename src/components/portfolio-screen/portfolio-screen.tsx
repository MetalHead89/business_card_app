import React from 'react';
import { IPortfolioScreenState } from '../../ts/interfaces';
import Slider from '../slider/slider';
import './portfolio-screen.scss';

const portfolioScreen = (props: IPortfolioScreenState): JSX.Element => {
  const currentSlide = props.slider.slides.filter((slide) => slide.active);

  return (
    <div id="portfolio" className="portfolio-screen">
      <Slider {...currentSlide[0]} />
    </div>
  );
};

export default portfolioScreen;
