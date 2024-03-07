import React from 'react'
import { Link } from 'react-router-dom'

const Banner1 = () => {
  return (
    <>

     
      <div className='flex flex-col justify-center items-center gap-y-4 mt-10 bg-gray-200 h-64 max-sm:px-5'>

        <h1 className='text-black font-bold text-4xl text-center max-sm:text-3xl'>The Shade of Things to Come</h1>
        <p className='text-black font-semibold text-center'>Color us excited for new, wear-with-everything neutral hues.</p>
        <div className='flex gap-5 '>
            <button className='font-semibold rounded-md w-56 h-12 bg-black text-white hover:bg-white hover:text-black transition-all mb-4 duration-300 max-md:w-36 max-sm:text-sm max-sm:h-11'><Link to="/men">SHOP MEN</Link></button>
            <button className='font-semibold rounded-md w-56 h-12 bg-black text-white hover:bg-white hover:text-black transition-all mb-4 duration-300 max-md:w-36 max-sm:text-sm max-sm:h-11 '><Link to="/women">SHOP WOMEN</Link></button>
        </div>
      </div>
      
    </>
  )
}

export default Banner1
