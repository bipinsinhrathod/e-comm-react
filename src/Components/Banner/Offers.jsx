import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, EffectFlip, Mousewheel, Pagination } from 'swiper/modules';
import b1 from "../../Assests/nnnnnnnnnn.png"
// import b2 from "../../Assests/Blank.png"
// import BannerSwiper from './BannerSwiper'
import { MainBannerImg } from '../Data/AllData';


const Offers = () => {
  return (
    <>
      <section className='mb-5'>
        <div className='grid grid-cols-2'>
            <div className=''>
                <img src={b1} alt="" />
            </div>
            <div className='blank'>
            <Swiper    effect={'flip'}
        grabCursor={true}
        modules={[EffectFlip,Autoplay]}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper ">
      {
        MainBannerImg.map((item)=>{
       return <SwiperSlide><img className='w-[90%]' src={item.img} alt="" /></SwiperSlide>
        })
      }
      </Swiper>
            </div>
        </div>
      </section>
    </>
  )
}

export default Offers
