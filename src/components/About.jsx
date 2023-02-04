import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg w-full h-full p-4 mx-auto flex flex-col justify-center'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='md:text-xl md:mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat, mollitia porro unde eos minus alias fugiat perferendis ad similique molestias consequuntur officiis beatae corporis quod accusamus. Nostrum consequuntur dolores voluptate libero veniam provident nesciunt sunt quis adipisci, quasi animi quaerat eum cum laboriosam quam at cumque vitae cupiditate velit.</p>

        <br />

        <p className='md:text-xl md:mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quasi porro, accusantium tempore obcaecati dignissimos culpa quaerat laborum error at enim delectus repellat officiis voluptates! Soluta animi et libero, voluptates maxime rerum corporis temporibus error similique! Modi doloremque, unde repudiandae voluptas, id aliquid, cum ex iusto provident recusandae explicabo voluptate.</p>
      </div>
    </div>
  )
}

export default About
