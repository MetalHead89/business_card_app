import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './FeedbackScreen.scss';

function FeedbackScreen() {
  return (
    <ParallaxProvider>
      <Parallax speed={-40}>
        <div className="feedback-screen">
          <div className="feedback-screen__content">
            <h2 className="feedback-screen__title">Обратная связь</h2>
            <form className="feedback-screen__form">
              <input
                className="feedback-screen__input"
                type="text"
                name="name"
                placeholder="Ваше Имя *"
              />
              <input
                className="feedback-screen__input"
                type="email"
                name="email"
                placeholder="Email *"
              />
              <input
                className="feedback-screen__input"
                type="text"
                name="theme"
                placeholder="Тема обращения *"
              />
              <textarea
                className="feedback-screen__input"
                name="message"
                placeholder="Сообщение *"
              />
              <button className="feedback-screen__button" type="submit">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </Parallax>
    </ParallaxProvider>
  );
}

export default FeedbackScreen;
