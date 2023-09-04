import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Notify from './Notify'

function App() {



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/done' element={<Notify />} />
      </Routes>

     
    </div>
  )
}

export default App
