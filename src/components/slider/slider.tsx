import React from 'react';
import { ISlider } from '../../ts/interfaces';
import SVGIcon from '../SVGIcon/SVGIcon';
import Slide from './slide/slide';
import './slider.scss';

const Slider = (props: ISlider): JSX.Element => {
  const slides = props.slider.slides.map((slide) => {
    return <Slide key={slide.id} {...slide} />;
  });
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
