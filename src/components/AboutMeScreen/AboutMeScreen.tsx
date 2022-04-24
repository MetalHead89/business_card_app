import SVGTriangle from '../SVGTriangle/SVGTriangle';
import './AboutMeScreen.scss';

function AboutMeScreen() {
  return (
    <div className="about-me-screen">
      <div className="about-me-screen__content"></div>
      <div className="about-me-screen__bottom-triangle">
        <SVGTriangle fill="000000" />
      </div>
    </div>
  );
}

export default AboutMeScreen;
