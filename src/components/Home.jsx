import React from 'react'
import myImage from '../assets/myImage.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name="Home" className='text-white h-screen w-full bg-gradient-to-b from-black via-black to-gray-800' >
            <div className='max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    {/* left/top content */}
                    <h2 className='text-3xl font-bold sm:text-6xl'>I'm a Front-End Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I have 2+ years of Experience building and designing websites.
                        Currently, I love to work on web application using technologies like
                        React, TailWindCss and Bootstrap .
                    </p>

                    <div>
                        <Link to='portfolio' smooth duration={500} className='group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio h bhai mera
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} />
                            </span>
                        </Link>
                    </div>
                </div>
                
                {/* right/bottom content */}
                <div>
                    <img src={myImage} alt="My Profile" className='h-[500px] w-[500px] rounded-xl mx-auto' />
                </div>

            </div>
        </div>
    )
}

export default Home
