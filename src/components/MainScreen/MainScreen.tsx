import './MainScreen.scss';
import { ReactComponent as Image } from '../../images/main-screen-image.svg';

function MainScreen() {
  return (
    <div className="main-screen">
      <div className="main-screen__content">
        <div className="main-screen__title-section">
          <h1 className="main-screen__title">
            <span className="main-screen__title_color_dark">Портфолио</span>
            <br /> frontend_разработчика
          </h1>
        </div>

        <div className="main-screen__image-section">
          <div className="main-screen__image-container">
            <Image />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
