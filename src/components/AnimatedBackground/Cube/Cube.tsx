import { motion } from 'framer-motion';
import './Cube.scss';

type CubeType = {
  position: number;
  delay: number;
  size: 'small' | 'normal' | 'big';
};

const speed = {
  small: 12,
  normal: 10,
  big: 8,
};

function Cube({ position, delay, size }: CubeType) {
  return (
    <motion.div
      className={`cube cube_${size}`}
      initial={{
        opacity: 0.4,
        y: 100,
        x: position,
      }}
      animate={{
        transition: {
          delay: delay,
          repeatDelay: 10,
          duration: speed[size],
          repeat: Infinity,
        },
        opacity: 0,
        y: -500,
        rotate: 360,
      }}
    />
  );
}

export default Cube;
