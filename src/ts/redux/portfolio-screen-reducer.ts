import { IAction, IPortfolioScreenState, ISlide } from '../interfaces';

const CLICK_TO_PREV_SLIDE_BTN = 'CLICK-TO-PREV-SLIDE-BTN';
const CLICK_TO_NEXT_SLIDE_BTN = 'CLICK-TO-NEXT-SLIDE-BTN';

const initialState = {
  slider: {
    slides: [
      {
        id: 1,
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
        id: 2,
        active: false,
        imageSection: {
          image: '/src/images/image-stub.jpg',
        },
        textSection: {
          title: 'Заголовок',
          description: 'Какой-то текст с описанием работы 2',
        },
      },
      {
        id: 3,
        active: false,
        imageSection: {
          image: '/src/images/image-stub.jpg',
        },
        textSection: {
          title: 'Заголовок',
          description: 'Какой-то текст с описанием работы 3',
        },
      },
      // {
      //   id: 4,
      //   active: false,
      //   imageSection: {
      //     image: '/src/images/image-stub.jpg',
      //   },
      //   textSection: {
      //     title: 'Заголовок',
      //     description: 'Какой-то текст с описанием работы 4',
      //   },
      // },
      // {
      //   id: 5,
      //   active: false,
      //   imageSection: {
      //     image: '/src/images/image-stub.jpg',
      //   },
      //   textSection: {
      //     title: 'Заголовок',
      //     description: 'Какой-то текст с описанием работы 5',
      //   },
      // },
    ],
  },
};

const switchToNextSlide = (state: ISlide[]): ISlide[] => {
  const oldActiveSlide = state.findIndex((item) => item.active === true);
  const newActiveSlide =
    oldActiveSlide === state.length - 1 ? 0 : oldActiveSlide + 1;

  return getNewSlidesState(state, oldActiveSlide, newActiveSlide);
};

const switchToPrevSlide = (state: ISlide[]): ISlide[] => {
  const oldActiveSlide = state.findIndex((item) => item.active === true);
  const newActiveSlide =
    oldActiveSlide === 0 ? state.length - 1 : oldActiveSlide - 1;
  return getNewSlidesState(state, oldActiveSlide, newActiveSlide);
};

const getNewSlidesState = (
  state: ISlide[],
  oldActiveSlide: number,
  newActiveSlide: number
): ISlide[] => {
  const newState = [...state];
  newState[oldActiveSlide].active = false;
  newState[newActiveSlide].active = true;

  return newState;
};

const clickToPrevSlideBtnActionCreator = (): IAction => ({
  type: CLICK_TO_PREV_SLIDE_BTN,
});

const clickToNextSlideBtnActionCreator = (): IAction => ({
  type: CLICK_TO_NEXT_SLIDE_BTN,
});

const portfolioScreenReducer = (
  state: IPortfolioScreenState = initialState,
  action: IAction
): IPortfolioScreenState => {
  switch (action.type) {
    case CLICK_TO_PREV_SLIDE_BTN:
      return {
        ...state,
        slider: {
          slides: switchToPrevSlide(state.slider.slides),
        },
      };
    case CLICK_TO_NEXT_SLIDE_BTN:
      return {
        ...state,
        slider: {
          slides: switchToNextSlide(state.slider.slides),
        },
      };
    default:
      return state;
  }
};

export default portfolioScreenReducer;
export { clickToPrevSlideBtnActionCreator, clickToNextSlideBtnActionCreator };
