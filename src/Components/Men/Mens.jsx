import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Men from "../Recommends/Men";
import { FilterThree } from "./FilterThree";
import ProductOverviewTwo from "../Products/ProductOverviewTwo";

// import IMG from '../../Assests/Air-Jordan-Shoes-Images.jpg'

const Mens = () => {
  return (
    <>
      <Navbar />
    <div className="flex justify-center bg-gray-200  items-center text-4xl font-bold p-8 -mb-6 max-lg:text-3xl max-md:text-2xl">
        <h1>All Product's For Men's</h1>
      </div>
      <FilterThree/>
      <Men />
      <ProductOverviewTwo/>
      <Footer />
    </>
  );
};

export default Mens;
