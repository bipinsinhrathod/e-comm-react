import React from "react";
 
export const product = [
  {
    id: 1,

    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fa1a24e8-ff57-43b1-ab1a-b929ee5b175b/air-jordan-legacy-312-low-shoes-v3FcRT.png",

    pTitle: "Air Force 5",
    lTitle: "Cesual Shoes For Men  (Grey)",
  },
  {
    id: 2,

    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31ff59e2-89d0-4a83-839a-656618674782/air-jordan-1-mid-shoes-SQf7DM.png",

    pTitle: "Air Jorden 3 High",
    lTitle: "Jordern Shoes For Men  (Black/Red)",
  },
  {
    id: 3,

    imgUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/65a5852e-2b51-4278-8e8a-8a1428e68491/jordan-stay-loyal-2-shoes-sDkgDk.png",

    pTitle: "Nike Air Run ",
    lTitle: "Running Shoes For Men  (White)",
  },
];

export const ProductCard = ({ product }) => (
  <div className="border  border-[#D3D4D5] w-auto h-auto transition-all duration-300 hover:shadow-2xl shadow-gray-200">
    <div className="w-[375px] overflow-hidden relative ">
      <div
        id="clickFade"
        className="absolute bg-[rgba(0, 0, 0, 0.5) ml-14 my-32 opacity-0 hover:opacity-100 z-10"
      >
        <button className="font-semibold w-64 h-12 bg-black text-white hover:bg-white hover:text-black transition-all mb-4 duration-300">
          Add to Cart
        </button>
        <button className="font-semibold w-64 h-12 bg-black text-white hover:bg-white hover:text-black transition-all duration-300">
          Buy Now
        </button>
      </div>
      <img
        className="object-cover h-[350px] hover:opacity-70 hover:scale-105 transition-all duration-500"
        width={"375px"}
        src={product.imgUrl}
        alt=""
      />
    </div>

    <div className="flex flex-col justify-center items-center ">
      <h1 className="font-bold m-4 text-2xl">{product.pTitle}</h1>

      <hr className="bg-[#D3D4D5] h-[2px] w-[80%] " />

      <p className="font-semibold m-2 text-md">{product.lTitle}</p>
    </div>
  </div>
);

function Product() {
  return (
    <>
      <div className="flex gap-10">
        {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Product;
