import { motion } from 'framer-motion';
import { useAppSelector } from '../../redux/hooks';
import './AboutMeScreen.scss';

function AboutMeScreen() {
  const animation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (i: number) => ({
      transition: {
        delay: i * 0.3,
      },
      x: 0,
      opacity: 1,
    }),
  };

  const { aboutText } = useAppSelector((state) => state.aboutMeScreenReducer);

  const paragraphs = aboutText.map((paragraph, i) => (
    <motion.p custom={i} key={paragraph} variants={animation}>
      {paragraph}
    </motion.p>
  ));

  return (
    <div className="about-me-screen">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        className="about-me-screen__content"
      >
        {paragraphs}
      </motion.div>
    </div>
  );
}

export default AboutMeScreen;
