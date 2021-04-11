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
    ],
  },
};

const getNextSlideId = (id: number, state: ISlide[]): number => {
  const currentSlideIndex = state.findIndex((item) => item.id === id);
  return currentSlideIndex < state.length - 1
    ? state[currentSlideIndex + 1].id
    : state[0].id;
};

const getPrevSlideId = (id: number, state: ISlide[]): number => {
  const currentSlideIndex = state.findIndex((item) => item.id === id);
  return currentSlideIndex > 0
    ? state[currentSlideIndex - 1].id
    : state[state.length - 1].id;
};

const getNewSlidesState = (id: number, state: ISlide[]): ISlide[] => {
  return state.map((item) => {
    return item.id === id
      ? { ...item, active: true }
      : { ...item, active: false };
  });
};

const clickToPrevSlideBtnActionCreator = (id: number): IAction => ({
  type: CLICK_TO_PREV_SLIDE_BTN,
  args: { id },
});

const clickToNextSlideBtnActionCreator = (id: number): IAction => ({
  type: CLICK_TO_NEXT_SLIDE_BTN,
  args: { id },
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
          slides: getNewSlidesState(
            getPrevSlideId(action.args.id, state.slider.slides),
            state.slider.slides
          ),
        },
      };
    case CLICK_TO_NEXT_SLIDE_BTN:
      return {
        ...state,
        slider: {
          slides: getNewSlidesState(
            getNextSlideId(action.args.id, state.slider.slides),
            state.slider.slides
          ),
        },
      };
    default:
      return state;
  }
};

export default portfolioScreenReducer;
export { clickToPrevSlideBtnActionCreator, clickToNextSlideBtnActionCreator };
