import { IAction, IPortfolioScreenState, ISlide } from '../interfaces';

const CLICK_TO_PREV_SLIDE_BTN = 'CLICK-TO-PREV-SLIDE-BTN';
const CLICK_TO_NEXT_SLIDE_BTN = 'CLICK-TO-NEXT-SLIDE-BTN';

const initialState = {
  slider: {
    slides: [
      {
        id: 1,
        status: 'active',
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
        status: 'next',
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
        status: 'prev',
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

const getNewSlidesState = (state: ISlide[], activeSlide: number): ISlide[] => {
  const prevSlide = getPrevSlideId(activeSlide, state);
  const nextSlide = getNextSlideId(activeSlide, state);

  return state.map((item) => {
    if (item.id === activeSlide) {
      return { ...item, status: 'active' };
    } else if (item.id === prevSlide) {
      return { ...item, status: 'prev' };
    } else if (item.id === nextSlide) {
      return { ...item, status: 'next' };
    } else {
      return { ...item, status: 'unactive' };
    }
  });
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
  const oldActiveSlide = state.slider.slides.filter(
    (item) => item.status === 'active'
  )[0].id;

  switch (action.type) {
    case CLICK_TO_PREV_SLIDE_BTN:
      return {
        ...state,
        slider: {
          slides: getNewSlidesState(
            state.slider.slides,
            getPrevSlideId(oldActiveSlide, state.slider.slides)
          ),
        },
      };
    case CLICK_TO_NEXT_SLIDE_BTN:
      return {
        ...state,
        slider: {
          slides: getNewSlidesState(
            state.slider.slides,
            getNextSlideId(oldActiveSlide, state.slider.slides)
          ),
        },
      };
    default:
      return state;
  }
};

export default portfolioScreenReducer;
export { clickToPrevSlideBtnActionCreator, clickToNextSlideBtnActionCreator };
