import './App.scss';
import AboutMeScreen from '../AboutMeScreen/AboutMeScreen';
import MainScreen from '../MainScreen/MainScreen';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  return (
    <ReactFullpage
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={2000}

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <MainScreen />
            </div>

            <div className="section">
              <AboutMeScreen />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
