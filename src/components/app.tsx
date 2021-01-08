import React from 'react';
import AboutScreen from './aboutScreen/aboutScreen';
import SkillsScreen from './skillsScreen/skillsScreen';
import ServicesScreen from './servicesScreen/servicesScreen';
import Header from './header/header';
import Сontacts from './contacts/contacts';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <AboutScreen />
                <SkillsScreen />
                <ServicesScreen />
                <Сontacts />
            </div>
        );
    }
}

export default App;
