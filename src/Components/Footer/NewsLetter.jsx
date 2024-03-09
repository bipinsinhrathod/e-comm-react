import React from 'react'

const NewsLetter = () => {
  return (
    <>
        <section className='newsLetter  flex flex-wrap justify-around items-center h-40 max-md:h-56 '>
        <div className='max-md:text-center'>
            <h4 className='text-white text-3xl font-semibold max-md:text-xl'>Sign up for Newsletters</h4>
            <p className='text-[#818ea0] font-semibold max-md:text-base'>Get e-mail updates about our latest shop and <span className='text-[#ff9900]'>special offers</span>.</p>
        </div>
        <div className='flex w-[40%] space-x-2 max-md:mb-2 max-md:w-[50%] max-sm:flex-col max-sm:items-center max-sm:space-y-4'>
            <input className=' h-[3rem] px-[1.5rem] w-[100%] max-md:w-56 rounded outline-0 max-md:text-center max-sm:h-10 ' type="email" placeholder="Your email address" />
            <button className='bg-[#ff9900] w-32 max-sm:w-20 max-sm:h-7 text-white rounded transition-all duration-100 ease-linear hover:bg-[#088178] hover:text-white '>Sign Up</button>
        </div>
    </section>

    </>
  )
}

export default NewsLetter
