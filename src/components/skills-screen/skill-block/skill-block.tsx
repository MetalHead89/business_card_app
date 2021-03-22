import React from 'react';
import './skill-block.scss';

export interface IProps {
  [key: string]: string;
}

const SkillBlock = (props: IProps): JSX.Element => {
  return (
    <div className="skill-block">
      <i className={`skill-block__icon ${props.iconClass}`}></i>
      <div>Rating</div>
    </div>
  );
};

export default SkillBlock;
