import React from 'react';
import AboutBlock from './aboutBlock/aboutBlock';
import './aboutScreen.scss';

interface IProps {
  text: string[];
  photoLink: string;
}

interface IState {
  [key: string]: string;
}

class AboutScreen extends React.Component<IProps, IState> {
  render() {
    return (
      <div id="about" className="aboutScreen">
        <AboutBlock text={this.props.text} photoLink={this.props.photoLink} />
      </div>
    );
  }
}

export default AboutScreen;
