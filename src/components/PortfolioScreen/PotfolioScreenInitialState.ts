import { PortfolioScreenState } from './PortfolioScreenSlice';
import ToxinImage from '../../images/portfolio-toxin.jpg';
import SliderImage from '../../images/portfolio-slider.jpg';

const initialState: PortfolioScreenState = {
  slides: [
    { title: 'Сайт отеля Toxin', description: 'text', image: ToxinImage },
    { title: 'Слайдер диапазона', description: 'some text', image: SliderImage }
  ],
};

export default initialState;
