import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  return (
    
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-200 hover:rounded-md'>
          <a href="https://www.linkedin.com/in/karan-singh-8362a51b0" className='flex justify-between items-center w-full text-white'>
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          </a>
        </li>

        <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-200 hover:rounded-md'>
          <a href="https://github.com/karansingh2004" className='flex justify-between items-center w-full text-white'>
            <>
              Github <FaGithub size={30} />
            </>
          </a>
        </li>

        <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-200 hover:rounded-md'>
          <a href="mailto:karan1312004@gmail.com" className='flex justify-between items-center w-full text-white'>
            <>
              Mail <HiOutlineMail size={30} />
            </>
          </a>
        </li>

        <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-200 hover:rounded-md'>
          <a href="https://github.com/karansingh2004/My-Certifications/blob/main/KaranSingh_Resume.pdf" className='flex justify-between items-center w-full text-white' download>
            <>
              Resume <BsPersonLinesFill size={30} />
            </>
          </a>
        </li>

      </ul>
    </div>
  )
}

export default SocialLinks
