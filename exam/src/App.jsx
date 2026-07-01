import { useState } from 'react'

import './App.css'
import Navbar from './Companents/Navbar/Navbar'
import Footer from './Companents/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
