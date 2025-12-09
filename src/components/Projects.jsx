import React, { useState, useEffect } from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Gamified Template",
    description: "An end-to-end gamified template featuring turn-based combat, collectibles, and boss battles built entirely in Storyline 360 to prove learning can be an adventure.\n\nIt started with a casual challenge from a Senior Developer who asked, \"Wouldn't it be cool if we had a truly gamified experience?\" Challenge accepted. I didn't want to just add points and badges; I wanted to recreate the feeling of classic RPGs like Pokémon. The goal was to create a reusable \"Game Template\" that other developers could utilize a robust framework containing core mechanics like progression, exploration, and combat where any instructional content could be plugged in, making the learning process genuinely enjoyable and immersive.",
    image: "assets/vzone-preview.mp4",
    videoSrc: "assets/vzone-preview.mp4",
    link: "#",
    previewUrl: "https://ronflakes.github.io/courses/ronmon_demo/index.html",
    isPreview: true,
    details: "The main hurdle was that Articulate Storyline is an authoring tool, not a game engine. Implementing complex mechanics like an Inventory System, Turn-Based Combat, and Boss AI required pushing the software far beyond its intended limits. I treated the slide deck like a software application, building a web of advanced variables to track Health Points (HP), Experience (XP), and Inventory items globally across the course. To bridge the gap between Storyline's limitations and game logic, I wrote custom JavaScript to handle dynamic calculations, such as damage computation during \"battles,\" and UI updates that native triggers couldn't handle. I also designed \"Boss Battles\" where answering questions correctly deals damage to the enemy, effectively turning standard assessments into high-stakes encounters.\n\nThis project set a new standard for what our team can deliver, proving that high-fidelity gaming experiences are possible within standard eLearning tools without needing Unity or Unreal Engine. It provided the development team with a scalable, plug-and-play template that significantly reduced build time for future gamified projects. Most importantly, it transformed the \"grind\" of learning into a quest users reported that the drive to collect items and defeat bosses made them eagerly consume content they would usually skim."
  },
  {
    id: 2,
    title: "A Cinematic Choose Your Own Story",
    description: "A high-fidelity interactive movie that puts the learner in the driver's seat, blending video production with complex Storyline 360 branching to simulate critical real-world decisions. \n\nRisk management training is often dry, theoretical, and passive. The Risk Management Team wanted to break this mold and teach users about compliance in a highly creative manner. The goal was to move away from static slides and create a \"Choose Your Own Adventure\" experience where learners aren't just watching, they are deciding the outcome. We needed a simulation that allowed for multiple endings, both good and bad, to encourage repeat plays and deeper retention.",
    image: "assets/collapse-preview.mp4",
    videoSrc: "assets/collapse-preview.mp4",
    link: "#",
    previewUrl: "https://360.articulate.com/review/content/79da8dcb-5381-4bf0-b14c-a62810ea7fbb/review",
    isPreview: true,
    details: "The main challenge was orchestrating a seamless cinematic experience where video playback feels continuous despite the branching logic running in the background. I utilized Articulate Storyline 360's advanced branching capabilities to map out a complex narrative tree. Unlike linear courses, this required a sophisticated logic structure to track user decisions, triggering specific video segments that lead to different consequences. The result is a seamless fusion of high-level multimedia production and instructional design technology.\n\nThis project redefined how the organization views compliance training. By gamifying the narrative, we created a safe environment where learners can experience the \"bad endings\" (consequences) of poor risk management without actual real-world repercussions. The multi-ending format significantly boosted engagement, with users voluntarily re-taking the course just to see how different choices would play out—turning a mandatory requirement into an engaging interactive film."
  },
  {
    id: 3,
    title: "Stock Market Dashboard",
    description: "An interactive dashboard to monitor stock prices and market trends efficiently.",
    image: "assets/heist-preview.mp4",
    videoSrc: "assets/heist-preview.mp4",
    link: "#",
    isPreview: true,
    details: ""
  },
  {
    id: 4,
    title: "Bully Prevention Program",
    description: "An interactive training module designed to help students recognize and respond to bullying situations.",
    image: "assets/bully-preview.mp4",
    videoSrc: "assets/bully-preview.mp4",
    link: "#",
    isPreview: true,
    details: ""
  },
  {
    id: 5,
    title: "Electric Safety Course",
    description: "A comprehensive course on electrical safety protocols and hazard prevention.",
    image: "assets/electric-preview.mp4",
    videoSrc: "assets/electric-preview.mp4",
    link: "#",
    isPreview: true,
    details: ""
  },
  {
    id: 6,
    title: "Rise to Success",
    description: "An motivational learning experience focused on personal growth and achievement.",
    image: "assets/rise-preview.mp4",
    videoSrc: "assets/rise-preview.mp4",
    link: "#",
    isPreview: true,
    details: ""
  },
  {
    id: 7,
    title: "Safe Handling Procedures",
    description: "Training module for proper and safe material handling techniques.",
    image: "assets/safe-preview.mp4",
    videoSrc: "assets/safe-preview.mp4",
    link: "#",
    isPreview: true,
    details: ""
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

      <div className="lg:mt-16 mt-8 grid gap-8 lg:gap-10 lg:grid-cols-3 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-4 flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-96 rounded-xl overflow-hidden">
              <video
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
                src={project.videoSrc}
                onClick={() => openProject(project)}
                autoPlay
                muted
                loop
                role="button"
                aria-label={`Open ${project.title} details`}
              />
            </div>

            <div className="space-y-3">
              <h2 className="font-extrabold text-white text-3xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-2xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description.split('\n')[0]}
              </p>
              {project.link === '#' ? (
                <button
                  onClick={() => openProject(project)}
                  className="text-white mt-1 block"
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
              // Storyline course view - vertical layout
              <div className="flex flex-col h-full">
                <div className="w-full overflow-hidden bg-white cursor-pointer" onClick={() => window.open(selected.courseUrl, '_blank')}>
                  <video src={selected.videoSrc} className="w-full hover:opacity-80 transition-opacity" autoPlay muted loop />
                </div>
                <div className="flex-1 w-full p-6 bg-white overflow-y-auto border-t border-gray-200">
                  <h3 className="text-2xl font-bold mb-4">{selected.title}</h3>
                  {selected.details && (
                    <div className="text-gray-700">
                      {selected.details.split('\n\n').map((para, idx) => (
                        <p key={idx} className="mb-4">{para}</p>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-3 mt-6">
                    <a href={selected.courseUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2">
                      View Full Course <TbExternalLink />
                    </a>
                    <button onClick={() => setSelected(null)} className="px-4 py-2 bg-black text-white rounded">Close</button>
                  </div>
                </div>
              </div>
            ) : selected.isPreview ? (
              // Articulate preview view - vertical layout
              <div className="flex flex-col h-full">
                <div className="w-full overflow-hidden bg-white cursor-pointer" onClick={() => window.open(selected.previewUrl, '_blank')}>
                  <video src={selected.videoSrc} className="w-full hover:opacity-80 transition-opacity" autoPlay muted loop />
                </div>
                <div className="flex-1 w-full p-6 bg-white overflow-y-auto border-t border-gray-200">
                  <h3 className="text-2xl font-bold mb-4">{selected.title}</h3>
                  {selected.details && (
                    <div className="text-gray-700">
                      {selected.details.split('\n\n').map((para, idx) => (
                        <p key={idx} className="mb-4">{para}</p>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-3 mt-6">
                    <a href={selected.previewUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2">
                      View Full Preview <TbExternalLink />
                    </a>
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
                  <h3 className="text-2xl font-bold mb-4">{selected.title}</h3>
                  {selected.details && (
                    <p className="text-gray-700 mb-4">{selected.details}</p>
                  )}
                  <div className="flex items-center gap-3 mt-6">
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
