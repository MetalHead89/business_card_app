import { IPortfolioScreenState } from '../interfaces';

const initialState = {
  slider: {
    slides: [
      {
        active: true,
        imageSection: {
          image: '/src/images/image-stub.jpg',
        },
        textSection: {
          title: 'Заголовок',
          description: 'Какой-то текст с описанием работы',
        },
      },
      {
        active: false,
        imageSection: {
          image: '/src/images/image-stub.jpg',
        },
        textSection: {
          title: 'Заголовок',
          description: 'Какой-то текст с описанием работы',
        },
      },
      {
        active: false,
        imageSection: {
          image: '/src/images/image-stub.jpg',
        },
        textSection: {
          title: 'Заголовок',
          description: 'Какой-то текст с описанием работы',
        },
      },
    ],
  },
};

const portfolioScreenReducer = (
  state: IPortfolioScreenState = initialState,
): IPortfolioScreenState => {
  return state;
};

export default portfolioScreenReducer;
