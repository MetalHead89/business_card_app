import './MainScreen.scss';
import icon from '../../images/main-screen-icon.png';

function MainScreen() {
  return (
    <div className="main-screen">
      <div className="main-screen__content">
        <div className="main-screen__section">
          <h1>Портфолио Frontend-разработчика</h1>
        </div>
        <div className="main-screen__section">
          <img className="main-screen__icon" src={icon} alt="frontend icon" />
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
