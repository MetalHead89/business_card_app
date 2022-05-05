import './SVGTriangle.scss';

function SVGTriangle({ color }: { color: string }) {
  return (
    <svg
      className="svg-triangle"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon fill={`#${color}`} points="0,100 100,0 100,100" />
    </svg>
  );
}

export default SVGTriangle;
