import { React, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { MdOutlineClear } from 'react-icons/md'
import { Link } from 'react-scroll'

export const Navbar = () => {

  const [toggle, setToggle] = useState(false)


  return (
    <>

      <div>
        <div className='flex z-20 fixed py-2 w-full  justify-between bg-black text-white  '>
          <div className='handWrite md:text-4xl text-3xl px-2'>Sujal</div>
          <ul className='md:flex font-bold hidden justify-center items-center flex-row gap-12 pr-8 py-2 text-xl'>
            <Link className='cursor-pointer hover:text-cyan-500' spy={true} smooth={true} offset={0} duration={300} to="home">Home</Link>
            <Link className='cursor-pointer hover:text-cyan-500' spy={true} smooth={true} offset={0} duration={300} to="about">About</Link>
            <Link className='cursor-pointer hover:text-cyan-500' spy={true} smooth={true} offset={0} duration={300} to="experience">Skills</Link>
            <Link className='cursor-pointer hover:text-cyan-500' spy={true} smooth={true} offset={0} duration={300} to="projects">Projects</Link>
            <Link className='cursor-pointer hover:text-cyan-500' spy={true} smooth={true} offset={0} duration={300} to="certificates">Certificates</Link>
            <Link className='cursor-pointer hover:text-cyan-500' spy={true} smooth={true} offset={0} duration={300} to="contact">Contact</Link>
          </ul>
          <div className='md:hidden right-2 top-3 fixed flex'>
            {
              toggle ?
                <MdOutlineClear className='cursor-pointer' onClick={() => setToggle(!toggle)} size={27} />
                :
                <FaBars className='cursor-pointer' onClick={() => setToggle(!toggle)} size={25} />
            }
          </div>

        </div>
        <div className={` ${toggle ? "flex" : "hidden"} `} >
          <ul className='md:hidden top-12 fixed w-full flex justify-top items-center flex-col gap-16 pt-24 z-10 h-screen py-8 text-xl bg-gray-900 opacity-95 text-white font-bold'>
            <Link className='cursor-pointer' spy={true} smooth={true} offset={0} duration={300} onClick={() => setToggle(!toggle)} to="home">Home</Link>
            <Link className='cursor-pointer' spy={true} smooth={true} offset={0} duration={300} onClick={() => setToggle(!toggle)} to="experience">Skills</Link>
            <Link className='cursor-pointer' spy={true} smooth={true} offset={0} duration={300}  onClick={() => setToggle(!toggle)} to="projects">Projects</Link>
            <Link className='cursor-pointer' spy={true} smooth={true} offset={0} duration={300}  onClick={() => setToggle(!toggle)} to="certificates">Certificates</Link>
            <Link className='cursor-pointer' spy={true} smooth={true} offset={0} duration={300} onClick={() => setToggle(!toggle)} to="contact">Contact</Link>
          </ul>
        </div>
      </div>

    </>
  )
}
