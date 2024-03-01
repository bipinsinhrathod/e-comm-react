import React from 'react'
// import v1 from "../../Assests/v1.mp4"
// import { Link } from 'react-router-dom'
// import Your from '../../Assests/Screenshot 2024-02-17 225724.png'
import Shoes from '../../Assests/Shoes.png'



const MainBanner = () => {
  return (
    <>
    
    <div className='relative flex justify-center items-center bg-gray-100  ' style={{width:"100%",height:"95vh"}}>
        {/* <video autoPlay loop muted src={v1} style={{width:"90%",height:"80%"}}  className='object-cover -mt-8' ></video> */}
        <img className='object-cover  m-40' style={{width:"100%",height:"90%"}} src={Shoes} alt="" />

        <div className='absolute flex flex-col justify-center items-center gap-y-4'>
            {/* <h1 className='text-white font-bold text-7xl max-lg:text-4xl  '>Take That, Weather</h1> */}

            {/* <p className='text-white font-bold text-md max-sm:w-80 max-sm:text-center'>Water-repellent Mizzles are cozy inside and extra grippy outside.</p> */}

            <div className=' flex mt-10 gap-8'>

              {/* <button className='bg-black text-sm  font-semibold  text-white w-44 h-10 rounded-sm transition-all duration-300 hover:bg-white hover:text-black max-lg:w-28 max-lg:h-10 max-lg:text-[12px]'><Link to="/Mens">SHOP MEN</Link></button> */}
              
            {/* <button className='bg-black text-sm font-semibold text-white w-44 h-10 rounded-sm transition-all duration-300 hover:bg-white hover:text-black max-lg:w-28 max-lg:h-10 max-lg:text-[12px]'><Link to="/Womens">SHOP WOMEN</Link></button> */}

            </div>
        </div>

    </div>
    </>
  )
}


   







export default MainBanner
