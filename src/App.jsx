import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/home/Hero'
import Mostpopular from './components/common/Mostpopular'
import Explorbag from './components/common/Explorbag'
import Professions from './components/common/Professions'
import Newtshop from './components/common/Newtshop'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Mostpopular/>
    <Explorbag/>
    <Professions/>
    <Newtshop/>
      
    </>
  )
}

export default App
