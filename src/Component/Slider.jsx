// src/components/Slider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import DiscountCardRow from './DiscountCardRow';
import ProductGrid from './ProductGrid';
import ProductSlider from './ProductSlider';
import CategoriesSection from './CategoriesSection';



const Slider = () => {
  const slides = [
    { id: 1, image: 'https://assets.tatacliq.com/medias/sys_master/images/61699652091934.jpg' },
    { id: 2, image: 'https://assets.tatacliq.com/medias/sys_master/images/61695293456414.png' },
    { id: 3, image: 'https://assets.tatacliq.com/medias/sys_master/images/61699652091934.jpg' },
    { id: 4, image: 'https://assets.tatacliq.com/medias/sys_master/images/61699652288542.jpg' },
  ];

  return (
  <>
    <div className="w-full min-h-40 mt-5 mx-auto ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-96 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
    <CategoriesSection/>
    <DiscountCardRow/>
    <ProductSlider/>
    <ProductGrid/>
  </>
  );
};

export default Slider;