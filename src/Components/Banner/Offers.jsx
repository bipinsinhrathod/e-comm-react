import React from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// import required modules
// import { Autoplay, EffectFlip, Mousewheel, Pagination } from 'swiper/modules';
import b1 from "../../Assests/light offer women.png";
import buyget from "../../Assests/buyget.png"
// import b2 from "../../Assests/Blank.png"
// import BannerSwiper from './BannerSwiper'
// import { MainBannerImg } from '../Data/AllData';

const OffersForWomen = () => {
  return (
    <>
      <section className="mb-5 overflow-x-hidden">
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="relative">
            <img  src={b1} alt="" />
            <button className="absolute right-9 rounded-lg bottom-6 bg-[#624635] text-white w-20 h-8">View All</button>
          </div>
          <div className="blank">
            {/* <Swiper    effect={'flip'}
        grabCursor={true}
        modules={[EffectFlip,Autoplay]}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper  mt-9 ">
      {
        MainBannerImg.map((item)=>{
       return <SwiperSlide ><img className='w-[80%]' src={item.img} alt="" /></SwiperSlide>
        })
      }
      </Swiper> */}
      <img src={buyget} alt="" />
          
          </div>
        </div>
      </section>
    </>
  );
};

export default OffersForWomen;
