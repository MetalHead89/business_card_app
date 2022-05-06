import { useAppSelector } from '../../redux/hooks';
import SkillBar from '../SkillBar/SkillBar';
import './SkillsScreen.scss';

function SkillsScreen() {
  const { skills } = useAppSelector((state) => state.skillsScreenReducer);

  const skillsCollection = skills.map((skill) => (
    <div className="skills-screen__skill-container">
      <SkillBar
        key={skill.title}
        title={skill.title}
        progress={skill.progress}
      />
    </div>
  ));

  return (
    <div className="skills-screen">
      <div className="skills-screen__content">
        <div className="skills-screen__skills">{skillsCollection}</div>
      </div>
    </div>
  );
}

export default SkillsScreen;
