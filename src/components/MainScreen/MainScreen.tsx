import './MainScreen.scss';
import { ReactComponent as Image } from '../../images/main-screen-image.svg';

function MainScreen() {
  return (
    <div className="main-screen">
      <div className="main-screen__content">
        <div className="main-screen__section">
          <h1 className="main-screen__title">
            ПОРТФОЛИО
            <br /> Frontend-разработчика
          </h1>
        </div>
        <div className="main-screen__section">
          <div className="main-screen__image-container">
            <Image />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
