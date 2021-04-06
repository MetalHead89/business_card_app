import { IFeedbackScreenState } from '../interfaces';

const initialState = {
  feedbackForm: {
    elements: [
      { id: 1, type: 'text', label: 'Имя' },
      { id: 2, type: 'text', label: 'Email' },
      { id: 3, type: 'text', label: 'Ваша компания' },
      { id: 4, type: 'text', label: 'Тема обращения' },
      { id: 5, type: 'textarea', label: 'Сообщение' },
      { id: 6, type: 'submit', text: 'Отправить' },
    ],
  },
};

const feedbackScreenReducer = (
  state: IFeedbackScreenState = initialState
): IFeedbackScreenState => {
  return state;
};

export default feedbackScreenReducer;
