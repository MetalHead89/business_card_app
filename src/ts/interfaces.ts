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
  selectMenuItem: ISelectMenuItem;
}

interface ISelectMenuItem {
  (id: number): void;
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
  selectMenuItem: ISelectMenuItem;
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
};
