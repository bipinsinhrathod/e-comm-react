import React from "react";
import Amazon from "../../Assests/amazon.png"
import Flipcart from "../../Assests/flipkart.png"
// import Hero from "../../Assests/hero-image.png"
// import Shoes from "../../Assests/shoesbgr.png.jpg"
import BannerSwiper from "./BannerSwiper";

const NewBanner = () => {
  return (
    <>
      <main className="xxx grid grid-cols-2 items-center ">
        <div className="m-10 space-y-8 ">
          <h1 className="text-8xl text-start font-bold w-2/2 ml-20">YOUR FEET DESERVE THE BEST</h1>
          <p className="text-start font-semibold ml-20">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className=" ml-20 space-x-10 font-semibold ">
            <button className="bg-red-600 w-28 h-10 rounded-lg hover:scale-110 transition-all duration-300 ">Shop Now </button>
            <button className="w-28 h-10 border border-black rounded-lg hover:scale-110 transition-all duration-300">Category</button>
          </div>

          <div className=" ml-20 font-bold">
            <p>Also Available On</p>

            <div className="flex mt-2 space-x-4">
              <img src={Amazon} alt="amazon-logo" />
              <img src={Flipcart} alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="mr-2">
          <BannerSwiper/>
        </div>
      </main>
    </>
  );
};



export default NewBanner;
