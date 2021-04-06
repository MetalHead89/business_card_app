import React from 'react';
import { IFeedbackScreenState } from '../../ts/interfaces';
import FeedbackForm from './feedback-form/feedback-form';
import './feedback-screen.scss';

const FeedbackScreen = (props: IFeedbackScreenState): JSX.Element => {
  return (
    <div id="contacts" className="feedback-screen">
      <FeedbackForm {...props.feedbackForm}></FeedbackForm>
    </div>
  );
};

export default FeedbackScreen;
