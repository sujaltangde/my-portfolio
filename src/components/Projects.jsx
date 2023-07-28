import React from 'react'
import ProjectsSource from '../data/ProjectsSource.json'

export const Projects = () => {
  return (
    <>
      <div id="projects" className='min-h-screen pt-8 md:pt-16 bg-gradient-to-b from-gray-900 to-gray-900'>
        <div className='md:mx-20 mx-5 text-white'>
          <div className='pb-8 md:pb-20 md:pt-2 '>
            <p className='font-bold md:text-5xl  text-3xl'>Projects</p>
            <p>Checkout some of my work which demonstrate my skills.</p>
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1   md:gap-10 gap-10'>


            {
              ProjectsSource.map((e) => (

                <>

                  <div className=' '>
                    <div className='text-center relative  hover:bg-blue-500 '>
                      <img src={e.image} className=' hover:opacity-25 ' alt="" />
                      <p className='text-xl hover:opacity-25 py-2'>{e.title}</p>
                      <p className='px-3 hover:opacity-25'>{e.desc}</p>
                    </div>

                    
                  </div>


                </>






              ))
            }



          </div>


        </div>
      </div>
    </>
  )
}
