import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const SwiperProduct = [
  {
    id: 1,

    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fa1a24e8-ff57-43b1-ab1a-b929ee5b175b/air-jordan-legacy-312-low-shoes-v3FcRT.png",

    pTitle: "Air Force 5",
    lTitle: "Cesual Shoes For Men  (Grey)",
  },
  {
    id: 2,

    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31ff59e2-89d0-4a83-839a-656618674782/air-jordan-1-mid-shoes-SQf7DM.png",

    pTitle: "Air Jorden 3 High",
    lTitle: "Jordern Shoes For Men  (Black/Red)",
  },
  {
    id: 3,

    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/65a5852e-2b51-4278-8e8a-8a1428e68491/jordan-stay-loyal-2-shoes-sDkgDk.png",

    pTitle: "Nike Air Run ",
    lTitle: "Running Shoes For Men  (White)",
  },
  {
    id: 4,

    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/65a5852e-2b51-4278-8e8a-8a1428e68491/jordan-stay-loyal-2-shoes-sDkgDk.png",

    pTitle: "Nike Air Run ",
    lTitle: "Running Shoes For Men  (White)",
  },
  {
    id: 5,

    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fa1a24e8-ff57-43b1-ab1a-b929ee5b175b/air-jordan-legacy-312-low-shoes-v3FcRT.png",

    pTitle: "Air Force 5",
    lTitle: "Cesual Shoes For Men  (Grey)",
  },
  {
    id: 6,

    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31ff59e2-89d0-4a83-839a-656618674782/air-jordan-1-mid-shoes-SQf7DM.png",

    pTitle: "Air Jorden 3 High",
    lTitle: "Jordern Shoes For Men  (Black/Red)",
  },
];

const SwiperP = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={-200}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        autoplay={{ delay: 1000 }}
        className="mySwiper"
      >
        {SwiperProduct.map((item) => {
          return (
            <>
              <SwiperSlide>
                <div className="border  border-[#D3D4D5] w-[411px] ml-10    transition-all duration-300 hover:shadow-2xl shadow-gray-200 mt-11 mb-14">
                  <div className=" overflow-hidden  w-[410px] h-[400px]">
                    <img
                      className="object-cover hover:opacity-70 hover:scale-105 transition-all duration-500"
                      src={item.imgUrl}
                      alt=""
                    />
                  </div>

                  <div className="flex flex-col justify-center items-center ">
                    <h1 className="font-bold m-4 text-2xl">{item.pTitle}</h1>

                    <hr className="bg-[#D3D4D5] h-[2px] w-[80%] " />

                    <p className="font-semibold m-2 text-md">{item.lTitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperP;
