import React from 'react'
import { Link } from 'react-scroll'

export const Footer = () => {
  return (
    <>

        {/* <div className=' bg-gray-800'>
        
            <div className='bg-gray-900 py-5 '>
                <p className='text-center text-white'>All rights reserved</p>
            </div>
        </div> */}



<footer class="bg-gray-900 text-white py-4">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row items-start md:justify-between justify-start">
      <div class="mb-3  md:mb-0">
        <p class="text-lg font-semibold">Sujal Tangde</p>
        <p class="text-sm">Web Developer</p>
      </div>
      <nav class="grid md:grid-cols-6 grid-cols-3 md:gap-0 gap-2">
       
      <Link className='cursor-pointer hover:text-cyan-500' spy={true} smooth={true} offset={0} duration={300} to="home">Home</Link>
            <Link className='cursor-pointer hover:text-cyan-500' spy={true} smooth={true} offset={0} duration={300} to="about">About</Link>
            <Link className='cursor-pointer hover:text-cyan-500' spy={true} smooth={true} offset={0} duration={300} to="experience">Skills</Link>
            <Link className='cursor-pointer hover:text-cyan-500' spy={true} smooth={true} offset={0} duration={300} to="projects">Projects</Link>
            <Link className='cursor-pointer hover:text-cyan-500' spy={true} smooth={true} offset={0} duration={300} to="certificates">Certificates</Link>
            <Link className='cursor-pointer hover:text-cyan-500' spy={true} smooth={true} offset={0} duration={300} to="contact">Contact</Link>
      </nav>
    </div>
    <hr class="my-4 border-gray-800" />
    <p class="text-center text-sm">All rights reserved &copy; 2023 Sujal Tangde</p>
  </div>
</footer>

    </>
  )
}
