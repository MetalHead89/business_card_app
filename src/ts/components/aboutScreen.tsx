import React from 'react';
import Header from './header';
import AboutBlock from './aboutBlock';
import '../../scss/aboutScreen.scss';

class AboutScreen extends React.Component {
    render() {
        return (
            <div className='aboutScreen'>
                <Header />
                <AboutBlock />
            </div>
        );
    }
}

export default AboutScreen;
