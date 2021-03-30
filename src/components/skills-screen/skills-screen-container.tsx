import React from 'react';
import { IStore } from '../../ts/interfaces';
import SkillsScreen from './skills-screen';
import './skills-screen.scss';

const SkillsScreenContainer = (props: IStore): JSX.Element => {
  const state = props.store.getState().skillsScreen;

  return <SkillsScreen skills={state.skills} />;
};

export default SkillsScreenContainer;
