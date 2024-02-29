import React from "react";
import {
  ExpandMore,
  ShoppingCart,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import { WomenAllProducts } from "../Data/AllData";
import { Link } from "react-router-dom";

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals" },
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "pants-shorts", label: "Pants & Shorts" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];

 function Filter() {
  return (
    <section className="">
      <div className="mx-auto max-w-8xl px-2 py-10 lg:px-10  ">
        {/* Top */}
        <div className=" md:flex md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-xl font-bold">Products</h1>
          </div>
          <div className="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0 ">
            <button
              type="button"
              className="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex"
            >
              Sort <ExpandMore className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Category <ExpandMore className="ml-2 h-4 w-4" />
            </button>

            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Color <ExpandMore className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Size <ExpandMore className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex">
          <div className=" hidden space-y-6 w-[20%] h-[50%] divide-y lg:col-span-3 lg:block">
            {filters.map((filter) => (
              <div key={filter.id} className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {filter.name}
                </h3>
                <ul className="mt-2">
                  {filter.options.map((option) => (
                    <li
                      key={option.value}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="flex items-center">
                        <input
                          id={`${filter.id}-${option.value}`}
                          name={`${filter.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                        />
                        <label
                          htmlFor={`${filter.id}-${option.value}`}
                          className="ml-3 text-sm font-medium text-gray-900"
                        >
                          {option.label}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className=" w-full rounded-lg px-2 lg:col-span-9 lg:h-[30%] overflow-y-scroll scroll-smooth max-h-[150vh]">
            <div className="grid grid-cols-3 place-items-center gap-4 max-lg:gap-x-28 max-sm:gap-x-10 max-sm:ml-1 max-lg:ml-[4px] ">
              {WomenAllProducts.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="border border-gray-200 hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden "
                  >
                    <Link to={`/productoverview/${item.id}?type=recomended-WomenAll`}>
                      <div className="overflow-hidden">
                        <img
                          width={"400px"}
                          className="h-[380px] object-cover hover:scale-105 transition-all duration-500"
                          src={item.imgUrl}
                          alt=""
                        />
                      </div>
                    </Link>

                    <div className="text-center">
                      <p className="text-xl font-semibold">{item.Ptitle}</p>
                      <p className="text-lg font-semibold">
                        ₹{item.Pprice}
                        <span className="text-gray-500">
                          {" "}
                          <strike>₹4900</strike>
                        </span>
                      </p>
                      <div className="flex flex-col justify-center relative ">
                        <button className=" mx-auto text-sm font-bold w-[90%] bg-black h-[40px] my-2 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-300 before:to-zinc-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#fff]">
                          Add to Cart
                          <ShoppingCart className="mx-2 scale-90" />
                        </button>

                        <button className=" mx-auto text-sm font-bold w-[90%]  bg-zinc-300 h-[40px] my-1 flex items-center justify-center rounded-md cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-300 before:to-red-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-[#000]">
                          Buy Now
                          <ShoppingCartCheckout className="mx-2 scale-90" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filter