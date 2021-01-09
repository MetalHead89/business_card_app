import React from 'react';
import './aboutBlock.scss';

interface IProps {
  text: string[];
  photoLink: string;
}

interface IState {
  [key: string]: string;
}

class AboutBlock extends React.Component<IProps, IState> {
    text = this.props.text.map((paragraph, i) => {
        return (
            <p key={i}>
                {paragraph}
            </p>
        )
    });

  render() {
    return (
      <div className="aboutBlock">
        <div className="aboutBlock__text">
          {this.text}
        </div>
        <div className="aboutBlock__photo-wrapper">
          <img
            className="aboutBlock__photo"
            src={this.props.photoLink}
            alt="photo"
          />
        </div>
      </div>
    );
  }
}

export default AboutBlock;
