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
    <SwiperSlide>
      <Slide key={slide.title} {...slide} />
    </SwiperSlide>
  ));

  return (
    <div className="portfolio-screen">
      <Swiper navigation pagination={{ clickable: true }} loop={true}>
        {slidesCollection}
      </Swiper>
    </div>
  );
}

export default PortfolioScreen;
