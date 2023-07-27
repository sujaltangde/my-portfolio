import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'


export const Header = () => {
  return (


    <>
      <div id="home" className='min-h-screen pt-8 md:pt-16 bg-gradient-to-b from-black to-gray-800'>
        <div className='flex justify-center pt-12 items-center md:flex-row flex-col md:mx-28 mx-4'>
          <div className='text-white '>
            <p className='font-bold md:text-7xl relative pb-3 md:px-10 text-4xl '>I'm a Full Stack Developer <span className='absolute md:bottom-6  bottom-5 '> <img src="/images/hand.png" className='md:w-14 w-8' alt="" /></span> </p>
            <p className='text-gray-200 md:flex hidden md:px-10 text-lg'>As an full stack developer, I am skilled in React for crafting dynamic UIs and Node.js with Express for building efficient backends. My focus is on delivering software that impresses users with its performance and usability.</p>
            <div className='md:pt-6 pt-3  md:px-10 md:flex hidden justify-start items-center'>
              <a href='https://drive.google.com/file/d/1lUAILSTo0CNlRi58TOZZUNlhemOQ0dhw/view' target='_blank'><button className='px-8 flex flex-row  bg-gradient-to-r py-2 font-bold text-md md:text-lg rounded justify-center items-center   from-blue-700 to-blue-500'>Resume <AiOutlineLink className='pb-1' size={22} /> </button></a>
            </div>
          </div>
          <div className='md:pr-5 '>
            <img src="/images/heroImage.jpg" className=' rounded-2xl mx-auto md:w-full w-56' alt="" />


            <span href=' ' className='absolute md:top-52 top-64 z-0 left-0' target='_blank'>
              <button className='px-2  flex-col  py-2 font-bold text-white md:flex flex text-md md:text-lg md:gap-5 gap-4 rounded justify-center items-center   list-none'>
                <a href="https://twitter.com/SujalTangde" target="_blank" rel="noopener noreferrer">  <FiTwitter size={30} />  </a>
                <a href="https://www.linkedin.com/in/sujal-tangde-6711a8204" target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={32} /></a>
                <a href="https://github.com/sujaltangde" target="_blank" rel="noopener noreferrer"><BsGithub size={30} /></a>
                <a href="mailto:sujaltagade01@gmail.com" rel="noreferrer"><AiOutlineMail size={30} /></a>
              </button>
            </span>



          </div>
          <div className='md:pt-6 pt-5 relative md:px-10 md:hidden text-white flex flex-col justify-end items-center'>
            <p className='text-gray-200 md:hidden text-left flex md:px-10 text-lg'>As an full stack developer, I am skilled in React for crafting dynamic UIs and Node.js with Express for building efficient backends. </p>

            <div className='md:hidden flex absolute right-2 top-28'>
              <a href='https://drive.google.com/file/d/1lUAILSTo0CNlRi58TOZZUNlhemOQ0dhw/view' target='_blank'><button className='px-7 flex flex-row  bg-gradient-to-r py-2 font-bold text-md md:text-lg rounded-md justify-center items-center   from-blue-700 to-blue-500'>Resume <AiOutlineLink className='pb-1' size={22} /> </button></a>
            </div>
          </div>
          <div></div>
        </div>

      </div>
    </>
  )
}
