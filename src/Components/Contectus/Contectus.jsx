import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Location from "../../Assests/google-maps.png"
import Phone from "../../Assests/phone-call.png"
import Mail from "../../Assests/gmail.png"

const Contectus = () => {
  return (
    <>
      <Navbar />

      <div className="grid place-content-center text-[40px] p-10 bg-gray-300">
        <h1>Contact Us</h1>
      </div>

      <div className="grid grid-cols-2 p-8 ">
        <div className=" w-full mt-8 ">

          <div className="grid grid-cols-3 mb-8">
            
        <a
            className="flex gap-1 justify-cente items-center  m-1 hover:scale-110 transition-all duration-500"
            href=""
          >
            <img width={20} src={Phone} alt="" />
            +91 7285081412
          </a>

          <a className="flex gap-1 justify-cente items-center m-1 hover:scale-110 transition-all duration-500" href="">
            <img width={20} src={Location} alt="" /> Gota , Ahmedabad{" "}
          </a>
          <a
            className="flex gap-1 justify-cente items-center m-1 hover:scale-110 transition-all duration-500"
            href=""
          >
            <img width={20} src={Mail} alt="" />
            bipinrajput548@gmail.com
          </a>
          </div>
          <iframe className="max-[1400px]:w-[650px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.773779184891!2d72.53519857793458!3d23.10537565940776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82df638cac99%3A0xff6323bffd52c2a7!2sPARIVAR%20HOMES%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1706968484788!5m2!1sen!2sin" width="726" height="462"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
        </div>

        <div className="grid grid-cols-1 gap-10 place-items-center p-8 mt-8 ml-14 border-2 border-gray-500 rounded-lg ">

          <p className="text-2xl font-semibold underline underline-offset-[10px]">Get In Touch</p>

          <input className=" bg-gray-100 w-[74%] h-10 pl-4 outline-none hover:scale-105 transition-all duration-500" type="text"  placeholder="Name" />

          <input className=" bg-gray-100 w-[74%] h-10 pl-4 outline-none hover:scale-105 transition-all duration-500" type="email" placeholder="Email" />

          <textarea name="" className="bg-gray-100 w-[74%] h-[180px] hover:scale-105 transition-all duration-500  outline-none pl-4 pt-4 resize-none"  placeholder="Massege" ></textarea>

          <button className="bg-green-400 hover:scale-110 transition-all duration-300 rounded-xl h-10 text-xl font-semibold w-56">Submit</button>
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contectus;