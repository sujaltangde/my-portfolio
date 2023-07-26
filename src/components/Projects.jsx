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


                <div key={e.key} className='bg-gray-900 p-3  shadow-blue-300 pt-2 shadow-md rounded-md relative overflow-hidden'>


                  <div className='object-cover'>
                    <img src={e.image} className='object-cover rounded-md w-full h-full' alt="" />
                  </div>
                  <p className='text-center text-xl pt-2 pb-1 font-bold'>{e.title}</p>
                  <p className='text-center text-sm'>{e.desc} </p>
                  <p className='text-center text-white font-bold mt-2    rounded-md pb-1 pt-1 text-sm'>{e.stack}</p>


                  <div className="bottom-opening ">
                    <div className="">
                      <div className="flex justify-center gap-5 items-center h-full">

                        <a href={e.code} target='_blank'><button className="bg-gradient-to-r from-purple-500 to-purple-900 text-white font-bold rounded-lg px-8 py-2 mx-2">Code</button></a>

                        <a href={e.demo} target='_blank'>
                          <button className="bg-gradient-to-r from-purple-500 to-purple-900 text-white font-bold rounded-lg px-8 py-2 mx-2">Demo</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>






              ))
            }



          </div>

          <div className='pt-20'>
            <p className='text-center'>Checkout some of my projects above that demonstrate my skills and expertise as a Full Stack Web Developer. Each project showcases the technologies used, challenges overcome, and the impact it made. Feel free to explore the live projects or view their source code on GitHub.</p>
          </div>


        </div>
      </div>
    </>
  )
}
