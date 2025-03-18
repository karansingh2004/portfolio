import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import bootstrap from '../assets/bootstrap.png';
import wordpress from '../assets/wordpress.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import linux from '../assets/linux.png';
import python from '../assets/python.png';
import c from '../assets/c.png';
import cpp from '../assets/cpp.png';
import java from '../assets/java.png';
// import canva from '../assets/canva.png';
import jenkins from '../assets/jenkins.png';
import docker from '../assets/docker.png';
import aws from '../assets/aws.png';
import gcp from '../assets/GCP.png';
import terraform from '../assets/terraform.png';
import kubernets from '../assets/kubernets.png';
import intellij from '../assets/IntelliJ IDEA.png';
import gitlab from '../assets/GitLab.png';
import jupyter from '../assets/Jupyter.png';
import sql from '../assets/SQL Developer.png';
import mysql from '../assets/MySQL.png';
import yaml from '../assets/YAML.png';
import xml from '../assets/XML.png';
import swagger from '../assets/Swagger.png';
import ubuntu from '../assets/Ubuntu.png';







const Experience = () => {
    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-[200px] '>
            <div className='max-w-screen-lg mx-auto p-4 pt-[350px] flex flex-col justify-center w-full h-full text-white'>
                {/* While adding new tech change mt-['x'px] same in other pages */}
                <div className='mt-[750px] sm:mt-20'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center mx-30 py-8 px-12 sm:px-0'>

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
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-500'>
                        <img src={bootstrap} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>Bootstrap</p>
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

                    {/* 8th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-600'>
                        <img src={wordpress} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>Wordpress</p>
                    </div>

                    {/* 9th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500'>
                        <img src={linux} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>Linux</p>
                    </div>

                    {/* 10th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500'>
                        <img src={python} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>Python</p>
                    </div>

                    
                    {/* 11th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-700'>
                        <img src={c} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>C</p>
                    </div>

                    
                    {/* 12th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-300'>
                        <img src={cpp} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>C++</p>
                    </div>

                    
                    {/* 13th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-300'>
                        <img src={java} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>Java</p>
                    </div>

                    
                    {/* 14th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-700'>
                        <img src={kubernets} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>Kuberenets</p>
                    </div>

                    
                    {/* 15th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-600'>
                        <img src={jenkins} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>Jenkins</p>
                    </div>

                    
                    {/* 16th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-600'>
                        <img src={docker} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>Docker</p>
                    </div>

                    
                    {/* 17th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-400'>
                        <img src={aws} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>AWS</p>
                    </div>


                    {/* 18th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-white'>
                        <img src={gcp} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>GCP</p>
                    </div>

                    
                    {/* 19th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-700'>
                        <img src={terraform} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>Terraform</p>
                    </div>

                    
                    {/* 20th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-700'>
                        <img src={intellij} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>IntelliJ</p>
                    </div>

                    
                    {/* 21th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-700'>
                        <img src={gitlab} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>GitLab</p>
                    </div>

                    
                    {/* 22th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-700'>
                        <img src={jupyter} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>Jupyter</p>
                    </div>

                    
                    {/* 23th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-700'>
                        <img src={sql} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>SQL Developer</p>
                    </div>

                    
                    {/* 24th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-700'>
                        <img src={mysql} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>MySQL</p>
                    </div>

                    
                    {/* 25th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-700'>
                        <img src={yaml} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>YAML</p>
                    </div>

                    
                    {/* 26th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-700'>
                        <img src={xml} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>XML</p>
                    </div>

                    
                    {/* 27th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-700'>
                        <img src={swagger} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>Swagger</p>
                    </div>

                    
                    {/* 28th */}
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-700'>
                        <img src={ubuntu} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>Ubuntu</p>
                    </div>

                
                </div>

            </div>
        </div>
    )
}

export default Experience
