import React, { useState, useEffect, useRef } from "react";
import {
  ShoppingCartOutlined,
  AccountCircleOutlined,
  Close,
  Menu,
} from "@mui/icons-material";
import l1 from "../../Assests/l1.png";

import { Link } from "react-router-dom";

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
      <div className="flex justify-between  py-2 relative text-black items-center bg-white ">
        <div className="flex gap-8 font-semibold ml-16 max-lg:hidden">
          <a className="hover:text-red-600 hover:scale-150 transition-all duration-500">
            <Link to="/">Home</Link>
          </a>

          <div className="dropdown inline-block relative">
            <button className=" hover:text-red-600 hover:scale-125 transition-all duration-300">
              Product
            </button>
            <div className="dropdown-content absolute z-10 min-w-24  bg-slate-300 text-white hidden rounded  text-center">
              <a className="">
              <Link to="/Mens">Men's</Link>
              </a>
              <a><Link to="/Womens">Women's</Link></a>
              <a><Link to="/Kids">Kid's</Link></a>
            </div>
          </div>

          <a className="hover:text-red-600 hover:scale-150 transition-all duration-500">
            <Link to="/Services"> Service </Link>
          </a>
          <a className="hover:text-red-600 hover:scale-150 transition-all duration-500">
            <Link to="/about"> About </Link>
          </a>
          <a className="hover:text-red-600 hover:scale-150 transition-all duration-500">
            <Link to="/Contectus"> Contect Us </Link>
          </a>
        </div>

        <div>
          <img
            className="w-12 scale-125 cursor-pointer hover:scale-150 transition-all duration-300 -translate-x-32 max-lg:translate-x-32 "
            src={l1}
            alt=""
          />
        </div>

        <div>
          <button className=" px-3 -translate-x-12 hover:text-red-600 py-1 pb-2 rounded-md font-semibold hover:scale-110 transition-all duration-300">
            <span className="max-lg:hidden"><Link to="/SignUpOne">Log In</Link></span>{" "}
            <AccountCircleOutlined />
          </button>
          <button className=" px-5 -translate-x-16 hover:text-red-600 py-1  pb-2 rounded-md font-semibold hover:scale-110 transition-all duration-300">
            <span className="max-lg:hidden"> Cart </span>{" "}
            <ShoppingCartOutlined />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="-translate-x-[70px] hover:text-red-600 hover:scale-110 transition-all duration-300 hidden max-lg:inline-block"
          >
            <Menu />
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
            <button onClick={() => setIsOpen(!isOpen)} className="text-red-600 font-semibold text-2xl hover:text-blue-500 hover:scale-125 -mb-5 transition-all duration-500">
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
    </>
  );
};

export default Navbar;
