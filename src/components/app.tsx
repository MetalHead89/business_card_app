import React from 'react';
import AboutScreen from './about-screen/about-screen';
import SkillsScreen from './skillsScreen/skillsScreen';
import ServicesScreen from './services-screen/services-screen';
import Header from './header/header';
import ContactsScreen from './contacts-screen/contacts-screen';

interface IProps {
  state: {
    header: {
      menuItems: {
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
}

const App = (props: IProps): JSX.Element => {
  return (
    <div className="app-body">
      <Header menuItems={props.state.header.menuItems} />
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
