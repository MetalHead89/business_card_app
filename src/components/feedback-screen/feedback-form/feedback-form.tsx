import React from 'react';
import { IFeedbackForm } from '../../../ts/interfaces';
import FormElement from './form-element/form-element';
import './feedback-form.scss';

const FeedbackForm = (props: IFeedbackForm): JSX.Element => {
  const elements = props.elements.map((element) => {
    return <FormElement {...element} />;
  });

  return <form className="feedback-form">{elements}</form>;
};

export default FeedbackForm;
