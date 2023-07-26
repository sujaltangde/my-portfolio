import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


function App() {


  return (
    <>

      <Navbar/>
      <Header/>
      {/* <About/> */}
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
