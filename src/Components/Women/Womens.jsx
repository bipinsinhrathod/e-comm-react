import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Women from "../Recommends/Women";
// import { FilterThree } from "../Men/FilterThree";
import Filter from "./Filter"
import womenbanner from "../../Assests/women-banner.png"

const Womens = () => {
  return (
    <>
      <Navbar />

      {/* <div className="flex justify-center items-center text-4xl font-bold pt-12 underline underline-offset-[20px] -mb-6 max-lg:text-3xl max-md:text-2xl">
        <h1>All Product's For Women's</h1>
      </div> */}
      <div className="w-full">
          <img className="w-full" src={womenbanner} alt="" />
        </div>

      {/* <FilterThree /> */}
      <Filter/>
      <Women />

      <Footer />
    </>
  );
};

export default Womens;
