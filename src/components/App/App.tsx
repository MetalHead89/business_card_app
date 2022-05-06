import './App.scss';
import AboutMeScreen from '../AboutMeScreen/AboutMeScreen';
import MainScreen from '../MainScreen/MainScreen';
import SkillsScreen from '../SkillsScreen/SkillsScreen';

function App() {
  return (
    <div className="app">
      <MainScreen />
      <AboutMeScreen />
      <SkillsScreen />
    </div>
  );
}

export default App;
