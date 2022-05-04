import './MainScreen.scss';
import { ReactComponent as Image } from '../../images/main-screen-image.svg';
import { motion } from 'framer-motion';
import ArrowButton from '../ArrowButton/ArrowButton';

const animation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    transition: { delay: 1, duration: 1 },
    opacity: 1,
  },
};

function MainScreen({
  buttonClickCallback,
}: {
  buttonClickCallback: () => void;
}) {
  return (
    <div className="main-screen">
      <div className="main-screen__content">
        <div className="main-screen__title-section">
          <motion.h1
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            className="main-screen__title"
          >
            <span className="main-screen__title_color_dark">Портфолио</span>
            <br /> frontend_разработчика
          </motion.h1>
        </div>

        <div className="main-screen__image-section">
          <div className="main-screen__image-container">
            <Image />
          </div>
        </div>

        <ArrowButton clickCallback={buttonClickCallback} color={'while'} />
      </div>
    </div>
  );
}

export default MainScreen;
