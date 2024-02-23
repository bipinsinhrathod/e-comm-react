import React from 'react'
import {FavoriteBorderOutlined ,ShoppingCartOutlined} from '@mui/icons-material/';
import Navbar from '../Navbar/Navbar';
// import { RecommendForMen } from '../Data/AllData';
import Men from '../Recommends/Men'

const ProductOverView = () => {
  return (
    <>
    <Navbar/>
     <section className='grid grid-cols-2 items-center max-lg:grid-cols-1 '>
        <div className='flex justify-end w-4/5 h-3/4 mx-auto'>
        <img  className='w-full object-cover rounded-xl'src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0cca1ffd-6a17-4609-93c9-e482afaa494a/jordan-spizike-low-shoes-pBZk7c.png" alt="" />
        </div>
        <div className='space-y-4 w-[95%] max-lg:text-start max-lg:m-12 '>
            <p className='text-4xl font-bold'>Nike jorden Shoes</p>
            <p className='text-start max-lg:w-[90%]'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil voluptatum alias fugiat, eveniet similique quam eius illo nobis quaerat ipsam aliquid nam mollitia laboriosam. Voluptate et corrupti exercitationem deserunt eveniet veli.
            </p>
            <p className='text-xl font-bold'>Highlights</p>
            <ul className='list-disc ml-4 space-y-2'>
                <li>Made withfull cotton</li>
                <li>Slim fit for any body</li>
                <li>Quality control by JC </li>
            </ul>

            <div className='flex space-x-10 bg-gray-200 px-8 py-3 border border-slate-400 rounded-lg items-center w-3/4 justify-around '>
                <div ><p className='font-bold text-xl'>color </p> <span className='text-lg' >white</span></div>
                <div><p className='font-bold text-xl'>Size</p> <span className='text-lg' >40</span></div>
                <div><p className='text-3xl font-bold'>$50.96</p></div>
            </div>

            <div className='space-y-3'>

            <button className='bg-black w-44 h-11 rounded-xl pt-1 text-white '>
                <ShoppingCartOutlined className='mb-1 scale-90'/> Add to cart 
            </button>

            <button className='bg-black w-44 h-11 rounded-xl pt-1 text-white ml-5'>
                <FavoriteBorderOutlined className='mb-1 scale-90'/> Add to wishlist 
            </button>
            </div>

        </div>
     </section> 

     <Men/>                     
    </>
  )
}

export default ProductOverView
