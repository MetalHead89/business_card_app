import { motion } from 'framer-motion';
import { useAppSelector } from '../../redux/hooks';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';
import InfoItem from '../InfoItem/InfoItem';
import SVGTriangle from '../SVGTriangle/SVGTriangle';
import './AboutMeScreen.scss';

function AboutMeScreen() {
  const animation = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: (custom: number) => ({
      transition: { delay: custom * 0.3 },
      opacity: 1,
      y: 0,
    }),
  };

  const { infoItems } = useAppSelector((state) => state.aboutMeScreenReducer);

  const info = infoItems.map((info, index) => (
    <motion.div
      key={info.name}
      className="about-me-screen__info-item"
      variants={animation}
      custom={index + 3}
    >
      <InfoItem name={info.name} text={info.text} />
    </motion.div>
  ));

  return (
    <div className="about-me-screen">
      <div className="about-me-screen__animated-background">
        <AnimatedBackground />
      </div>

      <div className="about-me-screen__content">
        <motion.h2
          variants={animation}
          custom={.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 1, once: true }}
          className="about-me-screen__title"
        >
          Обо <span className="about-me-screen__accent">мне</span>
        </motion.h2>

        <motion.div
          className="about-me-screen__info-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.7, once: true }}
        >
          <div className="about-me-screen__text">
            <motion.p variants={animation} custom={1}>
              Привет! Меня зовут{' '}
              <span className="about-me-screen__accent">Виталий</span>. Я
              начинающий{' '}
              <span className="about-me-screen__accent">
                frontend-разработчик
              </span>{' '}
              из небольшого Сибирского городка.
            </motion.p>
            <motion.p variants={animation} custom={2}>
              Здесь ты можешь ознакомиться с моими работами, узнать об уровне
              моих скиллов и если возникнет необходимость - связаться со мной.
            </motion.p>
          </div>
          <div className="about-me-screen__info">{info}</div>
        </motion.div>
      </div>
      <div className="about-me-screen__triangle">
        <SVGTriangle color="gray" />
      </div>
    </div>
  );
}

export default AboutMeScreen;
