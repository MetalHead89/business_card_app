import { useAppSelector } from '../../redux/hooks';
import './AboutMeScreen.scss';

function AboutMeScreen() {
  const { title, aboutText } = useAppSelector(
    (state) => state.aboutMeScreenReducer
  );

  const text = aboutText.map((paragraph) => <p key={paragraph}>{paragraph}</p>);

  return (
    <div className="about-me-screen">
      <div className="about-me-screen__content">
        <div className="about-me-screen__text">
          <h2>{title}</h2>
          {text}
        </div>
      </div>
    </div>
  );
}

export default AboutMeScreen;
