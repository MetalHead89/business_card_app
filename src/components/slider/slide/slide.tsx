import React from 'react';
import { ISlide } from '../../../ts/interfaces';

const Slide = (props: ISlide): JSX.Element => {
  return (
    <div className={`slider__slide slider__slide_${props.status}`}>
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
    </div>
  );
};

export default Slide;
