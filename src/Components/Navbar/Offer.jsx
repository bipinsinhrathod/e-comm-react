import { faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Offer = () => {
  return (
    <>
      <section className='bg-gray-900 flex justify-center items-center'>
        <p className='text-white text-xs p-2 mt-1'> <FontAwesomeIcon  className='pr-1' icon={faTag} />FREE DELIVERY , RETURN & EXCHANGE</p>
      </section>
    </>
  )
}

export default Offer
