import { motion } from 'framer-motion';
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

const animation = {
  start: {
    width: 0,
  },
  finish: (custom: number) => ({
    width: `${custom}%`,
    transition: { delay: 1 },
  }),
};

function SkillBar({ title, progress }: SkillBarType) {
  const progressPercent = progressValidate(progress);

  return (
    <div className="skill-bar">
      <div className="skill-bar__info">
        <span>{title}</span>
        <span>{`${progress}%`}</span>
      </div>
      <div className="skill-bar__bar-container">
        <motion.div
          className="skill-bar__progress"
          variants={animation}
          custom={progressPercent}
          initial="start"
          whileInView="finish"
        />
      </div>
    </div>
  );
}

export default SkillBar;
export type { SkillBarType };
