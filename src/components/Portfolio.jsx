import React from 'react';
// import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
// import installNode from '../assets/portfolio/installNode.jpg';
// import navbar from '../assets/portfolio/navbar.jpg'
import jarvis from '../assets/portfolio/jarvis.jpg'
// import reactParallax from '../assets/portfolio/reactParallax.jpg';
// import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
// import reactWeather from '../assets/portfolio/reactWeather.jpg';
// import karatesite from '../assets/portfolio/karatesite.png';
import adarshsrsec from '../assets/portfolio/adarshsrsecschool.png';
import coursesite from '../assets/portfolio/coursesite.png';
import simplecalculator from '../assets/portfolio/simplecalculator.jpg';
import notepad from '../assets/portfolio/notepad.jpg';
import certificates from '../assets/portfolio/certificates.jpg';

const Portfolio = () => {
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl inline font-bold border-b-4 border-gray-500'>PortFolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        {/* images and buttons here for each work/project */}

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 mb-40 sm:px-0'>

          {/* 1st project */}
          {/*
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={reactWeather} alt="" className='rounded-md hover:scale-105 duration-200' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Demo</button>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Code</button>
            </div>
          </div> */}


          {/* 1st project */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={adarshsrsec} alt="" className='rounded-md hover:scale-105 duration-200' />
            {/* <div className='flex items-center justify-center'>
              <a href="https://mutualism-salvages.000webhostapp.com/">
                <button className='w-1 px-6 p-3 m-4 hover:scale-105 duration-200'>Demo</button>
              </a>
              <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Code</button>
            </div> */}

            <div className='flex items-center justify-center '>
              <a href="https://adarshsrsec.github.io/school/">
               <button className='w-64 px-6 py-3 m-4 text-white rounded-md hover:scale-105 duration-200'>School Website</button>
             </a>
          </div>
          </div>


          {/* 2nd project */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={coursesite} alt="" className='rounded-md hover:scale-105 duration-200' />
            <div className='flex items-center justify-center'>
              <a href="https://karansingh2004.github.io/ReactApp-using-TailWindCSS/">
                <button className='w-64 px-6 p-3 m-4 hover:scale-105 duration-200'>Coaching Website</button>
              </a>
              {/* <a href="https://github.com/karansingh2004/ReactApp-using-TailWindCSS">
                <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Code</button>
              </a> */}
            </div>
          </div>

          {/* 3rd project */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={jarvis} alt="" className='rounded-md hover:scale-105 duration-200' />
            <div className='flex items-center justify-center'>
              <a href="https://github.com/karansingh2004/Jarvis-AI-Project">
                <button className='w-64 px-6 p-3 m-4 hover:scale-105 duration-200'>Jarvis - AI</button>
              </a>
              {/* <a href="https://github.com/karansingh2004/Jarvis-AI-Project">
                <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Code</button>
              </a> */}
            </div>
          </div>

          {/* 4th project */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={simplecalculator} alt="" className='rounded-md hover:scale-105 duration-200' />
            <div className='flex items-center justify-center'>
              <a href="https://github.com/karansingh2004/Simple-Calculator">
                <button className='w-64 px-6 p-3 m-4 hover:scale-105 duration-200'>Calculator GUI</button>
              </a>
              {/* <a href="https://github.com/karansingh2004/Simple-Calculator">
                <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Code</button>
              </a> */}
            </div>
          </div>

          {/* 5th project */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={notepad} alt="" className='rounded-md hover:scale-105 duration-200' />
            <div className='flex items-center justify-center'>
              <a href="https://github.com/karansingh2004/Notepad-Project">
                <button className='w-64 px-6 p-3 m-4 hover:scale-105 duration-200'>Notepad GUI</button>
              </a>
              {/* <a href="https://github.com/karansingh2004/Notepad-Project">
                <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Code</button>
              </a> */}
            </div>
          </div>
          
          {/* 6th project */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={certificates} alt="" className='rounded-md hover:scale-105 duration-200' />
            <div className='flex items-center justify-center'>
              <a href="https://github.com/karansingh2004/My-Certifications">
                <button className='w-64 px-6 p-3 m-4 hover:scale-105 duration-200'>My Certifications</button>
              </a>
              {/* <a href="https://github.com/karansingh2004/My-Certifications">
                <button className='w-1/2 px-6 p-3 m-4 hover:scale-105 duration-200'>Code</button>
              </a> */}
            </div>
          </div>
          

        </div>

      </div>
    </div >
  )
}

export default Portfolio
