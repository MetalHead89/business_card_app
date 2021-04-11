import React from 'react';
import { ISlide } from '../../ts/interfaces';
import SVGIcon from '../SVGIcon/SVGIcon';
import './slider.scss';

const Slider = (props: ISlide): JSX.Element => {
  return (
    <div className="slider">
      <div className="slider__image-section">
        <img
          className="slider__image"
          src={props.imageSection.image}
          alt="slide"
        />
      </div>
      <div className="slider__text-section">
        <h2>{props.textSection.title}</h2>
        <p>{props.textSection.description}</p>
      </div>
      <button className="slider__button slider__button_left-pos">
        <SVGIcon icon="left-arrow-ico" class="slider__button-icon" />
      </button>
      <button className="slider__button slider__button_right-pos">
        <SVGIcon icon="next-arrow-ico" class="slider__button-icon" />
      </button>
    </div>
  );
};

export default Slider;
