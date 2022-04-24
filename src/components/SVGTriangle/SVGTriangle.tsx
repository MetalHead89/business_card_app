import './SVGTriangle.scss';

function SVGTriangle({ fill }: { fill: string }) {
  return (
    <svg className="svg-triangle" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill={`#${fill}`} points="0,100 100,0 100,100" />
    </svg>
  );
}

export default SVGTriangle;
