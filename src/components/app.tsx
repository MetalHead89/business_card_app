import React from 'react';
import AboutScreen from './aboutScreen';
import SkillsScreen from './skillsScreen';
import ServicesScreen from './servicesScreen';
import Header from './header';
import Footer from './footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <AboutScreen />
                <SkillsScreen />
                <ServicesScreen />
                <Footer />
            </div>
        );
    }
}

export default App;
