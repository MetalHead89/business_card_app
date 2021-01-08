import React from 'react';
import AboutBlock from './aboutBlock/aboutBlock';
import './aboutScreen.scss';

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
