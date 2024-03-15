import React, { useState, useEffect, useRef } from "react";
import logo from "../../Assests/logo4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faHeart,
  faMagnifyingGlass,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import Offer from "./Offer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const node = useRef(); 

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Offer />

      <section className="flex justify-evenly items-center shadow-xl border py-3 sticky top-0 z-10 bg-white">
        <div className="flex items-center max-sm:ml-3">
        <Link to="/">

          <img
            className="w-16 scale-125 cursor-pointer hover:scale-150 transition-all duration-300  "
            src={logo}
            alt=""
          />
        </Link>
        </div>
        <div className="flex space-x-8  ml-60 max-xl:ml-0 max-lg:hidden ">
          <Link
            to="/"
            className="font-bold text-red-700 hover:text-black  hover:underline underline-offset-4 hover:-translate-y-1 transition-all duration-300"
            href=""
          >
            Home
          </Link>
          <Link
            to="/men"
            className="font-semibold hover:text-red-600 hover:underline underline-offset-4 hover:-translate-y-1 transition-all duration-300"
            href=""
          >
            Men
          </Link>
          <Link
            to="/women"
            className="font-semibold hover:text-red-600 hover:underline underline-offset-4 hover:-translate-y-1 transition-all duration-300"
            href=""
          >
            Women
          </Link>
          <Link
            to="/Kids"
            className="font-semibold hover:text-red-600 hover:underline underline-offset-4 hover:-translate-y-1 transition-all duration-300"
            href=""
          >
            Kid
          </Link>
          <Link
            to="/about"
            className="font-semibold text-gray-500 hover:text-red-600 hover:underline underline-offset-4 hover:-translate-y-1 transition-all duration-300"
            href=""
          >
            About
          </Link>
          <Link
            to="/Contectus"
            className="font-semibold text-gray-500 hover:text-red-600 hover:underline underline-offset-4 hover:-translate-y-1 transition-all duration-300"
            href=""
          >
            Contact
          </Link>
       </div>
        <div className="flex items-center gap-2 max-lg:ml-44 max-sm:ml-44  ">
          <div className="relative max-sm:hidden ">
            <input
              type="text"
              placeholder="Search Items"
              className=" border pl-7 h-8 rounded-2xl bg-gray-200"
            />
            <FontAwesomeIcon
              className="absolute left-2 top-2"
              icon={faMagnifyingGlass}
            />
          </div>
          <div className="space-x-4 ">
            <FontAwesomeIcon icon={faHeart} />
            <Link to="/cart">
            <FontAwesomeIcon icon={faBagShopping} />
            </Link>
            <Link to="/signupone">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" hover:text-red-600 hover:scale-110 transition-all duration-300 hidden max-lg:inline-block"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        <div className="2xl:hidden xl:hidden " ref={node}>
          {isOpen && (
            <div
              className={`flex flex-col absolute z-10 bg-zinc-200 w-full h-[100vh] items-center text-center top-0  font-semibold right-0 ${
                isOpen ? "block" : "hidden"
              } `}
            >
              {/* <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-red-600 font-semibold text-2xl hover:text-blue-500 hover:scale-125 transition-all duration-500"
              >
                
              </button> */}
              <FontAwesomeIcon icon={faXmark} className="absolute right-10 top-5 text-3xl cursor-pointer hover:text-red-600 hover:scale-125 transition-all duration-300" onClick={() => setIsOpen(!isOpen)}/>


                <div className="flex flex-col items-center space-y-10 py-20">
                <Link className="hover:text-red-600 text-red-700 font-bold text-2xl hover:scale-125 transition-all duration-500" to="/">Home</Link>
                <Link className="hover:text-red-600 hover:scale-150 transition-all duration-500" to="/men">Man's</Link>
                <Link className="hover:text-red-600 hover:scale-150 transition-all duration-500" to="/women">Women's</Link>
                <Link className="hover:text-red-600 hover:scale-150 transition-all duration-500" to="/kids">Kid's</Link>
                <Link  className="hover:text-red-600 hover:scale-150 transition-all duration-500" to="/About"> About </Link>    
                <Link  className="hover:text-red-600 hover:scale-150 transition-all duration-500" to ="/ContectUs">Contect Us</Link>
                </div>
              
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Navbar;
