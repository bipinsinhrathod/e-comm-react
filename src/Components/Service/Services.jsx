import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import NewsLetterFour from '../News/NewsLetterFour'

const Services = () => {
  return (
    <>
    <Navbar/>
      

      <div className='grid place-content-center text-[40px] p-10 bg-gray-300'>
        <h1>Our Services</h1>
      </div>

      <NewsLetterFour/>


      


      <Footer/>
    </>
  )
}

export default Services
