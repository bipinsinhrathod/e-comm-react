import React from 'react'

const OfferBanner = () => {
  return (
    <>
      <section className='offerbanner h-64 flex flex-col items-center justify-center text-center space-y-5 my-5'>
        <p className='text-3xl text-white font-bold max-md:text-2xl max-sm:text-lg'>New Offer Applicable Now</p>
        <p className='text-5xl text-white font-bold max-md:text-4xl max-sm:text-3xl'>Up to <span className='text-red-700'>70% off </span>on - All Sneekers & Jordens</p>
        <button className='w-32 h-11 rounded-lg text-black bg-white font-semibold max-sm:w-28 max-sm:h-9 max-sm:text-sm'>Explore More</button>

      </section>
    </>
  )
}

export default OfferBanner
