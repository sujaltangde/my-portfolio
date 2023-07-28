import React from 'react';

export const About = () => {


  return (
    <>

      <div id="about" className='min-h-screen pt-8 md:pt-16 bg-gray-800'>
        <div className='md:mx-20 mx-5 text-white'>
          <div>
            <p className=' md:text-5xl font-bold pb-5 text-3xl'>About Me</p>
          </div>


          <div className='md:pt-8 pt-2'>
            <p>Hi there!, My name is Sujal Tangde, and I am a full stack developer. Currently, I am pursuing my Bachelor's Degree in Computer Applications from City Premier College in Nagpur. I have always been passionate about working on challenging projects, and my main focus is on building highly functional websites with high-quality interfaces. </p>
            <p className='md:pt-6 pt-3 md:flex hidden'>The first language I learned was C, which taught me about programming fundamentals. Afterward, I discovered web development and delved deeper into this field. I made the decision to focus on web development as my main skill and began learning more about it.</p>

            <p className='md:pt-6 pt-1'>I am a quick learner who easily adapts to any technology or skill and stays updated with the latest technology trends.</p>
          </div>

          <div className='md:justify-start md:gap-16 justify-center flex  md:flex-row flex-col '>
            <div className='md:pt-8 pt-5'>
              <p className='font-bold text-xl pb-2 text-blue-400'>Personal Info</p>
              <p className='font-semibold'>Name : Sujal Tangde</p>
              <p className='font-semibold'>Nationality : Indian</p>
              <p className='font-semibold'>Email : sujaltagade01@gmail.com</p>
              <p className='font-semibold'>Phone : +91 7020197537</p>
              <p className='font-semibold'>Languages : English, Hindi, Marathi</p>
            </div>

            <div className='md:pt-8 pt-5'>
              <p className='font-bold text-xl text-blue-400'>Education</p>

              <div className='pt-2'>
                <p className='font-semibold'>City Premier College, Nagpur</p>
                <p className='font-semibold'>Bachelor of Computer Application</p>
                <p className='font-semibold'>Aug 2021 - Aug 2024</p>
              </div>
              <div className='pt-2'>
                <p className='font-semibold'>Green City Junior College, Nagpur</p>
                <p className='font-semibold'>H.S.C, Information Technology</p>
                <p className='font-semibold'>Jun 2019 - Jun 2021</p>
              </div>
            </div>


          </div>

           
      
         
        </div>
      </div>


    </>
  )
}
