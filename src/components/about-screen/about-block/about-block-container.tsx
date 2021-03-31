import { connect } from 'react-redux';
import { IState } from '../../../ts/interfaces';
import AboutBlock from './about-block';
import './about-block.scss';

const mapStateToProps = (state: IState) => {
  return {
    text: state.aboutScreen.aboutBlock.text,
    photoLink: state.aboutScreen.aboutBlock.photoLink,
  };
};

const AboutBlockContainer = connect(mapStateToProps)(AboutBlock);

export default AboutBlockContainer;
