import React from 'react';
import { IFormElement } from '../../../../ts/interfaces';

const FormElement = (props: IFormElement): JSX.Element => {
  let control = <input />;

  if (props.type === 'text' || props.type === 'textarea') {
    control = (
      <label>
        {props.label}
        <input className="text-field" type={props.type} />
      </label>
    );
  } else if (props.type === 'submit') {
    control = (
      <input className="submit" type={props.type}>
        {props.text}
      </input>
    );
  }

  return control;
};

export default FormElement;
