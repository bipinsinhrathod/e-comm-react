import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Aboutimg from "../Assests/Aboutuspage.png";
import Team from "./Team";
import Footer from "../Components/Footer/Footer";
import V1 from "../Assests/1.mp4"
import a1 from "../Assests/Promotion.gif"
import a2 from "../Assests/Freeshipping.gif"
import a3 from "../Assests/Happsell.gif"
import a4 from "../Assests/Orderahead.gif"
import a5 from "../Assests/SavingsMoney.gif"
import a6 from "../Assests/Service24_7.gif"






const About = () => {
  return (
    <>
      <Navbar />

      <div className="aboutbanner text-white flex flex-col justify-center items-center p-20">
        <h1 className="text-7xl font-semibold" >#AboutUs</h1>
        <p>know about us and look that how can we grow up with you all !</p>
      </div>
      <div className="flex px-28">
        <div className=" w-[50%]">
          <img className="pt-20" src={Aboutimg} alt="" />
        </div>
        <div className="w-[50%] flex justify-center items-center p-32 my-24 text-xl bg-gray-100 rounded-[20%]">
          <p className=" " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a asperiores corporis fuga repudiandae earum reprehenderit tempore necessitatibus maxime sed nam aliquam vitae adipisci delectus quibusdam consequuntur praesentium, qui aspernatur saepe assumenda commodi autem sequi sapiente iste? Quam ipsa recusandae itaque aspernatur, rerum suscipit reiciendis aut officia veniam, cum et? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, cum. Enim nam doloribus dolorem deserunt.</p>
        </div>
      </div>

      <div className="p-20 flex mx-auto w-4/6">
      <video className="rounded-3xl" autoPlay muted loop  src={V1}></video>
      </div>

      <div className="text-center  text-[40px] font-semibold mb-14  ">
        <p className="bg-gray-300 ml-80 mr-80 rounded-3xl">
        Our Team
        </p>
      </div>

      <div className="flex justify-center items-center">
      <Team/>

      </div>

      <div className="grid grid-cols-6 place-items-center pt-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-[500px]:grid-cols-1 max-lg:space-y-5">
      
        <img className="hover:shadow-2xl hover:scale-105 transition-all duration-300 border max-lg:mt-5   w-56" src={a1} alt="" />
        <img className="hover:shadow-2xl hover:scale-105 transition-all duration-300 border   w-56" src={a2} alt="" />
        <img className="hover:shadow-2xl hover:scale-105 transition-all duration-300 border   w-56" src={a3} alt="" />
        <img className="hover:shadow-2xl hover:scale-105 transition-all duration-300 border   w-56" src={a4} alt="" />
        <img className="hover:shadow-2xl hover:scale-105 transition-all duration-300 border   w-56" src={a5} alt="" />
        <img className="hover:shadow-2xl hover:scale-105 transition-all duration-300 border   w-56" src={a6} alt="" />
      </div>

      <Footer/>
    </>
  );
};









export default About;
