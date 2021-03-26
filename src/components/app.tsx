import React from 'react';
import AboutScreen from './about-screen/about-screen';
import SkillsScreen from './skills-screen/skills-screen';
import ServicesScreen from './services-screen/services-screen';
import Header from './header/header';
import ContactsScreen from './contacts-screen/contacts-screen';
import { IApp } from '../ts/interfaces';

const App = (props: IApp): JSX.Element => {
  return (
    <div className="app-body">
      <Header
        topMenu={{
          menuItems: props.state.header.topMenu.menuItems,
          dispatch: props.dispatch,
        }}
      />
      <AboutScreen
        aboutBlock={{
          text: props.state.aboutScreen.aboutBlock.text,
          photoLink: props.state.aboutScreen.aboutBlock.photoLink,
        }}
      />
      <SkillsScreen skills={props.state.skillsScreen.skills} />
      <ServicesScreen />
      <ContactsScreen />
    </div>
  );
};

export default App;
