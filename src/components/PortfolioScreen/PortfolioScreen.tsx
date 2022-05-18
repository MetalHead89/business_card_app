import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './PortfolioScreen.scss';
import { useAppSelector } from '../../redux/hooks';
import Slide from './Slide/Slide';
import SVGArrow from '../SVGArrow/SVGArrow';

SwiperCore.use([Navigation, Pagination]);

function PortfolioScreen() {
  const { slides } = useAppSelector((state) => state.portfolioScreenReducer);

  const slidesCollection = slides.map((slide) => (
    <SwiperSlide key={slide.title}>
      <Swiper navigation pagination={{ clickable: true }} loop={true}>
        <SwiperSlide>
          <Slide {...slide} />
        </SwiperSlide>
      </Swiper>
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
