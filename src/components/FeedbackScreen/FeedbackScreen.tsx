import './FeedbackScreen.scss';

function FeedbackScreen() {
  return (
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
        </form>
      </div>
    </div>
  );
}

export default FeedbackScreen;
