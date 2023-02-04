import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Portfolio = () => {
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl inline font-bold border-b-4 border-gray-500'>PortFolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        {/* images and buttons here for each work/project */}

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {/* 1st project */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={reactWeather} alt="" className='rounded-md hover:scale-105 duration-200' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Demo</button>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Code</button>
            </div>
          </div>


          {/* 2nd project */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={installNode} alt="" className='rounded-md hover:scale-105 duration-200' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Demo</button>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Code</button>
            </div>
          </div>

          {/* 3rd project */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={navbar} alt="" className='rounded-md hover:scale-105 duration-200' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Demo</button>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Code</button>
            </div>
          </div>

          {/* 3rd project */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={reactParallax} alt="" className='rounded-md hover:scale-105 duration-200' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Demo</button>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Code</button>
            </div>
          </div>

          {/* 4th project */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={reactSmooth} alt="" className='rounded-md hover:scale-105 duration-200' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Demo</button>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Code</button>
            </div>
          </div>

          {/* 5th project */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={arrayDestruct} alt="" className='rounded-md hover:scale-105 duration-200' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Demo</button>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Code</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Portfolio
