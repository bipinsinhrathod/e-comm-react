import React, { useState, useEffect, useRef } from "react";
import logo from "../../Assests/logo4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faHeart,
  faMagnifyingGlass,
  faUser,
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

      <section className="flex justify-evenly items-center shadow-xl border h-16 max-lg:justify-between max-lg:px-8 max-sm:px-10 sticky top-0 z-10 bg-white">
        <div className="flex items-center">
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
        <div className="flex items-center gap-4 max-lg:ml-44 max-sm:ml-56  ">
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
            <FontAwesomeIcon icon={faBagShopping} />
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
              className={`grid grid-cols-1 absolute z-10 bg-zinc-200 w-60 h-96 items-center text-center rounded-xl top-2  font-semibold right-4 ${
                isOpen ? "block" : "hidden"
              } `}
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-red-600 font-semibold text-2xl hover:text-blue-500 hover:scale-125 -mb-5 transition-all duration-500"
              >
                Close
              </button>

              <hr className="bg-black h-[2px] " />

              <a className="hover:text-red-600 hover:scale-150 transition-all duration-500">
                <Link to="/">Home</Link>
              </a>

              <div className="dropdown inline-block relative">
                <button className=" hover:text-red-600 hover:scale-125 transition-all duration-300">
                  Product
                </button>
                <div className="dropdown-content absolute z-10 min-w-24  bg-slate-300 text-white hidden rounded  text-center">
                  <a className="" href="#">
                    Link 1
                  </a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>

              <a className="hover:text-red-600 hover:scale-150 transition-all duration-500">
                <Link to> Service </Link>
              </a>
              <a className="hover:text-red-600 hover:scale-150 transition-all duration-500">
                <Link to="/About"> About </Link>
              </a>
              <a className="hover:text-red-600 hover:scale-150 transition-all duration-500">
                <Link to> Contect Us </Link>
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Navbar;
