import React from 'react';
import './skillsScreen.scss';
import SkillBlock from './skillBlock/skillBlock';

interface IProps {
  iconClasses: string[];
}

const SkillsScreen = (props: IProps): JSX.Element => {
  const iconClasses = props.iconClasses.map((iconClass) => {
    return <SkillBlock iconClass={iconClass} />;
  });

  return (
    <div id="skills" className="skillsScreen">
      <div className="skillsScreen__skills">{iconClasses}</div>
    </div>
  );
};

export default SkillsScreen;
