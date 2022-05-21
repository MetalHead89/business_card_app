import './LinkButton.scss';

type LinkButtonType = {
  link: string;
  text: string;
};

function LinkButton({ link, text }: LinkButtonType) {
  return (
    <a className="link-button" href={link} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}

export default LinkButton;
