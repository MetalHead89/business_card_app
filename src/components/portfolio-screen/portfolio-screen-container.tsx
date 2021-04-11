import { connect } from 'react-redux';
import { IDispatch, IState } from '../../ts/interfaces';
import {
  clickToNextSlideBtnActionCreator,
  clickToPrevSlideBtnActionCreator,
} from '../../ts/redux/portfolio-screen-reducer';
import portfolioScreen from './portfolio-screen';

const mapStateToProps = (state: IState) => {
  return {
    slider: state.portfolioScreen.slider,
  };
};

const mapDispatchToProps = (dispatch: IDispatch) => {
  return {
    clickToPrevSlideBtn: (id: number): void => {
      dispatch(clickToPrevSlideBtnActionCreator(id));
    },
    clickToNextSlideBtn: (id: number): void => {
      dispatch(clickToNextSlideBtnActionCreator(id));
    },
  };
};

const PortfolioScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(portfolioScreen);

export default PortfolioScreenContainer;
