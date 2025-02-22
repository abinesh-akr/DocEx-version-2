import { useState } from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import About from './About'


function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </>
  )
}

export default App
