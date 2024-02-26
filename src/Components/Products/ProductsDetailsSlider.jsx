import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import { ManAllProducts } from '../Data/AllData';
const SingleProductCarousal = () => {


    const { id } = useParams();
    // console.log("id:", id);
    // console.log("items:", ManAllProducts);

    const product = ManAllProducts.find((item) => item.id === parseInt(id));
    const { imgUrl, imgUrl2, imgUrl3, imgUrl4 } = product;
    // const productPage = "Men";

    

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img className="w-full h-full object-cover" src={imgUrl} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={imgUrl2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={imgUrl3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={imgUrl4} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SingleProductCarousal;