import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg w-full h-full p-4 mx-auto flex flex-col justify-center'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='md:text-xl md:mt-20'>Meet Karan Singh, a talented 4th-year B.Tech CSE student at RPS Mahendargarh. With a diverse skill set, he has mastered HTML, CSS, JavaScript, Python, Java, C, C++, React, Bootstrap, and Tailwind CSS. A true tech enthusiast, he has also earned certifications in Intro to AI, Machine Learning, Ethical Hacking, Linux, and Database Management System from prestigious companies, institutions, and even the renowned ISRO.</p>

        <br />

        <p className='md:text-xl md:mt-10'>My proficiency in various programming languages and frameworks showcases his dedication to continuous growth and excellence. I seeks opportunities to leverage his skills for the greater good, aiming to make a meaningful impact in the world of technology. With my relentless spirit and determination, I am undoubtedly on the path to a promising and successful future in the realm of computer science and beyond.</p>
      </div>
    </div>
  )
}

export default About
