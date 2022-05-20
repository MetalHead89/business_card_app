import { PortfolioScreenState } from './PortfolioScreenSlice';
import ToxinImage from '../../images/portfolio-toxin.jpg';
import SliderImage from '../../images/portfolio-slider.jpg';

const initialState: PortfolioScreenState = {
  works: [
    {
      title: 'Сайт отеля Toxin',
      description: 'text',
      titleImage: ToxinImage,
      gitHubLink: 'https://github.com/MetalHead89/fsd_part2',
      demoPageLink: "https://metalhead89.github.io/fsd_demo_part2/",
      slides: [
        { image: ToxinImage },
        { image: ToxinImage },
        { image: ToxinImage }
      ],
    },
    {
      title: 'Слайдер диапазона',
      description: 'Some text',
      titleImage: SliderImage,
      gitHubLink: 'https://github.com/MetalHead89/fsd_part4',
      slides: [
        { image: SliderImage },
        { image: SliderImage },
        { image: SliderImage }
      ],
    }
  ]
}

export default initialState;
