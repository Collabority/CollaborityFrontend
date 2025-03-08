import React from 'react'
import AboutCards from './AboutCards'

const AboutSection = () => {
  return (
    <div className='font-special mx-auto max-w-7xl px-4 py-24 my-20 lg:px-10  bg-yellow rounded-3xl relative'>
    <h3 className='text-center text-blue text-2xl tracking-wide'>About Us</h3>
    <h4 className='text-center text-3xl sm:text-4xl lg:text-5xl font-bold'>Know More About Us</h4>
    <div className='md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-8 lg:gap-16'>
      <AboutCards />
    </div>
  </div>
  
  )
}

export default AboutSection