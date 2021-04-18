import React from 'react';
import { ISlider } from '../../ts/interfaces';
import SVGIcon from '../SVGIcon/SVGIcon';
import Slide from './slide/slide';
import './slider.scss';

/* Если в слайдере 3 или менее слайдов, то он работает некорректно. Пока не понял, как исправить этот баг */

const Slider = (props: ISlider): JSX.Element => {
  const slidesProps = props.slider.slides;
  const activeSlide = slidesProps.findIndex((item) => item.active === true);
  const prevSlide = activeSlide > 0 ? activeSlide - 1 : slidesProps.length - 1;
  const nextSlide =
    activeSlide === slidesProps.length - 1 ? 0 : activeSlide + 1;

  const slides = [
    <Slide key={prevSlide} {...slidesProps[prevSlide]} class="slide_prev" />,
    <Slide
      key={activeSlide}
      {...slidesProps[activeSlide]}
      class="slide_active"
    />,
    <Slide key={nextSlide} {...slidesProps[nextSlide]} class="slide_next" />,
  ];

  return (
    <div className="slider">
      {slides}

      <button
        className="slider__button slider__button_left-pos"
        onClick={() => props.clickToPrevSlideBtn()}
      >
        <SVGIcon icon="left-arrow-ico" class="slider__button-icon" />
      </button>

      <button
        className="slider__button slider__button_right-pos"
        onClick={() => props.clickToNextSlideBtn()}
      >
        <SVGIcon icon="next-arrow-ico" class="slider__button-icon" />
      </button>
    </div>
  );
};

export default Slider;
