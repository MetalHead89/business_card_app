import { connect } from 'react-redux';
import { IState } from '../../ts/interfaces';
import FeedbackScreen from './feedback-screen';

const mapStateToProps = (state: IState) => {
  return {
    ...state.feedbackScreen,
  };
};

const FeedbackScreenContainer = connect(mapStateToProps)(FeedbackScreen);

export default FeedbackScreenContainer;
