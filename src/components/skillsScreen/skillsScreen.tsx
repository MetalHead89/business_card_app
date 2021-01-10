import React from 'react';
import './skillsScreen.scss';
import SkillBlock from './skillBlock/skillBlock';

interface IProps {
  iconClasses: string[];
}

interface IState {
  [key: string]: string;
}

class SkillsScreen extends React.Component<IProps, IState> {
  iconClasses = this.props.iconClasses.map((iconClass) => {
    return <SkillBlock iconClass={iconClass} />;
  });

  render() {
    return (
      <div id="skills" className="skillsScreen">
        <div className="skillsScreen__skills">{this.iconClasses}</div>
      </div>
    );
  }
}

export default SkillsScreen;
