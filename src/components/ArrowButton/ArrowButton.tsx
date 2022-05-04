import './ArrowButton.scss';

type Props = {
  color: string;
  clickCallback: () => void;
};

function ArrowButton({ color, clickCallback }: Props) {
  return (
    <button type="button" className="arrow-button" onClick={clickCallback}>
      <div className="arrow-button__arrow" />
      <div className="arrow-button__arrow" />
      <div className="arrow-button__arrow" />
    </button>
  );
}

export default ArrowButton;
