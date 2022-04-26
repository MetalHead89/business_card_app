import { motion } from 'framer-motion';
import SVGTriangle from '../SVGTriangle/SVGTriangle';
import './AboutMeScreen.scss';

function AboutMeScreen() {
  const animation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="about-me-screen">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        className="about-me-screen__content"
      >
        <motion.p variants={animation}>
          Давно выяснено, что при оценке дизайна и композиции читаемый текст
          мешает сосредоточиться. Lorem Ipsum используют потому, что тот
          обеспечивает более или менее стандартное заполнение шаблона, а также
          реальное распределение букв и пробелов в абзацах, которое не
          получается при простой дубликации "Здесь ваш текст..
        </motion.p>

        <motion.p variants={animation}>
          Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной
          вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по
          умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу
          показывает, как много веб-страниц всё ещё дожидаются своего настоящего
          рождения.{' '}
        </motion.p>

        <motion.p variants={animation}>
          За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые
          версии появились по ошибке, некоторые - намеренно (например,
          юмористические варианты).
        </motion.p>
      </motion.div>
      <div className="about-me-screen__bottom-triangle">
        <SVGTriangle fill="000000" />
      </div>
    </div>
  );
}

export default AboutMeScreen;
