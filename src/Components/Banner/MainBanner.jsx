import React from 'react'
import v1 from "../../Assests/v1.mp4"

const MainBanner = () => {
  return (
    <>
    
    <div className='relative flex justify-center items-center bg-gray-100 ' style={{width:"100%",height:"95vh"}}>
        <video autoPlay loop muted src={v1} style={{width:"90%",height:"80%"}}  className='object-cover -mt-8' ></video>

        <div className='absolute flex flex-col justify-center items-center gap-y-4'>
            <h1 className='text-white font-bold text-7xl'>Take That, Weather</h1>

            <p className='text-white font-bold text-md'>Water-repellent Mizzles are cozy inside and extra grippy outside.</p>

            <div className=' flex mt-10 gap-8'>
              <button className='bg-white text-sm  font-semibold  text-black w-44 h-10 rounded-sm transition-all duration-300 hover:bg-black hover:text-white'> SHOP MEN</button>
              
              <button className='bg-white text-sm font-semibold text-black w-44 h-10 rounded-sm transition-all duration-300 hover:bg-black hover:text-white' >SHOP WOMEN</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default MainBanner
