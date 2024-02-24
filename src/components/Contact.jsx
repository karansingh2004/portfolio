import React from 'react'

const Contact = () => {
    return (

        // use h-100 in below line and change mt-['x' px] while changing tech
        <div name='contact' className='w-full h-100 bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col mt-[800px] sm:mt-4 p-4 justify-center mx-auto max-w-screen-lg h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/455ba776-c19a-40df-bbf9-5f1c395bf87b" method='POST' className='flex flex-col w-full md:w-1/2  '>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                    <input type="text" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                    <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 border-2 bg-transparent rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact
