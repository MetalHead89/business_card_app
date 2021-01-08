import React from 'react';
import AboutScreen from './aboutScreen/aboutScreen';
import SkillsScreen from './skillsScreen/skillsScreen';
import ServicesScreen from './servicesScreen/servicesScreen';
import Header from './header/header';
import ContactsScreen from './contactsScreen/contactsScreen';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <AboutScreen />
                <SkillsScreen />
                <ServicesScreen />
                <ContactsScreen />
            </div>
        );
    }
}

export default App;
