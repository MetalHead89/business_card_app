import './SVGTriangle.scss';

type Color = 'white' | 'cream' | 'dark';

const colors: { [K in Color]: string } = {
  white: '#ffffff',
  cream: '#fff8ef',
  dark: '#303030',
};

function SVGTriangle({ color }: { color: Color }) {
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
