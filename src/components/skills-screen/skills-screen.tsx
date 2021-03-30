import React from 'react';
import { ISkillsScreenState } from '../../ts/interfaces';
import './skills-screen.scss';
import SkillBlock from './skill-block/skill-block';

const SkillsScreen = (props: ISkillsScreenState): JSX.Element => {
  const skills = props.skills.map((skill) => {
    return <SkillBlock icon={skill.icon} />;
  });

  return (
    <div id="skills" className="skills-screen">
      <div className="skills-screen__skills">{skills}</div>
    </div>
  );
};

export default SkillsScreen;
