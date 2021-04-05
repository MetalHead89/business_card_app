import { IFeedbackScreenState } from '../interfaces';

const initialState = {
  feedbackForm: [
    { id: 1, type: 'input', label: 'Имя', required: true },
    { id: 2, type: 'input', label: 'Email', required: true },
    { id: 3, type: 'input', label: 'Ваша компания' },
    { id: 4, type: 'input', label: 'Тема обращения', required: true },
    { id: 5, type: 'textarea', label: 'Сообщение', required: true },
    { id: 6, type: 'submit', text: 'Отправить' },
  ],
};

const feedbackScreenReducer = (
  state: IFeedbackScreenState = initialState,
): IFeedbackScreenState => {
  return state;
};

export default feedbackScreenReducer;
