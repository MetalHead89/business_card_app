import React from 'react';
import { ISlider } from '../../ts/interfaces';
import SVGIcon from '../SVGIcon/SVGIcon';
import Slide from './slide/slide';
import './slider.scss';

const Slider = (props: ISlider): JSX.Element => {
  const slides = props.slider.slides.map((slide) => {
    <Slide {...slide} />;
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

  //

  // function clickToNextSlideBtn() {
  //   const container = slideRef.current;
  //   if (container !== null) {
  //     container.classList.add('slider__slide_exit-to-left');
  //   }

  //   props.clickToNextSlideBtn(props.slide.id);
  // }

  // function clickToPrevSlideBtn() {
  //   const container = slideRef.current;
  //   if (container !== null) {
  //     container.classList.add('slider__slide_exit-to-right');
  //   }

  //   props.clickToPrevSlideBtn(props.slide.id);
  // }

  // return (
  //   <div className="slider">
  //     <Slide />
  // <button
  //   className="slider__button slider__button_left-pos"
  //   onClick={() => clickToPrevSlideBtn()}
  // >
  //   <SVGIcon icon="left-arrow-ico" class="slider__button-icon" />
  // </button>
  // <button
  //   className="slider__button slider__button_right-pos"
  //   onClick={() => clickToNextSlideBtn()}
  // >
  //   <SVGIcon icon="next-arrow-ico" class="slider__button-icon" />
  // </button>
  //   </div>
  // );
};

export default Slider;
