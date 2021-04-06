import React from 'react';
import { IFormElement } from '../../../ts/interfaces';
import FormElement from './form-element/form-element';

const FeedbackForm = (props: IFormElement[]): JSX.Element => {
  const elements = props.map((element) => {
    return (
      <FormElement
        id={element.id}
        type={element.type}
        label={element.label}
        required={element.required}
        text={element.text}
      ></FormElement>
    );
  });

  return <form>{elements}</form>;
};

export default FeedbackForm;
