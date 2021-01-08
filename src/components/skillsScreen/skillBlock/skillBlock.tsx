import React from "react";
import "./skillBlock.scss";
import { IProps, IState } from "../../../ts/interfaces";

class SkillBlock extends React.Component<IProps, IState> {
  render() {
    return (
      <div className="skillBlock">
        <i className={`skillBlock__icon ${this.props.style}`}></i>
        <div>Rating</div>
      </div>
    );
  }
}

export default SkillBlock;
