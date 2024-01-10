import React from 'react'
import Product from '../Products/Product'


const Favorites = () => {
  return (
    <>
    <div className='flex flex-col  items-center'>

      <div>
            <h1 className=' flex text-4xl font-bold justify-center m-8'>Our Favorites</h1>

          

            <div className='flex gap-72 font-bold text-lg'>
                <p>FOR EVERYDAY</p>
                <p>FOR ACTIVITY</p>
                <p>FOR THE RAIN</p>
            </div>


            
      </div>
            <hr className='bg-[#D3D4D5] h-[3px] w-[80%] my-5 mx-auto' />
      
      <div>
      <Product />

      </div>

    </div>
 
    </>
  )
}

export default Favorites
