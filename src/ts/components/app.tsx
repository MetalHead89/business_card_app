import React from 'react'
import AboutScreen from './aboutScreen';
import SkillsScreen from './skillsScreen';

class App extends React.Component {
    render() {
        return (
            <div>
                <AboutScreen />
                <SkillsScreen />
            </div>
        );
    }
}

export default App;
