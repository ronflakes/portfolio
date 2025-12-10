import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './utils/CursorAnimation'
import PasswordGate from './components/PasswordGate'

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <div key="content" className='font-sora scroll-smooth overflow-x-hidden'>
          <ScrollProgress />
          <CustomCursor/>
          <Navbar />
          <Home />
          <Skills />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  )
}
