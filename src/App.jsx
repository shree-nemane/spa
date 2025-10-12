import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Branches from './pages/Branches'
import Contact from './pages/Contact'
import ScrollToTop from './component/Scroll/ScrollToTop'

function App() {

  return (
    <div >
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
