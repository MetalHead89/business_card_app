import './App.scss';
import AboutMeScreen from '../AboutMeScreen/AboutMeScreen';
import MainScreen from '../MainScreen/MainScreen';
import SkillsScreen from '../SkillsScreen/SkillsScreen';
import PortfolioScreen from '../PortfolioScreen/PortfolioScreen';
import FeedbackScreen from '../FeedbackScreen/FeedbackScreen';

function App() {
  return (
    <div className="app">
      <MainScreen />
      <AboutMeScreen />
      <SkillsScreen />
      <PortfolioScreen />
      <FeedbackScreen />
    </div>
  );
}

export default App;
