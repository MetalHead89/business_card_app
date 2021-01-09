import React from 'react';
import './skillBlock.scss';

export interface IProps {
  [key: string]: string;
}

export interface IState {
  [key: string]: string;
}

class SkillBlock extends React.Component<IProps, IState> {
  render() {
    return (
      <div className="skillBlock">
        <i className={`skillBlock__icon ${this.props.iconClass}`}></i>
        <div>Rating</div>
      </div>
    );
  }
}

export default SkillBlock;
