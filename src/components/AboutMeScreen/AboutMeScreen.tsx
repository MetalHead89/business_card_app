import './AboutMeScreen.scss';

function AboutMeScreen() {
  return (
    <div className="about-me-screen">
      <div className="about-me-screen__content">
        <div className="about-me-screen__text">
          Привет! Меня зовут{' '}
          <span className="about-me-screen__accent">Виталий</span>. Я начинающий{' '}
          <span className="about-me-screen__accent">frontend-разработчик</span>{' '}
          из небольшого Сибирского городка. Здесь ты можешь ознакомиться с моими
          работами, узнать об уровне моих скиллов и если возникнет необходимость
          - связаться со мной.
        </div>
      </div>
    </div>
  );
}

export default AboutMeScreen;
