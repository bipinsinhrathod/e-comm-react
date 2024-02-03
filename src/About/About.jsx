import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Aboutimg from "../Assests/Aboutuspage.png";
import Team from "./Team";
import Footer from "../Components/Footer/Footer";




const About = () => {
  return (
    <>
      <Navbar />

      <div className="text-[40px] flex justify-center items-center bg-gray-300 p-10">
        <h1>About Us</h1>
      </div>
      <div className="flex px-28">
        <div className=" w-[50%]">
          <img className="pt-20" src={Aboutimg} alt="" />
        </div>
        <div className="w-[50%] flex justify-center items-center p-32 my-24 text-xl bg-gray-100 rounded-[20%]">
          <p className=" " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a asperiores corporis fuga repudiandae earum reprehenderit tempore necessitatibus maxime sed nam aliquam vitae adipisci delectus quibusdam consequuntur praesentium, qui aspernatur saepe assumenda commodi autem sequi sapiente iste? Quam ipsa recusandae itaque aspernatur, rerum suscipit reiciendis aut officia veniam, cum et? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, cum. Enim nam doloribus dolorem deserunt.</p>
        </div>
      </div>

      <div className="text-center  text-[40px] font-semibold mb-14 -mt-6  ">
        <p className="bg-gray-300 ml-80 mr-80 rounded-3xl">
        Our Team
        </p>
      </div>

      <div className="flex justify-center items-center">
      <Team/>

      </div>

      <Footer/>
    </>
  );
};









export default About;
