import React from 'react';
import AboutScreen from './about-screen/about-screen';
import ServicesScreen from './services-screen/services-screen';
import Header from './header/header';
import ContactsScreen from './contacts-screen/contacts-screen';
import SkillsScreenContainer from './skills-screen/skills-screen-container';

const App = (): JSX.Element => {
  return (
    <div className="app-body">
      <Header />
      <AboutScreen />
      <SkillsScreenContainer />
      <ServicesScreen />
      <ContactsScreen />
    </div>
  );
};

export default App;
