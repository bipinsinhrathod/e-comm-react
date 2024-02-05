import React from 'react'
import { Link } from 'react-router-dom'

const Banner1 = () => {
  return (
    <>

     
      <div className='flex flex-col justify-center items-center gap-y-4 mt-10 bg-gray-200 h-64'>

        <h1 className='text-black font-bold text-4xl'>The Shade of Things to Come</h1>
        <p className='text-black font-semibold text-base'>Color us excited for new, wear-with-everything neutral hues.</p>
        <div className='flex gap-5'>
            <button className='font-semibold rounded-md w-56 h-12 bg-black text-white hover:bg-white hover:text-black transition-all mb-4 duration-300'><Link to="/Mens">SHOP MEN</Link></button>
            <button className='font-semibold rounded-md w-56 h-12 bg-black text-white hover:bg-white hover:text-black transition-all mb-4 duration-300'><Link to="/Womens">SHOP WOMEN</Link></button>
        </div>
      </div>
      
    </>
  )
}

export default Banner1
