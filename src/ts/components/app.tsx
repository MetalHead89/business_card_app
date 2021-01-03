import React from 'react'
import AboutScreen from './aboutScreen';
import SkillsScreen from './skillsScreen';
import ServicesScreen from './servicesScreen'

class App extends React.Component {
    render() {
        return (
            <div>
                <AboutScreen />
                <SkillsScreen />
                <ServicesScreen />
            </div>
        );
    }
}

export default App;
