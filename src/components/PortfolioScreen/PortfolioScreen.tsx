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
      <Slide {...slide} />
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
        <button type="button" className="swiper__button-prev_vertical" />
        <button type="button" className="swiper__button-next_vertical" />
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
