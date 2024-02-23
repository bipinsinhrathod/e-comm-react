import React from 'react'
import {FavoriteBorderOutlined ,KeyboardArrowDown,ShoppingCartOutlined, Star} from '@mui/icons-material/';
import Navbar from '../Navbar/Navbar';
// import { RecommendForMen } from '../Data/AllData';
import { Link, useParams } from 'react-router-dom';
import { ManAllProducts } from '../Data/AllData';



const ProductOverView = () => {
    const { id  } = useParams();
  // const products = gender === 'men' ? ManAllProducts : RecommendForWomen;
  const product = ManAllProducts.find((item) =>item.id === parseInt(id));

  // Check if product exists before attempting to destructure its properties
  if (!product) {
    return <div>No product found with the specified ID</div>;
  }

  const { imgUrl, Ptitle, Pdetails, Pltitle, Pprice } = product;
  return (
    <>
    <Navbar/>
     <section className='grid grid-cols-2 items-center max-lg:grid-cols-1 '>
        
        <div className='flex justify-end w-4/5 h-3/4 mx-auto max-xl:w-[90%] max-lg:w-[80%]'>

        <img  className='w-full object-cover rounded-xl'src={imgUrl} alt="" />
        </div>
        
        <div className='space-y-4 w-[95%]  max-xl:w-4/5  mx-auto '>
            <div className='flex space-x-4 font-semibold'>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/mens">Men</Link>

            </div>
            <p className='text-4xl font-bold max-md:text-3xl'>{Ptitle}</p>
            <p className='text-start max-lg:w-[90%]'>
                {Pdetails}
            </p>
            <p className='text-xl font-bold'>Highlights</p>
            <div className="my-4 flex items-center">
                <span className="flex items-center space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500" />
                  ))}
                  <span className="ml-3 inline-block text-xs mt-1 font-semibold">
                    4 Reviews
                  </span>
                </span>
              </div>
            <ul className='list-disc ml-4 space-y-2'>
                <li>Made withfull cotton</li>
                <li>Slim fit for any body</li>
                <li>Quality control by JC </li>
            </ul>

            <div className='flex space-x-10 bg-gray-200 px-8 py-3 border border-slate-500 rounded-lg items-center w-3/4 justify-around max-md:w-full max-[1130px]:w-[90%] max-sm:text-sm max-sm:space-x-5' >
                <div ><p className='font-bold text-xl max-sm:text-lg'>color </p> <span className='text-lg max-sm:text-sm max-sm:font-semibold' >white</span></div>
                 <div className="relative ">
                    <select className="appearance-none rounded border-2 font-bold  border-black py-2 pl-3 pr-10 text-md focus:border-black focus:outline-none  focus:ring-black">
                      <option>Size</option>
                      <option>8 UK</option>
                      <option>9 UK</option>
                      <option>10 UK</option>
                    </select>
                    <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                      <KeyboardArrowDown size={16} />
                    </span>
                  </div> 
                  {/* <span className='text-lg' >40</span> */}
                  
                <div ><p className='text-3xl font-bold max-sm:text-xl'>$50.96</p></div>
            </div>

            <div className= 'space-y-3 max-sm:grid'>
            <span></span>
            <button className='border-2 border-black font-bold w-44 h-11 rounded-xl pt-1 max-sm:w-full '>
                <ShoppingCartOutlined className='mb-1 scale-90'/> Add to cart 
            </button>

            <button className='bg-black w-44 h-11 rounded-xl pt-1 ml-5 text-white max-sm:ml-0 max-sm:w-full'>
                <FavoriteBorderOutlined className='mb-1 scale-90'/> Add to wishlist 
            </button>
            </div>

        </div>
     </section> 

     {/* <Men/>                      */}
    </>
  )
}

export default ProductOverView
