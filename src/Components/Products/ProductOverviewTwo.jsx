import { KeyboardArrowDown, Star } from "@mui/icons-material";
import React from "react";
import { ManAllProducts } from "../Data/AllData";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export const ProductOverviewTwo = () => {
  const { id } = useParams();
  const product = ManAllProducts.find((item) => item.id == id);

  // Check if product exists before attempting to destructure its properties
  if (!product) {
    return <div>No product found with the specified ID</div>;
  }

  const { imgUrl, Ptitle, Pltitle, Pprice } = product;

  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-gray-200  items-center text-4xl font-bold p-8 -mb-6 max-lg:text-3xl max-md:text-2xl">
        <h1>Product's Detail's</h1>
      </div>
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 py-24">
          <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
            <img
              alt="Product"
              className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
              src={imgUrl}
            />
            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
              <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                {Ptitle}
              </h2>
              <h1 className="my-4 text-3xl font-semibold text-black">
                {Pltitle}
              </h1>
              <div className="my-4 flex items-center">
                <span className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500" />
                  ))}
                  <span className="ml-3 inline-block text-xs font-semibold">
                    4 Reviews
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur rem amet repudiandae neque adipisci eum enim, natus illo
                inventore totam?
              </p>
              <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                <div className="flex items-center">
                  <span className="mr-3 text-sm font-semibold">Color</span>
                  <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                  <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                  <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
                </div>
                <div className="ml-auto flex items-center">
                  <span className="mr-3 text-sm font-semibold">Size</span>
                  <div className="relative">
                    <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                      <option>8 UK</option>
                      <option>9 UK</option>
                      <option>10 UK</option>
                    </select>
                    <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                      <KeyboardArrowDown size={16} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="title-font text-xl font-bold text-gray-900">
                  ₹{Pprice}{" "}
                  <strike className="text-red-500 font-semibold text-lg">
                    ₹5000
                  </strike>
                </span>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductOverviewTwo;
