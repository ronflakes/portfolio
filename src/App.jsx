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
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <div key="content" className='font-sora scroll-smooth overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300'>
          <ScrollProgress />
          <CustomCursor/>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
