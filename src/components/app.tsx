import React from 'react';
import AboutScreen from './about-screen/about-screen';
import Header from './header/header';
import SkillsScreenContainer from './skills-screen/skills-screen-container';
import ServicesScreenContainer from './services-screen/services-screen-container';
import FeedbackScreenContainer from './feedback-screen/feedback-screen-container';
import PortfolioScreenContainer from './portfolio-screen/portfolio-screen-container';

const App = (): JSX.Element => {
  return (
    <div className="app-body">
      <Header />
      <AboutScreen />
      <SkillsScreenContainer />
      <PortfolioScreenContainer />
      <ServicesScreenContainer />
      <FeedbackScreenContainer />
    </div>
  );
};

export default App;
