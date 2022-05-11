import './AnimatedBackground.scss';
import Cube from './Cube/Cube';

function AnimatedBackground() {
  return (
    <div className="animated-background">
      <Cube position={100} delay={0} size="normal" />
      <Cube position={800} delay={5} size="big" />
      <Cube position={500} delay={8} size="small" />
      <Cube position={900} delay={2} size="normal" />
      <Cube position={300} delay={4} size="big" />
      <Cube position={200} delay={10} size="small" />
      <Cube position={700} delay={6} size="normal" />
      <Cube position={200} delay={3} size="big" />
      <Cube position={700} delay={15} size="small" />
    </div>
  );
}

export default AnimatedBackground;
