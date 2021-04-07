import React from 'react';
import { IFeedbackScreenState } from '../../ts/interfaces';
import FeedbackForm from './feedback-form/feedback-form';
import './feedback-screen.scss';

const FeedbackScreen = (props: IFeedbackScreenState): JSX.Element => {
  return (
    <div id="feedback" className="feedback-screen">
      <div className="feedback-screen__content">
        <FeedbackForm elements={props.feedbackForm.elements} />
      </div>
    </div>
  );
};

export default FeedbackScreen;
