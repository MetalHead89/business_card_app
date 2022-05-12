import { motion } from 'framer-motion';
import { useAppSelector } from '../../redux/hooks';
import SkillBar from '../SkillBar/SkillBar';
import SVGTriangle from '../SVGTriangle/SVGTriangle';
import './SkillsScreen.scss';

function SkillsScreen() {
  const animation = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: (custom: number) => ({
      transition: { delay: custom * 0.05 },
      opacity: 1,
      y: 0,
    }),
  };

  const { skills } = useAppSelector((state) => state.skillsScreenReducer);

  const skillsCollection = skills.map((skill, index) => (
    <motion.div
      key={skill.title}
      className="skills-screen__skill-container"
      variants={animation}
      custom={index + 1}
    >
      <SkillBar title={skill.title} progress={skill.progress} />
    </motion.div>
  ));

  return (
    <div className="skills-screen">
      <div className="skills-screen__content">
        <motion.h2
          className="skills-screen__title"
          variants={animation}
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 1, once: true }}
        >
          Навыки
        </motion.h2>
        <motion.div
          className="skills-screen__skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.7, once: true }}
        >
          {skillsCollection}
        </motion.div>
      </div>
      <div className="skills-screen__triangle">
        <SVGTriangle color="dark" />
      </div>
    </div>
  );
}

export default SkillsScreen;
