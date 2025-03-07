import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router'

const AboutCards = () => {
  return (
   <>
    <div className='hover:bg-blue bg-blue/90 rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl cursor-pointer transition-all duration-300'>
        <h4 className='text-3xl font-semibold text-white mb-7'>About Us</h4>
        <img src="\assets\about.svg" alt="" width="100" height="100" loading='lazy' decoding='async' className='block align-middle mb-5'/>
        <h4 className='text-lg font-normal text-white mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</h4>
        <Link to='/about' className="text-lg font-semibold text-white hover:underline hover:text-yellow flex items-center">Learn More <IoIosArrowForward aria-hidden="true" width="20" height="20"/></Link>
    </div>
    <div className='hover:bg-blue bg-blue/90 rounded-3xl mt-16 pt-12 pl-8 pb-12 pr-6 shadow-xl cursor-pointer transition-all duration-300'>
        <h4 className='text-3xl font-semibold text-white mb-7'>Services</h4>
        <img src="\assets\services.svg" alt="" width="100" height="100" loading='lazy' decoding='async' className='block align-middle mb-5'/>
        <h4 className='text-lg font-normal text-white mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</h4>
        <Link to='/about' className="text-lg font-semibold text-white hover:underline hover:text-yellow flex items-center">Learn More <IoIosArrowForward aria-hidden="true" width="20" height="20"/></Link>
    </div>
    <div className='hover:bg-blue bg-blue/90 rounded-3xl mt-16 pt-12 pl-8 pb-12 pr-6 shadow-xl cursor-pointer transition-all duration-300'>
        <h4 className='text-3xl font-semibold text-white mb-7'>Our Works</h4>
        <img src="\assets\ourwork.svg" alt="" width="100" height="100" loading='lazy' decoding='async' className='block align-middle mb-5'/>
        <h4 className='text-lg font-normal text-white mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</h4>
        <Link to='/about' className="text-lg font-semibold text-white hover:underline hover:text-yellow flex items-center">Learn More <IoIosArrowForward aria-hidden="true" width="20" height="20"/></Link>
    </div>
   </>
  )
}

export default AboutCards