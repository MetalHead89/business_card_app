import { Swiper, SwiperSlide } from 'swiper/react';
import { PortfolioScreenWork } from '../PortfolioScreenSlice';
import Slide from '../Slide/Slide';
import './WorkSlider.scss';

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
    <Swiper navigation pagination={{ clickable: true }} loop={true}>
      <SwiperSlide>
        <Slide title={title} description={description} image={titleImage} />
      </SwiperSlide>
      {workSlides}
    </Swiper>
  );
}

export default WorkSlider;
