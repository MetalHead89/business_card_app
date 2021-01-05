import React from 'react';
import AboutBlock from './aboutBlock';
import '../../scss/aboutScreen.scss';

class AboutScreen extends React.Component {
    render() {
        return (
            <div className='aboutScreen'>
                <AboutBlock />
            </div>
        );
    }
}

export default AboutScreen;
