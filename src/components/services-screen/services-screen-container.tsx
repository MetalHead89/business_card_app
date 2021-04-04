import { connect } from 'react-redux';

import { IState } from '../../ts/interfaces';
import ServicesScreen from './services-screen';

const mapStateToProps = (state: IState) => {
  return {
    services: state.servicesScreen.services,
  };
};

const ServicesScreenContainer = connect(mapStateToProps)(ServicesScreen);

export default ServicesScreenContainer;
