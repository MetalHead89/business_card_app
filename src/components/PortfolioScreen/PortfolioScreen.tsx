import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './PortfolioScreen.scss';
import { useAppSelector } from '../../redux/hooks';
import Slide from './Slide/Slide';
import SVGArrow from '../SVGArrow/SVGArrow';
import WorkSlider from './WorkSlider/WorkSlider';

SwiperCore.use([Navigation, Pagination]);

function PortfolioScreen() {
  const { works } = useAppSelector((state) => state.portfolioScreenReducer);

  const slidesCollection = works.map((work) => (
    <SwiperSlide key={work.title}>
      <WorkSlider {...work}/>
    </SwiperSlide>
  ));

  return (
    <div className="portfolio-screen">
      <Swiper
        direction="vertical"
        navigation={{
          prevEl: '.swiper__button-prev_vertical',
          nextEl: '.swiper__button-next_vertical',
        }}
        loop={true}
      >
        <button type="button" className="swiper__button-prev_vertical">
          <SVGArrow type="up" />
        </button>
        <button type="button" className="swiper__button-next_vertical">
          <SVGArrow type="down" />
        </button>
        <SwiperSlide>
          <div className="portfolio-screen__title-slide">
            <h2 className="portfolio-screen__title">Портфолио</h2>
          </div>
        </SwiperSlide>
        {slidesCollection}
      </Swiper>
    </div>
  );
}

export default PortfolioScreen;
