import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ISlider } from '../../ts/interfaces';
import SVGIcon from '../SVGIcon/SVGIcon';
import './slider.scss';

const Slider = (props: ISlider): JSX.Element => {
  const slideRef: React.RefObject<HTMLDivElement> = React.createRef();

  function clickToNextSlideBtn() {
    const container = slideRef.current;
    if (container !== null) {
      container.classList.add('slider__slide_exit-to-left');
    }

    props.clickToNextSlideBtn(props.slide.id);
  }

  function clickToPrevSlideBtn() {
    const container = slideRef.current;
    if (container !== null) {
      container.classList.add('slider__slide_exit-to-right');
    }

    props.clickToPrevSlideBtn(props.slide.id);
  }

  return (
    <div className="slider">
      <div ref={slideRef} className="slider__slide">
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
      </div>
      <button
        className="slider__button slider__button_left-pos"
        onClick={() => clickToPrevSlideBtn()}
      >
        <SVGIcon icon="left-arrow-ico" class="slider__button-icon" />
      </button>
      <button
        className="slider__button slider__button_right-pos"
        onClick={() => clickToNextSlideBtn()}
      >
        <SVGIcon icon="next-arrow-ico" class="slider__button-icon" />
      </button>
    </div>
  );
};

export default Slider;
