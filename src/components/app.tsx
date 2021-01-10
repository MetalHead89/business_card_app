import React from 'react';
import AboutScreen from './aboutScreen/aboutScreen';
import SkillsScreen from './skillsScreen/skillsScreen';
import ServicesScreen from './servicesScreen/servicesScreen';
import Header from './header/header';
import ContactsScreen from './contactsScreen/contactsScreen';

interface items {
  [key: string]: string;
}

interface IProps {
  state: {
    header: {
      menuItems: items[];
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

interface IState {
  [key: string]: string;
}

class App extends React.Component<IProps, IState> {
  render() {
    return (
      <div className="app-body">
        <Header menuItems={this.props.state.header.menuItems} />
        <AboutScreen
          text={this.props.state.aboutScreen.text}
          photoLink={this.props.state.aboutScreen.photoLink}
        />
        <SkillsScreen iconClasses={this.props.state.skillsScreen.iconClasses} />
        <ServicesScreen />
        <ContactsScreen />
      </div>
    );
  }
}

export default App;
