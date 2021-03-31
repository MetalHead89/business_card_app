import React from 'react';
import StoreContext from '../../ts/redux/store-context';
import SkillsScreen from './skills-screen';
import './skills-screen.scss';

const SkillsScreenContainer = (): JSX.Element => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().skillsScreen;

        return <SkillsScreen skills={state.skills} />;
      }}
    </StoreContext.Consumer>
  );
};

export default SkillsScreenContainer;
