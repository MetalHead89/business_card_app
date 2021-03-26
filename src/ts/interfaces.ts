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
  dispatch: IDispatch;
}

interface IHeader {
  topMenu: ITopMenu;
}

interface ISkillBlock {
  icon: string;
}

interface ISkills {
  skills: ISkillBlock[];
}

interface IState {
  header: {
    topMenu: {
      menuItems: {
        id: number;
        anchor: string;
        linkText: string;
        active: boolean;
      }[];
    };
  };
  aboutScreen: {
    aboutBlock: {
      text: string[];
      photoLink: string;
    };
  };
  skillsScreen: {
    skills: ISkillBlock[];
  };
}

interface IApp {
  state: IState;
  dispatch: IDispatch;
}

export {
  IState,
  IApp,
  IHeader,
  ITopMenu,
  IAboutBlock,
  IAboutScreen,
  ISkillBlock,
  ISkills,
  IAction,
};
