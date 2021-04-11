import { ReactNode } from 'react';
import { Store } from 'redux';

interface IAction {
  type: string;
  args?: any;
}

interface IDispatch {
  (action: IAction): void;
}

interface IAboutBlock {
  text: string[];
  photoLink: string;
}

interface IAboutScreen {
  aboutBlock: IAboutBlock;
}

interface IMenuItem {
  id: number;
  anchor: string;
  linkText: string;
  active: boolean;
}

interface ITopMenu {
  menuItems: IMenuItem[];
  changeActiveScreen: (id: number, anchor: string) => void;
}

interface IHeader {
  topMenu: ITopMenu;
}

interface ISkillBlock {
  id: number;
  icon: string;
}

interface IHeaderState {
  topMenu: {
    menuItems: {
      id: number;
      anchor: string;
      linkText: string;
      active: boolean;
    }[];
  };
}

interface IAboutScreenState {
  aboutBlock: { text: string[]; photoLink: string };
}

interface ISkillsScreenState {
  skills: ISkillBlock[];
}

interface IServiceBlock {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface IServicesScreenState {
  services: IServiceBlock[];
}

interface IAppState {
  activeScreen: string;
}

interface IState {
  app: IAppState;
  header: IHeaderState;
  aboutScreen: IAboutScreenState;
  skillsScreen: ISkillsScreenState;
  portfolioScreen: IPortfolioScreenState;
  servicesScreen: IServicesScreenState;
  feedbackScreen: IFeedbackScreenState;
}

interface IApp {
  state: IState;
  dispatch: IDispatch;
}

interface IFormElement {
  id: number;
  type: string;
  label?: string;
  text?: string;
}

interface IFeedbackForm {
  elements: IFormElement[];
}

interface IFeedbackScreenState {
  feedbackForm: IFeedbackForm;
}

interface ISlide {
  id: number;
  active: boolean;
  imageSection: {
    image: string;
  };
  textSection: {
    title: string;
    description: string;
  };
}

interface IPortfolioScreenState {
  slider: {
    slides: ISlide[];
  };
}

interface IPortfolioScreen {
  slider: {
    slides: ISlide[];
  };
  clickToPrevSlideBtn: (id: number) => void;
  clickToNextSlideBtn: (id: number) => void;
}

interface ISlider {
  slide: ISlide;
  clickToPrevSlideBtn: (id: number) => void;
  clickToNextSlideBtn: (id: number) => void;
}

interface IStore {
  children: ReactNode;
  store: Store<IState, IAction>;
}

interface ISVGIcon {
  icon: string;
  class: string;
}

export {
  IState,
  IApp,
  IHeader,
  ITopMenu,
  IAboutBlock,
  IAboutScreen,
  ISkillBlock,
  IAction,
  IHeaderState,
  IAboutScreenState,
  ISkillsScreenState,
  IAppState,
  IStore,
  IDispatch,
  IMenuItem,
  IServicesScreenState,
  IServiceBlock,
  IFeedbackScreenState,
  IFormElement,
  IFeedbackForm,
  IPortfolioScreenState,
  ISVGIcon,
  ISlide,
  IPortfolioScreen,
  ISlider,
};
