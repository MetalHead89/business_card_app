import { PortfolioScreenState } from './PortfolioScreenSlice';
import ToxinImage from '../../images/portfolio-toxin.jpg';
import SliderImage from '../../images/portfolio-slider.jpg';

const initialState: PortfolioScreenState = {
  works: [
    {
      title: 'Сайт отеля Toxin', description: 'text', titleImage: ToxinImage,
      slides: [
        { image: ToxinImage },
        { image: ToxinImage },
        { image: ToxinImage }
      ],
    },
    {
      title: 'Слайдер диапазона', description: 'Some text', titleImage: SliderImage,
      slides: [
        { image: SliderImage },
        { image: SliderImage },
        { image: SliderImage }
      ],
    }
  ]
}

export default initialState;
