import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
            <Route  path = '/' element={<Home/>}/>
             <Route path = '/Contact' element={<Contact/>}/>
              <Route path = '/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
