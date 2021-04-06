import React from 'react';
import { IFormElement } from '../../../../ts/interfaces';
import './form-element.scss';

const FormElement = (props: IFormElement): JSX.Element => {
  switch (props.type) {
    case 'textarea':
      return (
        <div className="feedback-form__box-input">
          <textarea className="feedback-form__text-field" required />
          <label className="feedback-form__label">{props.label}</label>
        </div>
      );
    case 'submit':
      return (
        <button className="submit" type={props.type}>
          {props.text}
        </button>
      );
    default:
      return (
        <div className="feedback-form__box-input">
          <input
            className="feedback-form__text-field"
            type={props.type}
            required
          />
          <label className="feedback-form__label">{props.label}</label>
        </div>
      );
  }
};

export default FormElement;
