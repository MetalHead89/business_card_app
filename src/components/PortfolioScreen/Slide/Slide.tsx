import './Slide.scss';

type SlideType = {
  title: string;
  description: string;
  image: string;
};

function Slide({ title, description, image }: SlideType) {
  return (
    <div className="slide">
      <img
        src={image}
        alt="Изображение слайда"
        className="slide__background"
      />
      <h2 className="slide__title">{title}</h2>
      <p className="slide__description">{description}</p>
    </div>
  );
}

export default Slide;
export type { SlideType };
