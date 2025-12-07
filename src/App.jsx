import React, { useEffect } from 'react'
import Home from './pages/Home'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './utils/CursorAnimation'
import PasswordGate from './components/PasswordGate'

export default function App() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <PasswordGate>
      <div className='font-sora scroll-smooth overflow-x-hidden'>
        <CustomCursor/>
        <Navbar />
        <Home />
        <Skills />
        <About />
        <Projects />
        <Contact />

        <Footer />
      </div>
    </PasswordGate>
  )
}
