import React from "react";
import Instagram1 from "../../Assests/instagram.png";
import Facebook from "../../Assests/facebook.png";
import Logo from "../../Assests/l1.png";
import Tweeter from "../../Assests/twitter.png";
import Youtube from "../../Assests/youtube.png";
import Location from "../../Assests/google-maps.png";
import Phone from "../../Assests/phone-call.png";
import Mail from "../../Assests/gmail.png";
import Arrow from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-4 justify-around bg-gray-800 text-white py-20 mt-10 max-[970px]:grid-cols-2 max-sm:grid-cols-1  ">
        <div className="flex flex-col justify-center items-center w-30 ">
          <img
            className=" hover:scale-125 transition-all duration-700"
            width={130}
            src={Logo}
            alt=""
          />
          <h1 className="">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipisicing elit, <br />
            Lorem ipsum dolor sit amet.
          </h1>
          <div className="flex mt-3 gap-2">
            <a className="flex justify-center items-center" href="">
              <img
                className=" hover:scale-125 transition-all duration-300"
                width={20}
                src={Facebook}
                alt=""
              />
            </a>

            <a className="flex justify-center items-center" href="">
              <img
                className="hover:scale-125 transition-all duration-300"
                width={30}
                src={Instagram1}
                alt=""
              />
            </a>
            <a className="flex justify-center items-center" href="">
              <img
                className="hover:scale-125 transition-all duration-300"
                width={20}
                src={Tweeter}
                alt=""
              />
            </a>
            <a className="flex justify-center items-center ml-1" href="">
              <img
                className="ml-0.5 hover:scale-125 transition-all duration-300"
                width={27}
                src={Youtube}
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col  items-center">
          <h1 className="mb-4 text-2xl hover:scale-125 transition-all duration-500 cursor-pointer max-sm:mt-6">
            Address
          </h1>

          <a
            className="flex gap-1 justify-center items-center m-1 hover:scale-110 transition-all duration-500"
            href=""
          >
            {" "}
            <img width={20} src={Location} alt="" /> Gota , Ahmedabad{" "}
          </a>
          <a
            className="flex gap-1 justify-center items-center m-1 hover:scale-110 transition-all duration-500"
            href=""
          >
            <img width={20} src={Phone} alt="" />
            +91 7285081412
          </a>
          <a
            className="flex gap-1 justify-center items-center m-1 hover:scale-110 transition-all duration-500"
            href=""
          >
            <img width={20} src={Mail} alt="" />
            bipinrajput548@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center max-[970px]:mt-10">
          <div className="flex flex-col text-start">
            <h1 className="mb-4 text-2xl hover:scale-125 transition-all duration-500 cursor-pointer">
              Quick Links
            </h1>
            <a className="hover:scale-110 transition-all duration-500">
              <Arrow className="flex mb-1 " /> <Link to="/About">About Us</Link>
            </a>
            <a className="hover:scale-110 transition-all duration-500" href="">
              <Arrow className="flex mb-1" /> <Link to="/Contectus">Contact Us</Link>
            </a>
            <a className="hover:scale-110 transition-all duration-500" href="">
              <Arrow className="flex mb-1" /> <Link to="/Services">Our Service</Link>
            </a>
            <a className="hover:scale-110 transition-all duration-500" href="">
              <Arrow className="flex mb-1" /> Terms & Conditions{" "}
            </a>
            <a className="hover:scale-110 transition-all duration-500" href="">
              <Arrow className="flex mb-1" /> Support
            </a>
          </div>
        </div>
        <div className="grid  place-items-center">
          <h1 className="text-2xl hover:scale-105 transition-all duration-500 cursor-pointer max-[1315px]:w-[80%] max-[1315px]:text-center max-[970px]:mt-10 max-[970px]:text-center">
            Subscribe To Our NewsLetter
          </h1>
          <form className="my-5">
            <input
              className="h-10 w-80 text-center transition-all hover:scale-105 duration-300 rounded-md max-[1315px]:w-[200px]"
              placeholder=" Enter your email "
              type="email"
              id="email"
              name="email"
            />
          </form>

          <button
            className="text-black font-semibold mt-3 transition-all hover:scale-105 duration-300 hover:shadow-gray-400 shadow-2xl  max-[1315px]:w-20  max-[1315px]:h-7 max-[1315px]:-mt-2 max-[1315px]:text-sm  bg-green-400 w-28 rounded-xl h-10"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </div>

      <hr />
      <div className="flex justify-center items-center bg-gray-800 text-white p-3">
        <h1>Thank You For Visiting Our Website ! </h1>
      </div>
    </>
  );
};

export default Footer;
