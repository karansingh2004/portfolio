import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <div className='sm:hidden'>
                <div className=' max-w-screen-lg px-[10%] py-[3%] gap-5 bg-gradient-to-r from-black to-gray-800 mx-auto md:grid grid-cols-2'>
                    <div className='col-span-1'>
                        <h3 className='text-2xl text-white border-b-4 border-gray-600 inline'>Developed By:</h3>
                        <h2 className='text-3xl  text-gray-400 py-5'>Karan Singh</h2>
                    </div>

                    <div className='flex flex-col text-white'>
                        <ul>

                            <div className='flex py-3 gap-5'>
                                <a href='https://www.linkedin.com/in/karan-singh-8362a51b0'>
                                    <> <FaLinkedin size={30} />  </>
                                </a>

                                <a href="https://github.com/karansingh2004">
                                    <> <FaGithub size={30} /> </>
                                </a>

                                <a href="mailto:karan1312004@gmail.com">
                                    <> <HiOutlineMail size={30} /> </>
                                </a>

                                <a href="https://www.instagram.com/karansingh2004_/">
                                    <> <AiOutlineInstagram size={30} /> </>
                                </a>

                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;