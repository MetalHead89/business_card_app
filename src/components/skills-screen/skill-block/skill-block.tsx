import React from 'react';
import { ISkillBlock } from '../../../ts/interfaces';
import './skill-block.scss';

const SkillBlock = (props: ISkillBlock): JSX.Element => {
  return (
    <div className="skill-block">
      <i className={`skill-block__icon ${props.icon}`}></i>
      <div>Rating</div>
    </div>
  );
};

export default SkillBlock;
