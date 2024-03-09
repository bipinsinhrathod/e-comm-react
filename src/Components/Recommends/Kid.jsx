import React from "react";
import { Link } from "react-router-dom";
import { RecommendForKids, RecommendForKids1 } from "../Data/AllData";

const Kids = () => {
  return (
    <>
      <div className="offerbanner text-white flex justify-center items-center text-4xl bg-gray-200 font-bold p-5 -mb-6 max-lg:text-3xl max-md:text-2xl">
        <h1>We Recommend For Kid's</h1>
      </div>

      <div className="grid grid-cols-3 place-items-center m-12
      max-sm:mx-5 max-xl:grid-cols-2 max-lg:grid-cols-1 max-lg:space-y-8">
        <div className="grid grid-cols-2 place-items-center gap-6 max-lg:gap-x-14 max-sm:gap-x-4">
          {RecommendForKids.map((item) => {
            return (
              <div className="border border-gray-200 hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden ">
                <div className="overflow-hidden">
                  <Link to={`/productoverview/${item.id}?type=recomended-kid`}>
                    <img
                      // width={"190px"}
                      className="h-[200px] w-56 object-cover hover:scale-105 transition-all duration-500"
                      src={item.imgUrl}
                      alt=""
                    />
                  </Link>
                </div>

                <div className="text-center mt-1">
                  <p className="text-xl font-semibold max-sm:text-base">{item.Ptitle}</p>
                  <p className="text-sm">{item.Pltitle}</p>
                  <p className="text-lg font-semibold max-sm:text-base">
                    ₹{item.Pprice}
                    <span className="text-gray-500">
                      {" "}
                      <strike>₹4900</strike>
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>



        <div className=" relative border border-gray-200 w-[90%] max-xl:w-[100%] hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden max-lg:w-[70%] max-sm:w-[90%]">
          <img
            width={"100%"}
            className=" hover:scale-105 transition-all duration-500"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9c026cce-aec1-4004-a400-d1dd0cfb0370/jumpman-mvp-older-shoes-dDSpM7.png"
            alt=""
          />

          <button className="bg-white text-black rounded w-20 h-8 absolute bottom-4 right-8 ">
            <Link to="/Kids">View All</Link>
          </button>
        </div>

        <div className="grid grid-cols-2 place-items-center gap-6 max-xl:hidden max-lg:grid max-lg:gap-x-14 max-sm:gap-x-4">
          {RecommendForKids1.map((item, index) => {
            return (
              <div className="border border-gray-200 hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden">
                  <Link to={`/productoverview/${item.id}?type=recomended-kid2`}>
                <div className="overflow-hidden">
                    <img
                      // width={"190px"}
                      className="h-[200px] w-56 object-cover  hover:scale-105 transition-all duration-500"
                      src={item.imgUrl}
                      alt=""
                    />
                </div>
                  </Link>

                <div className="text-center mt-1">
                  <p className="text-xl font-semibold max-sm:text-base">{item.Ptitle}</p>
                  <p className="text-sm">{item.Pltitle}</p>
                  <p className="text-lg font-semibold max-sm:text-base">
                    ₹{item.Pprice}
                    <span className="text-gray-500">
                      {" "}
                      <strike>₹4900</strike>
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};



export default Kids;
