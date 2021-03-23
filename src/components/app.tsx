import React from 'react';
import AboutScreen from './about-screen/about-screen';
import SkillsScreen from './skills-screen/skills-screen';
import ServicesScreen from './services-screen/services-screen';
import Header from './header/header';
import ContactsScreen from './contacts-screen/contacts-screen';

interface IProps {
  state: {
    header: {
      menuItems: {
        id: number;
        anchor: string;
        linkText: string;
        active: boolean;
      }[];
    };
    aboutScreen: {
      text: string[];
      photoLink: string;
    };
    skillsScreen: {
      iconClasses: string[];
    };
  };
  selectMenuItem: {
    (id: number): void;
  };
}

const App = (props: IProps): JSX.Element => {
  return (
    <div className="app-body">
      <Header
        menuItems={props.state.header.menuItems}
        selectMenuItem={props.selectMenuItem}
      />
      <AboutScreen
        text={props.state.aboutScreen.text}
        photoLink={props.state.aboutScreen.photoLink}
      />
      <SkillsScreen iconClasses={props.state.skillsScreen.iconClasses} />
      <ServicesScreen />
      <ContactsScreen />
    </div>
  );
};

export default App;
