import React, { useEffect, useState } from "react";
import {
  FavoriteBorderOutlined,
  KeyboardArrowDown,
  ShoppingCartOutlined,
  Home,
  Star,
} from "@mui/icons-material/";
import Navbar from "../Navbar/Navbar";
import { Link, useParams, useLocation } from "react-router-dom";
import {
  RecommendForMen,
  RecommendForWomen,
  RecommendForMen2,
  RecommendForWomen2,
  RecommendForKids,
  RecommendForKids1,
  ManAllProducts,
  WomenAllProducts,
  KidsAllProducts,
} from "../Data/AllData";
import ProductsDetailsSlider from "./ProductsDetailsSlider";

const ProductOverView = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const [product, setProduct] = useState({});
  const [section, setSection] = useState()
  const productType = new URLSearchParams(search).get("type");

  useEffect(() => {
    switch (productType) {
      case "recomended":
        const forMen = RecommendForMen?.find(
          (item) => item.id === parseInt(id)
          );
          setProduct(forMen);
          setSection("Men");
        break;
      case "recomended-men2":
        const forMen2 = RecommendForMen2?.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(forMen2);
        setSection("Men")
        break;
      case "recomended-women":
        const forWomen = RecommendForWomen?.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(forWomen);
        setSection("Women")
        break;
      case "recomended-women2":
        const forWomen2 = RecommendForWomen2?.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(forWomen2);
        setSection("Women")
        break;
      case "recomended-kid":
        const forKid = RecommendForKids?.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(forKid);
        setSection("Kid")
        break;
      case "recomended-kid2":
        const forKid2 = RecommendForKids1?.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(forKid2);
        setSection("Kid")
        break;
      case "men":
        const forMenAll = ManAllProducts?.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(forMenAll); 
        setSection("Men")
        break;
      case "women":
        const forWomenAll = WomenAllProducts?.find(
          (item) => item.id === parseInt(id)
        );
        setProduct(forWomenAll);
        setSection("Women")
        break;
        case "kid":
          const forKidAll = KidsAllProducts?.find(
            (item) => item.id === parseInt(id)
          );
          setProduct(forKidAll);
          setSection("kid")
          break;
      default:
        setProduct({});
    }
  }, []);

  // const products = gender === 'men' ? ManAllProducts : RecommendForWomen;
  // const product = ManAllProducts.find((item) =>item.id === parseInt(id));

  // Check if product exists before attempting to destructure its properties

  return !product ? (
    <div>No product found</div>
  ) : (
    <>
      <Navbar />
      <section className="grid grid-cols-2 items-center max-lg:grid-cols-1">
        <div className="flex justify-end w-4/6 h-[90%] rounded-2xl overflow-hidden  mx-auto max-xl:w-[90%] max-lg:w-[80%]">
          {/* <img  className='w-full object-cover rounded-xl'src={imgUrl} alt="" /> */}
          <ProductsDetailsSlider images={product?.sliderImages} />
        </div>

        <div className="space-y-4 w-[95%]  max-xl:w-4/5  mx-auto ">
          <div className="flex space-x-4 font-semibold">
            <span>
              <Home />
            </span>
            <Link to="/" className="underline underline-offset-8">
              Home
            </Link>
            <span>/</span>
            <Link to={`/${section}`}  className="underline underline-offset-8">
              {section}
            </Link>
            <span>/</span>
            <p className="underline underline-offset-8">
              
            </p>

          </div>
          <p className="text-4xl font-bold max-md:text-3xl">
            {product?.Ptitle}
          </p>
          <p className="text-start max-lg:w-[90%]">{product?.Pdetails}</p>
          <p className="text-xl font-bold">Highlights</p>
          <div className="my-4 flex items-center">
            <span className="flex items-center space-x-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-500" />
              ))}
              <span className="ml-3 inline-block text-xs mt-1 font-semibold">
                4 Reviews
              </span>
            </span>
          </div>
          <ul className="list-disc ml-4 space-y-2">
            <li>Made withfull cotton</li>
            <li>Slim fit for any body</li>
            <li>Quality control by JC </li>
          </ul>

          <div className="flex space-x-10 bg-gray-200 px-8 py-3 border border-slate-500 rounded-lg items-center w-3/4 justify-around max-md:w-full max-[1130px]:w-[90%] max-sm:text-sm max-sm:space-x-5">
            <div>
              <p className="font-bold text-xl max-sm:text-lg">color </p>{" "}
              <span className="text-lg max-sm:text-sm max-sm:font-semibold">
                white
              </span>
            </div>
            <div className="relative ">
              <select className="appearance-none rounded border-2 font-bold  border-black py-2 pl-3 pr-10 text-md focus:border-black focus:outline-none  focus:ring-black">
                <option>Size</option>
                <option>8 UK</option>
                <option>9 UK</option>
                <option>10 UK</option>
              </select>
              <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                <KeyboardArrowDown size={16} />
              </span>
            </div>
            {/* <span className='text-lg' >40</span> */}

            <div>
              <p className="text-3xl font-bold max-sm:text-xl">
                ₹{product?.Pprice}/-
              </p>
            </div>
          </div>

          <div className="space-y-3 max-sm:grid">
            <span></span>
            <Link to={`/addtocart/${product?.id}`}>
              <button className="border-2 border-black font-bold w-44 h-11 rounded-xl pt-1 max-sm:w-full ">
                <ShoppingCartOutlined className="mb-1 scale-90" /> Add to cart
              </button>
            </Link>

            <button className="bg-black w-44 h-11 rounded-xl pt-1 ml-5 text-white max-sm:ml-0 max-sm:w-full">
              <FavoriteBorderOutlined className="mb-1 scale-90" /> Add to
              wishlist
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductOverView;
