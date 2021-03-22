import React from 'react';
import './skills-screen.scss';
import SkillBlock from './skillBlock/skillBlock';

interface IProps {
  iconClasses: string[];
}

const SkillsScreen = (props: IProps): JSX.Element => {
  const iconClasses = props.iconClasses.map((iconClass) => {
    return <SkillBlock iconClass={iconClass} />;
  });

  return (
    <div id="skills" className="skills-screen">
      <div className="skills-screen__skills">{iconClasses}</div>
    </div>
  );
};

export default SkillsScreen;
