import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
  const progressRef = useRef<HTMLSpanElement>(null);
  const progressPercent = progressValidate(progress);
  const width = useMotionValue(0);
  useTransform(width, (value) => {
    if (progressRef.current) {
      progressRef.current.innerText =
        parseInt(value.toString().slice(0, -1), 10).toFixed() + '%';
    }
  });

  return (
    <div className="skill-bar">
      <div className="skill-bar__info">
        <span>{title}</span>
        <span ref={progressRef}>{`${progress}%`}</span>
      </div>
      <div className="skill-bar__bar-container">
        <motion.div
          className="skill-bar__progress"
          style={{ width }}
          whileInView={{ width: `${progressPercent}%` }}
          transition={{ delay: 0.6, type: 'just' }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

export default SkillBar;
export type { SkillBarType };
