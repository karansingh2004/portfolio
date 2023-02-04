import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import nextjs from '../assets/nextjs.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';


const Experience = () => {
    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    
                    {/* 1st */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500 '>
                        <img src={html} alt="" className='w-20 mx-auto ' />
                        <p className='mt-4'>HTML</p>
                    </div>

                    {/* 2nd */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500 '>
                        <img src={css} alt="" className='w-20 mx-auto ' />
                        <p className='mt-4'>CSS</p>
                    </div>

                    {/* 3rd */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500'>
                        <img src={javascript} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>JavaScript</p>
                    </div>

                    {/* 4th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600'>
                        <img src={reactImg} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>React</p>
                    </div>

                    {/* 5th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-white'>
                        <img src={nextjs} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>NextJs</p>
                    </div>

                    {/* 6th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-400'>
                        <img src={github} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>GitHub</p>
                    </div>

                    {/* 7th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400'>
                        <img src={tailwind} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>TailWind</p>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Experience
