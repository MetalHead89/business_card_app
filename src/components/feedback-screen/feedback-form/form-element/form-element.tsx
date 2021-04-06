import React from 'react';
import { IFormElement } from '../../../../ts/interfaces';

const FormElement = (props: IFormElement): JSX.Element => {
  switch (props.type) {
    case 'textarea':
      return (
        <label>
          {props.label}
          <textarea className="text-field" />
        </label>
      );
    case 'submit':
      return (
        <button className="submit" type={props.type}>
          {props.text}
        </button>
      );
    default:
      return (
        <label>
          {props.label}
          <input className="text-field" type={props.type} />
        </label>
      );
  }
};

export default FormElement;
