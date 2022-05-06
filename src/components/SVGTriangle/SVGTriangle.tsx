import './SVGTriangle.scss';

type color = 'light';

const colors: { [K in color]: string } = { light: '#ebeff5' };

function SVGTriangle({ color }: { color: color }) {
  return (
    <svg
      className="svg-triangle"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon fill={colors[color]} points="0, 98.4 0,100 100, 100 100,0" />
    </svg>
  );
}

export default SVGTriangle;