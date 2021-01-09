import React from 'react';
import AboutScreen from './aboutScreen/aboutScreen';
import SkillsScreen from './skillsScreen/skillsScreen';
import ServicesScreen from './servicesScreen/servicesScreen';
import Header from './header/header';
import ContactsScreen from './contactsScreen/contactsScreen';

interface IMenuItem {
  [key: string]: string;
}

interface IProps {
  state: {
    menuItems: IMenuItem[]
  }
}

interface IState {
  [key: string]: string;
}

class App extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <Header menuItems={this.props.state.menuItems}/>
        <AboutScreen />
        <SkillsScreen />
        <ServicesScreen />
        <ContactsScreen />
      </div>
    );
  }
}

export default App;
