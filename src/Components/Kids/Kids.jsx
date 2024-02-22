import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Kid from '../Recommends/Kid'
import { FilterThree } from '../Men/FilterThree'

const Kids = () => {
  return (
    <>
    <Navbar/>

    <div className="flex justify-center bg-gray-200  items-center text-4xl font-bold p-8 -mb-6 max-lg:text-3xl max-md:text-2xl">
        <h1>All Product's For Kid's</h1>
      </div>

      <FilterThree/>


        <Kid/>



    <Footer/>
      
    </>
  )
}

export default Kids
