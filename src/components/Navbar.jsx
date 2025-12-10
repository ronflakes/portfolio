import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import AnalyticsDashboard from "./AnalyticsDashboard";

export default function Navbar({ darkMode, setDarkMode }) {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 p-5 transition-all duration-300 ${hasShadow ? "shadow-md" : "shadow-none"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center gap-x-4">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("home")}
          onDoubleClick={() => setShowAnalytics(true)}
          className="h-9 cursor-pointer"
          src="assets/logo.png"
          alt="Logo"
          title="Double-click for analytics"
        />

        <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
          {["about", "skills", "projects", "contact"].map((section) => (
            <motion.li
              key={section}
              className="group"
              whileHover={{ scale: 1.1 }}
            >
              <button onClick={() => scrollToSection(section)} className="dark:text-white">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <motion.span
                className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black dark:bg-white flex"
                layout
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-x-4">
          {/* Dark Mode Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <MdLightMode size={20} className="text-yellow-400" /> : <MdDarkMode size={20} className="text-gray-700" />}
          </motion.button>

          <motion.a
          href="Ron Taruc CV 2025.pdf"
          target="_blank"
          className="hidden relative lg:inline-block px-4 py-2 font-medium group"
          onClick={() => {
            if (typeof window.gtag !== 'undefined') {
              window.gtag('event', 'resume_download', {
                event_category: 'Downloads',
                event_label: 'Resume from Navbar'
              });
            }
          }}
        >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white dark:bg-gray-800 border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white"></span>
            <span className="relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black flex items-center gap-x-3">
              Resume <TbDownload size={16} />
            </span>
          </motion.a>
        </div>

        <div className="lg:hidden flex items-center gap-x-3">
          {/* Dark Mode Toggle Mobile */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <MdLightMode className="text-yellow-400" /> : <MdDarkMode className="text-gray-700" />}
          </motion.button>

          <motion.button
            className="text-2xl dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.2 }}
          >
            {isOpen ? <HiX /> : <HiOutlineMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-gray-800 shadow"
          >
            <button
              className="absolute top-5 right-5 text-2xl dark:text-white"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
            <ul className="flex flex-col items-start ml-16 mt-28 h-full gap-y-6 font-semibold">
              {["about", "skills", "projects", "contact"].map((section) => (
                <motion.li
                  key={section}
                  className="border-b dark:border-gray-600"
                  whileHover={{ scale: 1.1 }}
                >
                  <button onClick={() => scrollToSection(section)} className="dark:text-white">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </motion.li>
              ))}
              <motion.a
                href="Ron Taruc CV 2025.pdf"
                target="_blank"
                className="relative inline-block px-4 py-2 font-semibold group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white dark:bg-gray-800 border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white"></span>
                <span className="relative text-black dark:text-white group-hover:text-white dark:group-hover:text-black flex items-center gap-x-3">
                  Resume <TbDownload size={16} />
                </span>
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secret Analytics Dashboard */}
      <AnalyticsDashboard isOpen={showAnalytics} onClose={() => setShowAnalytics(false)} />
    </motion.nav>
  );
}
