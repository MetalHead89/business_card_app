import React from 'react';
import './skillBlock.scss';

export interface IProps {
  [key: string]: string;
}

const SkillBlock = (props: IProps): JSX.Element => {
  return (
    <div className="skillBlock">
      <i className={`skillBlock__icon ${props.iconClass}`}></i>
      <div>Rating</div>
    </div>
  );
};

export default SkillBlock;
