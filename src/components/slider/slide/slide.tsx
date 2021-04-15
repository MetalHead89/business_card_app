import React from 'react';
import { ISlide } from '../../../ts/interfaces';
import './slide.scss';

const Slide = (props: ISlide): JSX.Element => {
  return (
    <div className={`slide slide_${props.status}`}>
      <div className="slide__image-section">
        <img
          className="slide__image"
          src={props.imageSection.image}
          alt="slide"
        />
      </div>
      <div className="slide__text-section">
        <h2>{props.textSection.title}</h2>
        <p>{props.textSection.description}</p>
      </div>
    </div>
  );
};

export default Slide;
