import React from 'react'
import { ExpandMore } from '@mui/icons-material'

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals' },
      { value: 'tees', label: 'Tees' },
      { value: 'crewnecks', label: 'Crewnecks' },
      { value: 'sweatshirts', label: 'Sweatshirts' },
      { value: 'pants-shorts', label: 'Pants & Shorts' },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: '2xl', label: '2XL' },
    ],
  },
]

export function FilterThree() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-8xl px-2 py-10 lg:px-10">
        {/* Top */}
        <div className=" md:flex md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-xl font-bold">Products</h1>
          </div>
          <div className="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
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
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
          <div className=" hidden space-y-6 divide-y lg:col-span-3 lg:block">
            {filters.map((filter) => (
              <div key={filter.id} className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900">{filter.name}</h3>
                <ul className="mt-2">
                  {filter.options.map((option) => (
                    <li key={option.value} className="flex items-center justify-between py-2">
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
          <div className="h-[400px] w-full rounded-lg border-2 border-black px-2 lg:col-span-9 lg:h-[60%] overflow-y-scroll scroll-smooth">
          <div className="grid grid-cols-3 place-items-center gap-4 max-lg:gap-x-28 max-sm:gap-x-10 max-sm:ml-1 max-lg:ml-[4px]">
            <div className="border border-gray-200 hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden ">
              <img
                width={"400px"}
                className="h-[380px] object-cover hover:scale-105 transition-all duration-500"
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
            <div className="border border-gray-200 hover:shadow-2xl shadow-gray-200 transition-all duration-300 overflow-hidden ">
              <img
                width={"400px"}
                className="h-[380px] object-cover hover:scale-105 transition-all duration-500"
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
                className="h-[380px] object-cover  hover:scale-105 transition-all duration-500"
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
                className="h-[380px] object-cover  hover:scale-105 transition-all duration-500"
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
                className="h-[380px] object-cover hover:scale-105 transition-all duration-500"
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
                className="h-[380px] object-cover  hover:scale-105 transition-all duration-500"
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
                className="h-[380px] object-cover  hover:scale-105 transition-all duration-500"
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
                width={"500px"}
                className="h-[380px] object-cover hover:scale-105 transition-all duration-500"
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
                className="h-[380px] object-cover  hover:scale-105 transition-all duration-500"
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
                className="h-[380px] object-cover  hover:scale-105 transition-all duration-500"
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
      </div>
    </section>
  )
}
