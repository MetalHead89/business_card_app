import React from 'react';
import { IPortfolioScreenState } from '../../ts/interfaces';

const portfolioScreen = (props: IPortfolioScreenState): JSX.Element => {
  const currentSlide = props.slider.slides.filter((slide) => slide.active);

  return (
    <div id="portfolio" className="portfolio-screen">
      <div className="portfolio-slider">
        <div className="portfolio-slider__image-section">
          <img
            className="portfolio-slider__image"
            src={currentSlide[0].imageSection.image}
            alt="slide"
          />
        </div>
        <div className="portfolio-slider__text-section">
          <h2>{currentSlide[0].textSection.title}</h2>
          <p>{currentSlide[0].textSection.description}</p>
        </div>
      </div>
    </div>
  );
};

export default portfolioScreen;
