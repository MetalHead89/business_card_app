import { connect } from 'react-redux';
import { IState } from '../../ts/interfaces';
import portfolioScreen from './portfolio-screen';

const mapStateToProps = (state: IState) => {
  return {
    slider: state.portfolioScreen.slider,
  };
};

const PortfolioScreenContainer = connect(mapStateToProps)(portfolioScreen);

export default PortfolioScreenContainer;
