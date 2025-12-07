import React, { useState, useEffect } from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "RonZone Interactive Course",
    description: "An immersive Articulate Storyline 360 course showcasing interactive storytelling and user engagement.",
    image: "assets/vzone-preview.gif",
    link: "#",
    courseUrl: "courses/ronzone/index.html?cmi5Expiry=2099-01-01&ResetData=True",
    isCourse: true,
    details: "Built with Articulate Storyline 360, this interactive course demonstrates advanced branching scenarios, custom JavaScript interactions, and engaging multimedia content."
  },
  {
    id: 2,
    title: "Crypto Screener Application",
    description: "A powerful tool for tracking and analyzing cryptocurrency trends in real-time.",
    image: "assets/project1.png",
    link: "#"
  },
  {
    id: 3,
    title: "Stock Market Dashboard",
    description: "An interactive dashboard to monitor stock prices and market trends efficiently.",
    image: "assets/project1.png",
    link: "#"
  }
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openProject = (project) => {
    if (project.isCourse) {
      try {
        // Remove probable Storyline/Articulate resume keys from localStorage
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (/storyline|articulate|resume|scorm|slplayer|player|course/i.test(k)) keysToRemove.push(k);
        }
        keysToRemove.forEach((k) => localStorage.removeItem(k));
      } catch (e) {
        // ignore storage errors
      }

      // Ensure ResetData is present and append a timestamp to avoid resume/caching
      let url = project.courseUrl || project.link || '';
      if (!/ResetData=True/i.test(url)) {
        url += (url.includes('?') ? '&' : '?') + 'ResetData=True';
      }
      url += '&t=' + Date.now();

      setSelected({ ...project, courseUrl: url });
    } else {
      setSelected(project);
    }
  };

  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="flex justify-between items-center flex-col lg:flex-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-2/5 w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
                onClick={() => openProject(project)}
                role="button"
                aria-label={`Open ${project.title} details`}
              />
            </div>

            <div className="lg:w-3/5 lg:space-y-6 space-y-4 lg:pl-20">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              {project.link === '#' ? (
                <button
                  onClick={() => openProject(project)}
                  className="text-white mt-3 block"
                  aria-label={`Open ${project.title} details`}
                >
                  <TbExternalLink size={23} />
                </button>
              ) : (
                <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                  <TbExternalLink size={23} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setSelected(null)}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className={`bg-white rounded-lg overflow-hidden relative ${selected.isCourse ? 'max-w-6xl w-full h-[90vh] flex flex-col' : 'max-w-4xl w-full'}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 bg-black text-white rounded-full w-9 h-9 flex items-center justify-center z-10"
              aria-label="Close"
            >
              ✕
            </button>

            {selected.isCourse ? (
              // Storyline course view - landscape with 50/50 split
              <div className="flex flex-col h-full">
                {/* Top 50% - Course iframe */}
                <div className="flex-1 w-full overflow-hidden">
                  <iframe
                    src={selected.courseUrl}
                    title={selected.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="fullscreen"
                  />
                </div>
                {/* Bottom 50% - Course info */}
                <div className="flex-1 w-full p-6 bg-white overflow-y-auto border-t border-gray-200">
                  <h3 className="text-2xl font-bold mb-3">{selected.title}</h3>
                  <p className="text-gray-600 mb-3">{selected.description}</p>
                  {selected.details && <p className="text-sm text-gray-500 mb-4">{selected.details}</p>}
                  <div className="flex items-center gap-3 mt-4">
                    <button onClick={() => setSelected(null)} className="px-4 py-2 bg-black text-white rounded">Close</button>
                  </div>
                </div>
              </div>
            ) : (
              // Standard project view
              <div className="md:flex h-full">
                <div className="md:w-1/2 w-full">
                  <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 w-full p-6 bg-white overflow-y-auto">
                  <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
                  <p className="text-gray-600 mb-4">{selected.description}</p>
                  {selected.details && <p className="text-sm text-gray-500 mb-4">{selected.details}</p>}
                  <div className="flex items-center gap-3">
                    {selected.link && selected.link !== '#' && (
                      <a href={selected.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-black text-white rounded">Visit</a>
                    )}
                    <button onClick={() => setSelected(null)} className="px-4 py-2 border rounded">Close</button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
