import './SkillBar.scss';

const progressValidate = (progress: number): number => {
  if (progress >= 0 && progress <= 100) {
    return progress;
  }

  return progress < 0 ? 0 : 100;
};

type SkillBarType = {
  title: string;
  progress: number;
};

function SkillBar({ title, progress }: SkillBarType) {
  const progressPercent = progressValidate(progress);

  return (
    <div className="skill-bar">
      <div className="skill-bar__title">{title}</div>
      <div className="skill-bar__bar-container">
        <div className="skill-bar__progress" />
      </div>
    </div>
  );
}

export default SkillBar;
