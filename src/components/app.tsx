import React from 'react';
import AboutScreen from './about-screen/about-screen';
import ServicesScreen from './services-screen/services-screen';
import Header from './header/header';
import ContactsScreen from './contacts-screen/contacts-screen';
import { IStore } from '../ts/interfaces';
import SkillsScreenContainer from './skills-screen/skills-screen-container';

const App = (props: IStore): JSX.Element => {
  return (
    <div className="app-body">
      <Header store={props.store} />
      <AboutScreen store={props.store} />
      <SkillsScreenContainer store={props.store} />
      <ServicesScreen />
      <ContactsScreen />
    </div>
  );
};

export default App;
