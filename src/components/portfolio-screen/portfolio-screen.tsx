import React from 'react';
import { IPortfolioScreenState } from '../../ts/interfaces';
import SVGIcon from '../SVGIcon/SVGIcon';
import './portfolio-screen.scss';

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
        <button className="portfolio-slider__button prev-slide-btn">
          <SVGIcon
            icon="left-arrow-ico"
            class="portfolio-slider__button-icon"
          />
        </button>
        <button className="portfolio-slider__button next-slide-btn">
          <SVGIcon
            icon="next-arrow-ico"
            class="portfolio-slider__button-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default portfolioScreen;
