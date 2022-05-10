import { useAppSelector } from '../../redux/hooks';
import InfoItem from '../InfoItem/InfoItem';
import SVGTriangle from '../SVGTriangle/SVGTriangle';
import './AboutMeScreen.scss';

function AboutMeScreen() {
  const { infoItems } = useAppSelector((state) => state.aboutMeScreenReducer);

  const info = infoItems.map((info) => (
    <div key={info.name} className="about-me-screen__info-item">
      <InfoItem name={info.name} text={info.text} />
    </div>
  ));

  return (
    <div className="about-me-screen">
      <div className="about-me-screen__content">
        <h2 className="about-me-screen__title">
          Обо <span className="about-me-screen__accent">мне</span>
        </h2>
        <div className="about-me-screen__info-container">
          <div className="about-me-screen__text">
            Привет! Меня зовут{' '}
            <span className="about-me-screen__accent">Виталий</span>. Я
            начинающий{' '}
            <span className="about-me-screen__accent">
              frontend-разработчик
            </span>{' '}
            из небольшого Сибирского городка. Здесь ты можешь ознакомиться с
            моими работами, узнать об уровне моих скиллов и если возникнет
            необходимость - связаться со мной.
          </div>
          <div className="about-me-screen__info">{info}</div>
        </div>
      </div>
      <div className="about-me-screen__triangle">
        <SVGTriangle color="gray" />
      </div>
    </div>
  );
}

export default AboutMeScreen;
