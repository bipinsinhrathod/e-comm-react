import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-flip';

import { EffectFlip, Autoplay } from 'swiper/modules';
import { MainBannerImg } from '../Data/AllData';


const BannerSwiper = () => {
  return (
    <>
    
      <Swiper   effect={'flip'}
        grabCursor={true}
        modules={[EffectFlip,Autoplay]}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper">
      {
        MainBannerImg.map((item)=>{
       return <SwiperSlide><img src={item.img} alt="" /></SwiperSlide>
        })
      }
      </Swiper>
    </>
  )
}

export default BannerSwiper
