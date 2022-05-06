import { useAppSelector } from '../../redux/hooks';
import SkillBar from '../SkillBar/SkillBar';
import './AboutMeScreen.scss';

function AboutMeScreen() {
  const { title, aboutText, skills } = useAppSelector(
    (state) => state.aboutMeScreenReducer
  );

  const text = aboutText.map((paragraph) => <p key={paragraph}>{paragraph}</p>);
  const skillsCollection = skills.map((skill) => (
    <div className="about-me-screen__skill-container">
      <SkillBar
        key={skill.title}
        title={skill.title}
        progress={skill.progress}
      />
    </div>
  ));

  return (
    <div className="about-me-screen">
      <div className="about-me-screen__content">
        <div className="about-me-screen__text">
          <h2>{title}</h2>
          {text}
        </div>
        <div className="about-me-screen__skills">{skillsCollection}</div>
      </div>
    </div>
  );

  //   const animation = {
  //     hidden: {
  //       x: -100,
  //       opacity: 0,
  //     },
  //     visible: (i: number) => ({
  //       transition: {
  //         delay: i * 0.3,
  //       },
  //       x: 0,
  //       opacity: 1,
  //     }),
  //   };

  //   const { aboutText } = useAppSelector((state) => state.aboutMeScreenReducer);

  //   const paragraphs = aboutText.map((paragraph, i) => (
  //     <motion.p custom={i} key={paragraph} variants={animation}>
  //       {paragraph}
  //     </motion.p>
  //   ));

  //   return (
  //     <div className="about-me-screen">
  //       <motion.div
  //         initial="hidden"
  //         whileInView="visible"
  //         viewport={{ amount: 0.5 }}
  //         className="about-me-screen__content"
  //       >
  //         {paragraphs}
  //       </motion.div>
  //     </div>
  //   );
}

export default AboutMeScreen;
