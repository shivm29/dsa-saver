import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Tags from './pages/Tags'
import Revise from './pages/Revise'
import Progress from './pages/Progress'
import History from './pages/History'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Tags />} ></Route>
        <Route path='/to-revise' element={<Revise />} ></Route>
        <Route path='/your-progress' element={<Progress />} ></Route>
        <Route path='/history' element={<History />} ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
