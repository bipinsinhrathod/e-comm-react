import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Kid from "../Recommends/Kid";
import FilterKid from "./FilterKid";
// import { FilterThree } from "../Men/FilterThree";
import kidbanner from "../../Assests/kids-banner.png"

const Kids = () => {
  return (
    <>
      <Navbar />

      {/* <div className="flex justify-center  items-center text-4xl font-bold pt-12 underline underline-offset-[20px] -mb-6 max-lg:text-3xl max-md:text-2xl">
        <h1>All Product's For Kid's</h1>
      </div> */}

      <div className="w-full">
          <img className="w-full" src={kidbanner} alt="" />
        </div>

      {/* <FilterThree /> */}
      <FilterKid/>


      <Kid />

      <Footer />
    </>
  );
};

export default Kids;
