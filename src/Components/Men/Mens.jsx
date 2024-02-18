import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Men from "../Recommends/Men";
import { FilterThree } from "./FilterThree";
// import IMG from '../../Assests/Air-Jordan-Shoes-Images.jpg'

const Mens = () => {
  return (
    <>
      <Navbar />
{/* 
      <div className= "">
        <img className="ml-40 mt-10 mb-10 w-[80%]" src={IMG} alt="" />
      </div> */}

      <div className="flex justify-center bg-gray-200  items-center text-4xl font-bold p-5 max-lg:text-3xl max-md:text-2xl">
        <h1>We Recommend For Men's</h1>
      </div>

      <div className="flex">
        <div className="border  border-black w-1/4">
          <h1 className="text-center text-2xl mt-4">Men's Shoes</h1>
        </div>

        <div className="grid grid-cols-1 border p-4 border-black place-items-center max-xl:grid-cols-2 max-lg:grid-cols-1 max-lg:space-y-10">
          <div className="grid grid-cols-3 place-items-center gap-4 max-lg:gap-x-28 max-sm:gap-x-10 max-sm:ml-1 max-lg:ml-[4px]">
            <div className="border border-gray-200 hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden ">
              <img
                width={"400px"}
                className="h-[400px] object-cover hover:scale-105 transition-all duration-500"
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/54ff2b77-3635-4c89-99f5-963722644364/jordan-one-take-4-pf-shoes-v5trdl.png"
                alt=""
              />

              <div className="text-center">
                <p className="text-xl font-semibold">Title</p>
                <p className="text-lg font-semibold">
                  ₹2400
                  <span className="text-gray-500">
                    {" "}
                    <strike>₹4900</strike>
                  </span>
                </p>
                <button className="border border-black w-60 h-10 bg-black  text-white rounded-md hover:bg-gray-400 hover:text-black mb-4">Add To Cart</button>
              </div>
            </div>
            <div className="border border-gray-200 hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden">
              <img
                width={"500px"}
                className="h-[400px] object-cover  hover:scale-105 transition-all duration-500"
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/adf49d6b-77cf-48d0-9ef6-bb9c4474ad1e/air-jordan-6-aqua-shoes-4m3b9d.png"
                alt=""
              />

              <div className="text-center">
                <p className="text-xl font-semibold">Title</p>
                <p className="text-lg font-semibold">
                  ₹2400
                  <span className="text-gray-500">
                    {" "}
                    <strike>₹4900</strike>
                  </span>
                </p>

                <button className="border border-black w-60 h-10 bg-black  text-white rounded-md hover:bg-gray-400 hover:text-black mb-4">Add To Cart</button>
              </div>
            </div>
            <div className="border border-gray-200 hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden">
              <img
                width={"500px"}
                className="h-[400px] object-cover  hover:scale-105 transition-all duration-500"
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3f147f6b-32d0-4ba1-b73f-a083eed778ac/jordan-stadium-90-shoes-vnsjwJ.png"
                alt=""
              />

              <div className="text-center">
                <p className="text-xl font-semibold">Title</p>
                <p className="text-lg font-semibold">
                  ₹2400
                  <span className="text-gray-500">
                    {" "}
                    <strike>₹4900</strike>
                  </span>
                </p>
                <button className="border border-black w-60 h-10 bg-black  text-white rounded-md hover:bg-gray-400 hover:text-black mb-4">Add To Cart</button>
              </div>
            </div>


            <div className="border border-gray-200 hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden ">
              <img
                width={"400px"}
                className="h-[400px] object-cover hover:scale-105 transition-all duration-500"
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/54ff2b77-3635-4c89-99f5-963722644364/jordan-one-take-4-pf-shoes-v5trdl.png"
                alt=""
              />

              <div className="text-center">
                <p className="text-xl font-semibold">Title</p>
                <p className="text-lg font-semibold">
                  ₹2400
                  <span className="text-gray-500">
                    {" "}
                    <strike>₹4900</strike>
                  </span>
                </p>
                <button className="border border-black w-60 h-10 bg-black  text-white rounded-md hover:bg-gray-400 hover:text-black mb-4">Add To Cart</button>
              </div>
            </div>
            <div className="border border-gray-200 hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden">
              <img
                width={"500px"}
                className="h-[400px] object-cover  hover:scale-105 transition-all duration-500"
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/adf49d6b-77cf-48d0-9ef6-bb9c4474ad1e/air-jordan-6-aqua-shoes-4m3b9d.png"
                alt=""
              />

              <div className="text-center">
                <p className="text-xl font-semibold">Title</p>
                <p className="text-lg font-semibold">
                  ₹2400
                  <span className="text-gray-500">
                    {" "}
                    <strike>₹4900</strike>
                  </span>
                </p>

                <button className="border border-black w-60 h-10 bg-black  text-white rounded-md hover:bg-gray-400 hover:text-black mb-4">Add To Cart</button>
              </div>
            </div>
            <div className="border border-gray-200 hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden">
              <img
                width={"500px"}
                className="h-[400px] object-cover  hover:scale-105 transition-all duration-500"
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3f147f6b-32d0-4ba1-b73f-a083eed778ac/jordan-stadium-90-shoes-vnsjwJ.png"
                alt=""
              />

              <div className="text-center">
                <p className="text-xl font-semibold">Title</p>
                <p className="text-lg font-semibold">
                  ₹2400
                  <span className="text-gray-500">
                    {" "}
                    <strike>₹4900</strike>
                  </span>
                </p>
                <button className="border border-black w-60 h-10 bg-black  text-white rounded-md hover:bg-gray-400 hover:text-black mb-4">Add To Cart</button>
              </div>
            </div>


            <div className="border border-gray-200 hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden ">
              <img
                width={"400px"}
                className="h-[400px] object-cover hover:scale-105 transition-all duration-500"
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/54ff2b77-3635-4c89-99f5-963722644364/jordan-one-take-4-pf-shoes-v5trdl.png"
                alt=""
              />

              <div className="text-center">
                <p className="text-xl font-semibold">Title</p>
                <p className="text-lg font-semibold">
                  ₹2400
                  <span className="text-gray-500">
                    {" "}
                    <strike>₹4900</strike>
                  </span>
                </p>
                <button className="border border-black w-60 h-10 bg-black  text-white rounded-md hover:bg-gray-400 hover:text-black mb-4">Add To Cart</button>
              </div>
            </div>
            <div className="border border-gray-200 hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden">
              <img
                width={"500px"}
                className="h-[400px] object-cover  hover:scale-105 transition-all duration-500"
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/adf49d6b-77cf-48d0-9ef6-bb9c4474ad1e/air-jordan-6-aqua-shoes-4m3b9d.png"
                alt=""
              />

              <div className="text-center">
                <p className="text-xl font-semibold">Title</p>
                <p className="text-lg font-semibold">
                  ₹2400
                  <span className="text-gray-500">
                    {" "}
                    <strike>₹4900</strike>
                  </span>
                </p>

                <button className="border border-black w-60 h-10 bg-black  text-white rounded-md hover:bg-gray-400 hover:text-black mb-4">Add To Cart</button>
              </div>
            </div>
            <div className="border border-gray-200 hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden">
              <img
                width={"500px"}
                className="h-[400px] object-cover  hover:scale-105 transition-all duration-500"
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3f147f6b-32d0-4ba1-b73f-a083eed778ac/jordan-stadium-90-shoes-vnsjwJ.png"
                alt=""
              />

              <div className="text-center">
                <p className="text-xl font-semibold">Title</p>
                <p className="text-lg font-semibold">
                  ₹2400
                  <span className="text-gray-500">
                    {" "}
                    <strike>₹4900</strike>
                  </span>
                </p>
                <button className="border border-black w-60 h-10 bg-black  text-white rounded-md hover:bg-gray-400 hover:text-black mb-4">Add To Cart</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Men />

      <FilterThree/>

      <Footer />
    </>
  );
};

export default Mens;
