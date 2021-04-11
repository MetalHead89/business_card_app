import React from 'react';
import { ISlider } from '../../ts/interfaces';
import SVGIcon from '../SVGIcon/SVGIcon';
import './slider.scss';

const Slider = (props: ISlider): JSX.Element => {
  return (
    <div className="slider">
      <div className="slider__image-section">
        <img
          className="slider__image"
          src={props.slide.imageSection.image}
          alt="slide"
        />
      </div>
      <div className="slider__text-section">
        <h2>{props.slide.textSection.title}</h2>
        <p>{props.slide.textSection.description}</p>
      </div>
      <button
        className="slider__button slider__button_left-pos"
        onClick={() => props.clickToPrevSlideBtn(props.slide.id)}
      >
        <SVGIcon icon="left-arrow-ico" class="slider__button-icon" />
      </button>
      <button
        className="slider__button slider__button_right-pos"
        onClick={() => props.clickToNextSlideBtn(props.slide.id)}
      >
        <SVGIcon icon="next-arrow-ico" class="slider__button-icon" />
      </button>
    </div>
  );
};

export default Slider;
