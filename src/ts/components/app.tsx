import React from 'react';
import AboutScreen from './aboutScreen';
import SkillsScreen from './skillsScreen';
import ServicesScreen from './servicesScreen';
import Footer from './footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <AboutScreen />
                <SkillsScreen />
                <ServicesScreen />
                <Footer />
            </div>
        );
    }
}

export default App;
