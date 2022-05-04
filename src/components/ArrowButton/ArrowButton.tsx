import './ArrowButton.scss';

function ArrowButton() {
  return (
    <button type="button" className="arrow-button">
      <div className="arrow-button__arrow" />
      <div className="arrow-button__arrow" />
      <div className="arrow-button__arrow" />
    </button>
  );
}

export default ArrowButton;
