import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound'
import Projects from './pages/Projects'
import Clients from './pages/Clients'
import Journey from './pages/Journey'
import Services from './pages/Services'
import Whyus from './Whyus'
import Navbar2 from './components/Navbar2'
const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />}>
          <Route path="projects" element={<Projects />} />
          <Route path="clients" element={<Clients />} />
          <Route path="journey" element={<Journey />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id' element={<Whyus />} />

        <Route path='*' element={<Notfound />} />


      </Routes>
      <Footer />
    </div>
  )
}

export default App
