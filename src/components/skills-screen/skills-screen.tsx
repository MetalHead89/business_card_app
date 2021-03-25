import React from 'react';
import { ISkills } from '../../ts/interfaces';
import './skills-screen.scss';
import SkillBlock from './skill-block/skill-block';

const SkillsScreen = (props: ISkills): JSX.Element => {
  const iconClasses = props.skills.map((skill) => {
    return <SkillBlock icon={skill.icon} />;
  });

  return (
    <div id="skills" className="skills-screen">
      <div className="skills-screen__skills">{iconClasses}</div>
    </div>
  );
};

export default SkillsScreen;
