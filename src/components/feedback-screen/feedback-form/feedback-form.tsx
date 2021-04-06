import React from 'react';
import { IFeedbackForm } from '../../../ts/interfaces';
import FormElement from './form-element/form-element';

const FeedbackForm = (props: IFeedbackForm): JSX.Element => {
  const elements = props.elements.map((element) => {
    return <FormElement {...element}></FormElement>;
  });

  return <form>{elements}</form>;
};

export default FeedbackForm;
