import React from 'react'
import SkiilsSource from '../data/SkiilsSource.json'


export const Experience = () => {
  return (
    <>
      <div id="experience" className='min-h-screen pt-24 md:pt-16 bg-gradient-to-b from-gray-800 to-gray-900'>
        <div className='md:px-20 px-2'>
          <div className='text-white px-5 '>
            <p className='font-bold md:text-5xl text-3xl'>Skills</p>
            <p>Checkout my technical skills which, I gained through building projects and solving problems.</p>
          </div>
          <div className='md:px-28 px-5'>

            <div className='grid grid-cols-3 md:gap-5  gap-3 md:grid-cols-5 md:pt-10 pt-6 text-white'>
              {
                SkiilsSource.map((e) => (
                  <a href={e.link} target='_blank'>
                  <div key={e.key}  className="flex flex-col  justify-center items-center">
                    <img src={e.logo} className={` md:w-2/5  w-full`} alt="" />

                    {e.key === 5 ?
                      (<p className='pt-5 md:text-xl text-sm'>{e.name}</p>)
                      :
                      (<p className='pt-2 md:text-xl text-sm'>{e.name}</p>)
                    }
                  </div>
                  </a>
                ))
              }







            </div>

          </div>
        </div>
      </div>
    </>
  )
}
