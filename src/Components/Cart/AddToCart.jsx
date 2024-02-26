import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  FavoriteBorderOutlined,
  DeleteOutlined,
  Star,
} from "@mui/icons-material/";
import { useParams } from "react-router-dom";
import { ManAllProducts } from "../Data/AllData";

const AddToCart = () => {
    const {id} = useParams(); 

    const product = ManAllProducts.find((item)=>item.id===parseInt(id));

    if (!product){
        return <div>No product found with the specified ID</div>
    }

    const {imgUrl, Ptitle , Pprice} = product;
  return (
    <>
      <Navbar />
      <section className="flex flex-wrap justify-evenly  ">
        <div className="flex flex-col mt-16  ">
          <p className="text-4xl font-semibold ">Bag</p>
          <div className="flex  space-x-2 ">
            <div className="">
              <img
                className="w-44 h-48 object-cover"
                src={imgUrl}
                alt=""
              />
            </div>
            <div className=" space-y-2">
              <div className="flex justify-between  font-bold">
                <p>{Ptitle}</p>
                <p>MRP : ₹ {Pprice}</p>
              </div>
              <div className="space-y-2">
                <p>Basket ball shoes</p>
                <div className="my-4 flex items-center">
                  <span className="flex items-center space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500" />
                    ))}
                    <span className="ml-3 inline-block text-md mt-1 font-semibold">
                      4 Reviews
                    </span>
                  </span>
                </div>
                <p>Black /Bright gray / Wolf Gray/ White</p>
              </div>
              <div className="flex space-x-10">
                <p className="font-bold">
                  <select name="" id="" className="w-16">
                    <option value="">Size</option>
                    <option value="">Uk 8</option>
                    <option value="">Uk 9</option>
                    <option value="">Uk 10</option>
                  </select>
                </p>
                <p className="font-bold">
                  <select name="" id="" className="w-24">
                    <option value="">Quantity</option>
                    <option value="">Qty 1</option>
                    <option value="">Qty 2</option>
                    <option value="">Qty 3</option>
                    <option value="">Qty 4</option>
                    <option value="">Qty 5</option>
                  </select>
                </p>
              </div>
              <div className="flex space-x-5">
                <p>
                  <FavoriteBorderOutlined />
                </p>
                <p>
                  <DeleteOutlined />
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-6 mb-4 w-full " />

          <p className="text-4xl font-semibold ">Favourites</p>
          <div className="flex justify-center ">
            <div className="flex   space-x-2">
              <div className="">
                <img
                  className="w-44 h-48 object-cover"
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/45a514f0-46e0-4838-bb88-6ac46968b0c5/infinity-flow-older-running-shoes-pJFp3m.png"
                  alt=""
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between font-bold">
                  <p>Nike impext 4</p>
                  <p>MRP : ₹ 8500/-</p>
                </div>
                <div className="space-y-2">
                  <p>basket ball shoes</p>
                  <div className="my-4 flex items-center">
                    <span className="flex items-center space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-500" />
                      ))}
                      <span className="ml-3 inline-block text-md mt-1 font-semibold">
                        4 Reviews
                      </span>
                    </span>
                  </div>
                  <p>Black /Bright gray / Wolf Gray/ White</p>
                </div>
                <div className="flex space-x-10">
                  <p className="font-bold">
                    <select name="" id="" className="w-16">
                      <option value="">Size</option>
                      <option value="">Uk 8</option>
                      <option value="">Uk 9</option>
                      <option value="">Uk 10</option>
                    </select>
                  </p>
                  <p className="font-bold">
                    <select name="" id="" className="w-24">
                      <option value="">Quantity</option>
                      <option value="">Qty 1</option>
                      <option value="">Qty 2</option>
                      <option value="">Qty 3</option>
                      <option value="">Qty 4</option>
                      <option value="">Qty 5</option>
                    </select>
                  </p>
                </div>
                <button className="text-sm font-semibold w-32  bg-black h-9 flex items-center justify-center rounded-3xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-300 before:to-red-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-white">
                  Add To Bag{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col mt-16 space-y-3">
          <p className="text-4xl font-semibold">Summary</p>
          <div className="flex justify-between">
            <p>Subtotal </p>
            <p>₹ 8500</p>
          </div>
          <div className="flex justify-between">
            <p>Estimated Delivery & Handling</p>
            <p>₹ 1250</p>
          </div>
          <hr />
          <div className="flex justify-between p-2">
            <p>Total </p>
            <p>₹ 9480</p>
          </div>
          <hr className="h-8" />
          <button className=" mx-auto text-md font-bold w-[90%]  bg-black h-12 flex items-center justify-center rounded-3xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-300 before:to-red-300 hover:text-black before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 text-white">
            Member CheckOut
          </button>
        </div>
      </section>
    </>
  );
};

export default AddToCart;
