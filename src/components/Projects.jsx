import React from 'react'
import ProjectsSource from '../data/ProjectsSource.json'


export const Projects = () => {
  return (
    <>
      <div id="projects" className='min-h-screen pt-24 md:pt-16 bg-gradient-to-b from-gray-900 to-gray-900'>
        <div className='md:mx-20 mx-5 text-white'>
          <div className='pb-8 md:pb-20 md:pt-2 '>
            <p className='font-bold md:text-5xl  text-3xl'>Projects</p>
            <p>Checkout some of my work which demonstrate my skills.</p>
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1   md:gap-10 gap-10'>


            {
              ProjectsSource.map((e) => (

                <>

                  <div className=' h-fit group shadow-md   shadow-blue-500  rounded-md p-3 cursor-pointer'>
                    <div className='text-center relative  overflow-hidden  '>
                      <img src={e.image} className='  ' alt="" />
                      <div className='absolute h-full w-full bg-black/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>

                        <div className='flex flex-col gap-6 pt-12'>
                          <div className='flex justify-center gap-12'>
                            <a href={e.demo} target="_blank" rel="noopener noreferrer">
                              <button className='bg-gradient-to-r text-md md:text-xl font-semibold from-cyan-500 to-blue-700 px-6 py-1 rounded text-white'>Live</button></a>

                            <a href={e.code} target="_blank" rel="noopener noreferrer">
                              <button className='bg-gradient-to-r text-md md:text-xl font-semibold from-cyan-500 to-blue-700 px-6 py-1 rounded text-white'>Code</button>
                            </a>
                          </div>
                          <p className='font-bold text-sm md:text-md'>{e.stack}</p>
                        </div>

                      </div>
                      <p className='text-xl font-bold py-2'>{e.title}</p>
                      <p className='px-3 '>{e.desc}</p>


                    </div>


                    <div className='flex flex-wrap px-3 pt-3 gap-3  justify-start'>
                      { e.tech.map((t)=>(

                        <span className='bg-gradient-to-b from-black to-gray-900 px-2 text-sm 
                      py-1'>{t}</span>
                      ))
                      }


                    </div>

                    
                  </div>




                </>






              ))
            }



          </div >





        </div>











      </div>
    </>
  )
}
