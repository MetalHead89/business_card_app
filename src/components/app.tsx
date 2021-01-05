import React from 'react';
import AboutScreen from './aboutScreen/aboutScreen';
import SkillsScreen from './skillsScreen/skillsScreen';
import ServicesScreen from './servicesScreen/servicesScreen';
import Header from './header/header';
import Footer from './footer/footer';

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
