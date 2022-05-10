import './MainScreen.scss';
import { ReactComponent as Image } from '../../images/main-screen-image.svg';
import { motion } from 'framer-motion';
import SVGTriangle from '../SVGTriangle/SVGTriangle';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const animation = {
  hiddenLeft: {
    opacity: 0,
    x: -200,
  },
  hiddenRight: {
    opacity: 0,
    x: 200,
  },
  visible: {
    transition: { delay: 1, duration: 1.3, type: 'spring', bounce: 0.4 },
    opacity: 1,
    x: 0,
  },
};

function MainScreen() {
  return (
    <div className="main-screen">
      <ParallaxProvider>
        <Parallax speed={-40}>
          <div className="main-screen__parallax-layer">
            <div className="main-screen__content">
              <div className="main-screen__title-section">
                <motion.h1
                  variants={animation}
                  initial="hiddenLeft"
                  whileInView="visible"
                  viewport={{ amount: 0.5, once: true }}
                  className="main-screen__title"
                >
                  <span className="main-screen__title_color_dark">
                    Портфолио
                  </span>
                  <br /> frontend_разработчика
                </motion.h1>
              </div>

              <motion.div
                variants={animation}
                initial="hiddenRight"
                whileInView="visible"
                viewport={{ amount: 0.5, once: true }}
                className="main-screen__image-section"
              >
                <div className="main-screen__image-container">
                  <Image />
                </div>
              </motion.div>
            </div>
          </div>
        </Parallax>

        <div className="main-screen__triangle">
          <SVGTriangle color="white" />
        </div>
      </ParallaxProvider>
    </div>
  );
}

export default MainScreen;
