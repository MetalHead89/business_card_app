import LinkButton from '../LinkButton/LinkButton';
import './Slide.scss';

type SlideType = {
  title?: string;
  description?: string;
  image: string;
  isBlurImage?: boolean;
  gitHubLink?: string;
  demoPageLink?: string;
};

function Slide({
  title,
  description,
  image,
  isBlurImage = false,
  gitHubLink,
  demoPageLink,
}: SlideType) {
  const linksSection =
    gitHubLink || demoPageLink ? (
      <div className="slide__links-section">
        {gitHubLink ? <LinkButton link={gitHubLink} text="GitHub" /> : null}
        {demoPageLink ? (
          <LinkButton link={demoPageLink} text="Демо страница" />
        ) : null}
      </div>
    ) : null;

  const imageClass = isBlurImage
    ? 'slide__image slide__image_blurred'
    : 'slide__image';

  return (
    <div className="slide">
      <img src={image} alt="Изображение слайда" className={imageClass} />
      {title ? <h2 className="slide__title">{title}</h2> : null}
      {description ? <p className="slide__description">{description}</p> : null}
      {linksSection}
    </div>
  );
}

export default Slide;
export type { SlideType };
