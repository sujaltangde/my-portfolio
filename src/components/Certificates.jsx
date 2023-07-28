import React from 'react'
import CertificateSource from '../data/CertificateSource.json'

export const Certificates = () => {
    return (
        <>


            <div id="certificates" className='min-h-screen pt-24 md:pt-16 bg-gradient-to-b from-gray-900 to-gray-900'>
                <div className='md:px-20 px-5'>
                    <div className='text-white'>
                        <p className='font-bold md:text-5xl  text-3xl'>Certificates</p>
                        <p>Checkout some of my certificates which I gained through participating in hackathons and coding competitions. </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center md:pt-14 pt-5 gap-5 items-center'>


                    {
                        CertificateSource.map((e) => (


                            <div className='text-white rounded grid md:grid-cols-4 pt-2 pb-1 px-3 grid-cols-1 
                          bg-gradient-to-r from-gray-800 to-gray-900 md:w-3/4 w-80  '>

                                <div className='md:flex hidden w-10 h-10 bg-white  rounded-md justify-center items-center'>
                                    <img src={e.logo} className='object-cover rounded w-full h-full' alt="" />
                                </div>


                                <div className='md:flex hidden flex-col text-left '>
                                    <p className='font-bold'>{e.name}</p>
                                    <p className='text-sm opacity-50'>{e.org}</p>
                                </div>


                                <div className='md:hidden flex flex-row gap-3'>
                                <div className='w-10 h-10 bg-white flex rounded-md justify-center items-center'>
                                    <img src={e.logo} className='object-cover rounded w-full h-full' alt="" />
                                </div>


                                <div className='flex flex-col text-left '>
                                    <p className='font-bold'>{e.name}</p>
                                    <p className='text-sm opacity-50'>{e.org}</p>
                                </div>
                                </div>




                                <div className='md:flex hidden justify-center items-center'>
                                    <p>{e.date}</p>
                                </div>


                                <div className='flex md:justify-center items-center justify-between'>
                                <p className='md:hidden flex pr-12 text-sm'>{e.date}</p>
                                    <a href={e.link} target='_blank'> <button className='py-1 px-3 rounded-md bg-opacity-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold'>View</button> </a>
                                </div>


                            </div>




                        ))
                    }
                </div>


            </div>




        </>
    )
}
