import React from 'react';
import AboutScreen from './about-screen/about-screen';
import Header from './header/header';
import FeedbackScreen from './feedback-screen/feedback-screen';
import SkillsScreenContainer from './skills-screen/skills-screen-container';
import ServicesScreenContainer from './services-screen/services-screen-container';

const App = (): JSX.Element => {
  return (
    <div className="app-body">
      <Header />
      <AboutScreen />
      <SkillsScreenContainer />
      <ServicesScreenContainer />
      <FeedbackScreen />
    </div>
  );
};

export default App;
