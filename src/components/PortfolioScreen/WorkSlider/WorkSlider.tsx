import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import SVGArrow from '../../SVGArrow/SVGArrow';
import { PortfolioScreenWork } from '../PortfolioScreenSlice';
import Slide from '../Slide/Slide';

SwiperCore.use([Navigation, Pagination]);

function WorkSlider({
  title,
  description,
  titleImage,
  slides,
}: PortfolioScreenWork) {
  const workSlides = slides.map((slide) => (
    <SwiperSlide key={slide.image}>
      <Slide image={slide.image} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      navigation={{
        prevEl: '.swiper__button-prev_horizontal',
        nextEl: '.swiper__button-next_horizontal',
      }}
      pagination={{ clickable: true }}
      loop={true}
    >
      <button type="button" className="swiper__button-prev_horizontal">
        <SVGArrow type="left" />
      </button>
      <button type="button" className="swiper__button-next_horizontal">
        <SVGArrow type="right" />
      </button>
      <SwiperSlide>
        <Slide title={title} description={description} image={titleImage} />
      </SwiperSlide>
      {workSlides}
    </Swiper>
  );
}

export default WorkSlider;
