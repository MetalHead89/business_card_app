import React from 'react';
import './aboutBlock.scss';

interface IProps {
  text: string[];
  photoLink: string;
}

const AboutBlock = (props: IProps): JSX.Element => {
  const text = props.text.map((paragraph, i) => {
    return <p key={i}>{paragraph}</p>;
  });

  return (
    <div className="aboutBlock">
      <div className="aboutBlock__text">{text}</div>
      <div className="aboutBlock__photo-wrapper">
        <img className="aboutBlock__photo" src={props.photoLink} alt="photo" />
      </div>
    </div>
  );
};

export default AboutBlock;
