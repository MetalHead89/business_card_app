import React from 'react';
import './about-block.scss';

interface IProps {
  text: string[];
  photoLink: string;
}

const AboutBlock = (props: IProps): JSX.Element => {
  const text = props.text.map((paragraph, i) => {
    return <p key={i}>{paragraph}</p>;
  });

  return (
    <div className="about-block">
      <div className="about-block__text">{text}</div>
      <div className="about-block__photo-wrapper">
        <img className="about-block__photo" src={props.photoLink} alt="photo" />
      </div>
    </div>
  );
};

export default AboutBlock;
