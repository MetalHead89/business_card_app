import { connect } from 'react-redux';
import { IState } from '../../ts/interfaces';
import SkillsScreen from './skills-screen';
import './skills-screen.scss';

const mapStateToProps = (state: IState) => {
  return {
    skills: state.skillsScreen.skills,
  };
};

const SkillsScreenContainer = connect(mapStateToProps)(SkillsScreen);

export default SkillsScreenContainer;
