import React from 'react'
import logo from "../../Assests/logo4.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NavbarNew = () => {
  return (
    <>
      <section className='flex flex-wrap justify-evenly shadow-xl border  '>
        <div className='flex  items-center'>
            <img className='w-12 scale-125 cursor-pointer hover:scale-150 transition-all duration-300 max-lg:translate-x-32 ' src={logo} alt="" />
        </div>
        <div className='flex space-x-10 p-6 ml-60'>
            <Link to="/" className='font-bold text-red-700' href="">Home</Link>
            <Link to="/men" className='font-semibold' href="">Men</Link>
            <Link to="/women" className='font-semibold' href="">Women</Link>
            <Link to="/Kids" className='font-semibold' href="">Kid</Link>
            <Link to="/about" className='font-semibold text-gray-500' href="">About US</Link>
            <Link to="/Contectus" className='font-semibold text-gray-500' href="">Contact Us</Link>
        </div>
        <div className='flex items-center space-x-5 '>
            <div className='relative'>
                <input type="text" placeholder='Search Items'   className=' border pl-7 h-8 rounded-2xl bg-gray-200' />
                <FontAwesomeIcon className='absolute left-2 top-2' icon={faMagnifyingGlass} />
                
            </div>
            <div className='space-x-4'>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faBagShopping} />
            </div>
        </div>
      </section>
    </>
  )
}

export default NavbarNew
