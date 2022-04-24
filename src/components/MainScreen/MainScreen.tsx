import SVGTriangle from '../SVGTriangle/SVGTriangle';
import './MainScreen.scss';

function MainScreen() {
  return (
    <div className="main-screen">
      <div className="main-screen__content"></div>
      <div className="main-screen__bottom-triangle">
        <SVGTriangle fill="ffffff" />
      </div>
    </div>
  );
}

export default MainScreen;
