import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Branches from './pages/Branches'
import Contact from './pages/Contact'
import { Helmet } from 'react-helmet'
import ScrollToTop from './component/Scroll/ScrollToTop'

function App() {

  return (
    <div >
      <Router>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Rua The Wellness Spa</title>
        <meta
          name="description"
          content="Rua The Wellness Spa — Your sanctuary for relaxation, rejuvenation, and holistic wellness."
        />
        <meta name="keywords" content="spa, wellness, massage, aromatherapy, relaxation" />
        <link rel="canonical" href="http://ruathewellness.com/" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="author" content="Rua The Wellness Spa" />
        <meta name="theme-color" content="#C4912F" />
      </Helmet>
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
