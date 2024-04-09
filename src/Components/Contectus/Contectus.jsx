import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Location from "../../Assests/google-maps.png"
import Phone from "../../Assests/phone-call.png"
import Mail from "../../Assests/gmail.png"
import Contact from  "../../Assests/Contact.jpg"
import Stores from "../../Stores/Stores";
import contactbanner from "../../Assests/contact-banner.png"

const Contectus = () => {
  return (
    <>
      <Navbar />

      {/* <div className="aboutbanner text-white flex flex-col justify-center items-center p-20">
        <h1 className="text-7xl font-semibold" >#ContactUs</h1>
        <p>LEAVE A MESSAGE. We love to hear from you !</p>
      </div> */}
      <div className="w-full">
          <img className="w-full" src={contactbanner} alt="" />
        </div>

<div className="grid grid-cols-2">
      <div className="mx-auto w-[90%]  ">
        <img src={Contact} alt="" />
      </div>

<div className="flex  justify-center text-center items-center">
  <p  className=" p-16 m-32 bg-gray-200 rounded-xl" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi ut asperiores magnam natus? Deleniti praesentium quam sapiente harum at distinctio provident sit eaque esse? Odit nisi eum unde commodi obcaecati. Sunt, ab! Maxime assumenda, a obcaecati veniam aliquid labore necessitatibus alias quod laborum laboriosam provident architecto magnam modi quidem! 
  <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, non consequatur doloremque tenetur nam ipsa aliquam, enim cum aperiam culpa aut sequi asperiores voluptate consequuntur molestiae! Deserunt aliquid vero laboriosam reiciendis, ipsum sint iusto architecto quisquam? Nostrum consequuntur cumque, ea molestias qui quaerat eius necessitatibus ipsa dolores beatae, ipsum nam?</p>
</div>


</div>

      <div className="grid grid-cols-2 p-8 max-xl:grid-cols-1 ">
        <div className=" w-full mt-8 ">

          <div className="grid grid-cols-3 mb-8 max-md:grid-cols-2 max-md:place-items-center max-[420px]:grid-cols-1 ">
            
        <a
            className="flex gap-1 jus items-center  m-1 hover:scale-110 transition-all duration-500"
            href=""
          >
            <img width={20} src={Phone} alt="" />
            +91 7285081412
          </a>

          <a className="flex gap-1  items-center m-1 hover:scale-110 transition-all duration-500" href="">
            <img width={20} src={Location} alt="" /> Gota , Ahmedabad{" "}
          </a>
          <a
            className="flex gap-1 max-md:ml-56 max-[420px]:ml-0  items-center m-1 hover:scale-110 transition-all duration-500"
            href=""
          >
            <img width={20} src={Mail} alt="" />
            bipinrajput548@gmail.com
          </a>
          </div>
          <iframe className="max-[1400px]:w-[650px] max-xl:w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.773779184891!2d72.53519857793458!3d23.10537565940776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82df638cac99%3A0xff6323bffd52c2a7!2sPARIVAR%20HOMES%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1706968484788!5m2!1sen!2sin" width="726" height="462"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
        </div>
        

        <div className="grid grid-cols-1 gap-10 place-items-center p-8 mt-8 ml-14 border-2 border-gray-500 rounded-lg max-xl:ml-0 ">

          <p className="text-2xl font-semibold underline underline-offset-[10px]">Get In Touch</p>

          <input className=" bg-gray-100 w-[74%] h-10 pl-4 outline-none hover:scale-105 transition-all duration-500" type="text"  placeholder="Name" />

          <input className=" bg-gray-100 w-[74%] h-10 pl-4 outline-none hover:scale-105 transition-all duration-500" type="email" placeholder="Email" />

          <textarea name="" className="bg-gray-100 w-[74%] h-[180px] hover:scale-105 transition-all duration-500  outline-none pl-4 pt-4 resize-none"  placeholder="Massege" ></textarea>

          <button className="bg-green-400 hover:scale-110 transition-all duration-300 rounded-xl h-10 text-xl font-semibold w-56 max-[548px]:w-36 max-[548px]:text-lg">Submit</button>
          
        </div>
      </div>

      <Stores/>
      <Footer />
    </>
  );
};

export default Contectus;
