import React from 'react';
import AboutScreen from './aboutScreen/aboutScreen';
import SkillsScreen from './skillsScreen/skillsScreen';
import ServicesScreen from './servicesScreen/servicesScreen';
import Header from './header/header';
import ContactsScreen from './contactsScreen/contactsScreen';

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
