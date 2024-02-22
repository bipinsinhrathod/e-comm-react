import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Women from '../Recommends/Women'
import { FilterThree } from '../Men/FilterThree'

const Womens = () => {
  return (
    <>
      <Navbar/>

      <div className="flex justify-center bg-gray-200  items-center text-4xl font-bold p-8 -mb-6 max-lg:text-3xl max-md:text-2xl">
        <h1>All Product's For Women's</h1>
      </div>

      <FilterThree/>



        <Women/>




      <Footer/>
    </>
  )
}

export default Womens
