import React from 'react'
import { ShoppingCartOutlined, AccountCircleOutlined } from '@mui/icons-material';
import l1 from "../../Assests/l1.png"

import { Link } from 'react-router-dom';




const Navbar = () => {

    return (
        
        <>


            <div className='flex justify-between  py-2 relative text-black items-center bg-white '>


                <div className='flex gap-8 font-semibold ml-16'>

                    <a className='hover:text-red-600 hover:scale-150 transition-all duration-500'><Link to="/">Home</Link></a>

                    <div className="dropdown inline-block relative">
                        <button className=" hover:text-red-600 hover:scale-125 transition-all duration-300">Product</button>
                        <div className="dropdown-content absolute z-10 min-w-24  bg-slate-300 text-white hidden rounded  text-center">
                            <a className='' href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                    <a className='hover:text-red-600 hover:scale-150 transition-all duration-500' ><Link to> Service </Link></a>
                    <a className='hover:text-red-600 hover:scale-150 transition-all duration-500' ><Link to="/About"> About </Link></a>
                    <a className='hover:text-red-600 hover:scale-150 transition-all duration-500' ><Link to> Contect Us </Link></a>
                    


                </div>

                <div>

                    <img className='w-12 scale-125 cursor-pointer hover:scale-150 transition-all duration-300 -translate-x-32 ' src={l1} alt="" />


                </div>

                <div>
                    <button className=' px-3 -translate-x-12 hover:text-red-600 py-1 pb-2 rounded-md font-semibold hover:scale-110 transition-all duration-300'>
                        Login  <AccountCircleOutlined />
                    </button>
                    <button className=' px-5 -translate-x-16 hover:text-red-600 py-1  pb-2 rounded-md font-semibold hover:scale-110 transition-all duration-300'>
                        Cart  <ShoppingCartOutlined />
                    </button>
                </div>
            </div>

            <div>


            </div>



        </>
    )
}

export default Navbar