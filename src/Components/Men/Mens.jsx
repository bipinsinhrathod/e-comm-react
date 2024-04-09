import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Men from "../Recommends/Men";
import { FilterThree } from "./FilterThree";
import { product } from "../Products/Product";
import man from "../../Assests/men-product.png"

const Mens = () => {
  return (
    <>
      <Navbar />
      {/* <div className="flex justify-center underline underline-offset-[20px] items-center text-4xl font-bold pt-12 -mb-6 max-lg:text-3xl max-md:text-2xl"> */}
        {/* <h1>All Product's For Men's</h1> */}
      {/* </div> */}

        <div className="w-full">
          <img className="w-full" src={man} alt="" />
        </div>
      <FilterThree />
      <Men />
      <Footer />
    </>
  );
};

export default Mens;
