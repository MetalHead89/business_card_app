import './Slide.scss';

type SlideType = {
  title?: string;
  description?: string;
  image: string;
  isBlurImage?: boolean;
};

function Slide({ title, description, image, isBlurImage = false }: SlideType) {
  const imageClass = isBlurImage
    ? 'slide__image slide__image_blurred'
    : 'slide__image';

  return (
    <div className="slide">
      <img src={image} alt="Изображение слайда" className={imageClass} />
      {title ? <h2 className="slide__title">{title}</h2> : null}
      {description ? <p className="slide__description">{description}</p> : null}
    </div>
  );
}

export default Slide;
export type { SlideType };
