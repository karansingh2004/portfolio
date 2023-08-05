import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <div className='flex bg-black text-white px-4 h-20 justify-between items-center w-full'>
            <div className='text-4xl ml-2 font-sign'>
                <h1>Karan Singh</h1>
            </div>

            {/* Big screen menu START */}
            <ul className="hidden md:flex">
                <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to='home' smooth duration={500}>Home </Link> </li>

                <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to='about' smooth duration={500}>About </Link> </li>

                <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to='portfolio' smooth duration={500}>Portfolio </Link> </li>

                <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to='experience' smooth duration={500}>Experience </Link></li>

                <li className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to='contact' smooth duration={500}>Contact </Link> </li>

            </ul>
            {/* Big screen menu END */}


            {/* mobile menu START*/}
            <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer pr-3 z-10 text-gray-500 '>
                {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>


            {/* i.e. if menu is true then show this ul navbar  */}
            {
                menu &&
                <ul className='flex flex-col items-center justify-center w-full h-screen absolute bg-gradient-to-b from-black to-gray-800 text-gray-500 left-0 top-0'>
                    <li className='px-4 py-6 cursor-pointer text-3xl'>
                        <Link to='home' onClick={() => setMenu(!menu)} smooth duration={500}>Home </Link> </li>

                    <li className='px-4 py-6 cursor-pointer text-3xl'>
                        <Link to='about' onClick={() => setMenu(!menu)} smooth duration={500}>About </Link> </li>

                    <li className='px-4 py-6 cursor-pointer text-3xl'>
                        <Link to='portfolio' onClick={() => setMenu(!menu)} smooth duration={500}>Portfolio </Link> </li>

                    <li className='px-4 py-6 cursor-pointer text-3xl'>
                        <a href="https://github.com/karansingh2004/My-Certifications/blob/main/KaranSingh_Resume.pdf">Resume</a>
                    </li>

                    <li className='px-4 py-6 cursor-pointer text-3xl'>
                        <Link to='experience' onClick={() => setMenu(!menu)} smooth duration={500}>Experience </Link></li>


                    <li className='px-4 py-6 cursor-pointer text-3xl'>
                        <Link to='contact' onClick={() => setMenu(!menu)} smooth duration={500}>Contact </Link> </li>


                </ul>
            }
            {/* mobile menu END*/}

        </div >
    )
}

export default Navbar
