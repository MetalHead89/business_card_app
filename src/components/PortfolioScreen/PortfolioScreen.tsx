import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './PortfolioScreen.scss';
import { useAppSelector } from '../../redux/hooks';
import Slide from './Slide/Slide';

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
          <svg className="svg-arrow" viewBox="0 0 86.002 86.002">
            <path
              className="svg-arrow__path"
              d="M80.093,64.999c1.353,1.338,3.544,1.338,4.896,0c1.35-1.338,1.352-3.506,0-4.847L45.445,21.004
              c-1.352-1.338-3.541-1.338-4.892,0L1.013,60.152c-1.35,1.341-1.352,3.507,0,4.847c1.352,1.338,3.543,1.338,4.895,0l37.091-35.703
              L80.093,64.999z"
            />
          </svg>
        </button>
        <button type="button" className="swiper__button-next_vertical">
          <svg className="svg-arrow" viewBox="0 0 86.001 86.001">
            <path
              className="svg-arrow__path"
              d="M5.907,21.004c-1.352-1.338-3.542-1.338-4.894,0c-1.35,1.336-1.352,3.506,0,4.844l39.54,39.15
              c1.352,1.338,3.542,1.338,4.894,0l39.54-39.15c1.351-1.338,1.352-3.506,0-4.844c-1.352-1.338-3.542-1.338-4.894-0.002L43,56.707
              L5.907,21.004z"
            />
          </svg>
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
