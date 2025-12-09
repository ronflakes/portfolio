import React, { useState, useEffect } from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "The RPG Learning Engine",
    description: "The RPG Learning Engine: A fully functional, Pokémon-inspired game template featuring turn-based combat, exploration maps, and collectibles built to prove that Storyline 360 can run a full-scale RPG (Role Playing Game) experience.",
    image: "assets/vzone-preview.mp4",
    videoSrc: "assets/vzone-preview.mp4",
    link: "#",
    previewUrl: "https://ronflakes.github.io/courses/ronmon_demo/index.html",
    isPreview: true,
    details: "It started with a casual wish from a Senior Developer who wondered, \"Wouldn't it be cool if we had a truly gamified experience?\" Challenge accepted. Drawing inspiration from classics like Pokémon and typical RPGs, I set out to build something beyond a simple point-and-click course. The goal was to create a comprehensive, end-to-end \"Game Template\" that other developers could use—a robust framework complete with progression systems, combat, puzzles, and boss battles designed to make the learning process not just bearable, but genuinely rewarding.\n\nTo pull this off, I pushed Articulate Storyline to its absolute limits, utilizing complex variable structures and custom JavaScript to engineer the \"bells and whistles\" of a true RPG. The template features map-based exploration where learners gain both in-game experience (XP) and actual knowledge as they progress.\n\nA key feature I introduced is the \"Knowledge Hub.\" Instead of boring handouts, learners \"loot\" or collect information in the form of in-game Books, which are stored in their personal inventory to be read anytime. This mechanic creates a sense of ownership and accomplishment transforming content consumption into a treasure hunt. This project stands as a proof-of-concept for the community, hoping to spark inspiration in other developers to break the mold and try a completely different, enjoyable approach to eLearning."
  },
  {
    id: 2,
    title: "A Cinematic Choose Your Own Story",
    description: "A high-fidelity interactive movie that puts the learner in the driver's seat, blending professional video production with complex Storyline 360 branching to simulate critical real-world decisions.",
    image: "assets/collapse-preview.mp4",
    videoSrc: "assets/collapse-preview.mp4",
    link: "#",
    previewUrl: "https://360.articulate.com/review/content/79da8dcb-5381-4bf0-b14c-a62810ea7fbb/review",
    isPreview: true,
    details: "The Risk Management team provided high-level video production assets with a vision to teach compliance in a very creative manner. They did an awesome job producing the raw footage, so it was only right that I transformed their work into an engaging and unique presentation. The goal was to move away from static slides and create a \"Choose Your Own Adventure\" experience where learners aren't just watching—they are deciding the outcome in a cinematic environment with multiple endings, both good and bad.\n\nThis project was a true 50/50 split between post-production and instructional design. I utilized my Adobe Premiere Pro skills to fine-tune and color-grade the raw videos, ensuring visual consistency before importing them into the authoring tool. Inside Articulate Storyline 360, I built a sophisticated logic structure to map out the branching narrative, ensuring the video transitions felt seamless despite the complex decision trees running in the background.\n\nThe result is a seamless fusion of multimedia art and instructional technology. The multi-ending format encouraged learners to replay the course voluntarily to see different outcomes, successfully turning a mandatory risk management training into an exciting, replayable interactive film."
  },
  {
    id: 3,
    title: "The Heist: Gamified Systems Simulation",
    description: "A high-stakes, heist-themed software simulation where learners act as elite agents mastering complex tool navigation to retrieve a stolen masterpiece.",
    image: "assets/heist-preview.mp4",
    videoSrc: "assets/heist-preview.mp4",
    link: "#",
    previewUrl: "https://360.articulate.com/review/content/b9a784da-bc2e-487b-b8b5-ced28fadeab8/review",
    isPreview: true,
    details: "Software simulations are notoriously dry, repetitive, and often lead to \"click-fatigue.\" The challenge was to take a standard, technical tool training and make it exciting enough to keep learners glued to the screen. I wanted to completely reframe the learning experience—shifting the mindset from \"I need to learn this button\" to \"I need to hack this system to complete the mission.\"\n\nTo achieve this, I wrapped the technical content in a cinematic \"Heist\" narrative inspired by Mission Impossible. Learners assume the role of a secret agent hired to retrieve a stolen painting, where every navigational test serves as a security protocol they must bypass.\n\nTo support the learner without breaking immersion, I designed a \"Jarvis-like\" AI guide character. This character acts as an intelligent companion, providing real-time tutorials and lore, effectively adding flavor to what would otherwise be a boring walkthrough. This approach transformed mundane drills into rewarding challenges providing a tangible sense of accomplishment after every task and significantly boosting long-term retention by anchoring technical skills to an engaging story."
  },
  {
    id: 4,
    title: "Bully Prevention Program",
    description: "A high-impact anti-bullying compliance module that uses advanced Storyline animations and graphic novel-style scenarios to turn complex behavioral policies into clear, actionable practice.",
    image: "assets/bully-preview.mp4",
    videoSrc: "assets/bully-preview.mp4",
    link: "#",
    previewUrl: "https://ronflakes.github.io/courses/au%20bullying%20demo%20-%20Storyline%20output/story.html",
    isPreview: true,
    details: "Workplace bullying is often subtle and nuanced, making it difficult to teach through standard text-based compliance slides. The goal was to create a \"safe space\" simulation where internal employees could identify and address toxic behaviors. We needed to move beyond the definition of bullying and show what it actually looks like in real life. I wanted to leverage visual storytelling to evoke empathy, ensuring the content wasn't just \"read and click,\" but \"watch, feel, and decide.\n\nThe scenario-based approach proved to be a game-changer for internal compliance. By utilizing advanced Storyline animations, I created a \"motion comic\" aesthetic that kept users visually engaged, contrasting sharply with traditional corporate training.\n\nUnder the hood, I employed advanced variable manipulation to execute complex scenarios with bold choices forcing users to navigate the moral gray areas of workplace interaction rather than just picking obvious answers. This technical depth allowed the course to track behavioral patterns and provide tailored feedback. As a result, employees reported a significantly deeper understanding of the topic, successfully transforming a mandatory requirement into a meaningful, visually immersive learning experience."
  },
  {
    id: 5,
    title: "The Compliance Detective",
    description: "A gamified investigation into workplace harassment, blending an immersive art gallery narrative with a 'novice-to-expert' progression system to turn sensitive topics into solvable cases.",
    image: "assets/eeo preview.mp4",
    videoSrc: "assets/eeo preview.mp4",
    link: "#",
    isPreview: true,
    details: "Topics like sexual harassment are traditionally heavy, uncomfortable, and difficult to teach without putting learners on the defensive. The challenge was to strike a delicate balance: making the content \"light\" enough to be approachable, yet serious enough to drive behavioral change. I needed to create a safe learning environment where employees could explore these sensitive issues objectively, rather than feeling lectured or accused.\n\nTo achieve this, I split the experience into two creative phases. First, I utilized Aurecon's branded illustrations to create an \"Opening Gallery\" scene. By presenting each case as a painting in an art exhibit, I used cartoonish yet effective visuals to soften the immediate impact of the topic while clearly displaying the offenses.\n\nFor the second phase, I gamified the application by casting the learner as a Detective. Instead of just answering quizzes, users \"solved cases\" based on the gallery exhibits, analyzing scenarios to decide the correct course of action in tight situations. I implemented a Ranked Progression System where learners leveled up from \"Novice\" to \"Expert\" as they solved more cases. This \"playful yet serious\" approach significantly increased engagement, transforming a dreaded compliance topic into a motivating challenge of investigative skill."
  },
  {
    id: 6,
    title: "Modern Style Approach",
    description: "A hip, fresh, and visually dynamic product training that reimagines the eLearning experience as a high-end, interactive lifestyle magazine.",
    image: "assets/vz preview.mp4",
    videoSrc: "assets/vz preview.mp4",
    link: "#",
    previewUrl: "https://ronflakes.github.io/samples/connected_demo/story.html",
    isPreview: true,
    details: "For this project, the goal was to mirror the energy of the brand itself: hip, fresh, and undeniably modern. We needed to move away from text-heavy technical specs and create an upbeat, colorful experience that reflects the excitement of Verizon's latest products and offers. The challenge was to reduce cognitive load by minimizing text and maximizing visual storytelling making the module feel less like a standard \"course\" and more like browsing a premium tech catalog.\n\nI treated this module like an interactive digital magazine, prioritizing high-quality graphics over bullet points to make the whole experience feel lightweight and visually attractive. Instead of static transitions, I implemented subtle animations and fluid motion effects that add a dynamic polish to every slide turn. This design strategy allowed the bright and beautiful products to take center stage, visually demonstrating how the offers complement the devices. The result is a stunning, \"magazine-style\" learning experience that keeps users engaged through visual delight and seamless fluidity rather than heavy reading."
  },
  {
    id: 7,
    title: "Simplification through Motion",
    description: "Transforming dense technical safety protocols into an accessible, animated learning experience leveraging Vyond and dynamic motion graphics.",
    image: "assets/safe-preview.mp4",
    videoSrc: "assets/safe-preview.mp4",
    link: "#",
    isPreview: true,
    details: "Safe Design is a highly technical topic that revolves around critical safety engineering, often resulting in dense, text-heavy training materials that are difficult to digest. The challenge was to take this serious subject matter and make it \"easy on the eyes\" without diluting the importance of the content. My goal was to break down complex technical concepts into accessible visuals, injecting a sense of lightheartedness to keep the learning experience approachable while respecting the seriousness of safety standards.\n\nTo counter the heavy cognitive load, I opted for a motion-first approach. I utilized Vyond to create animated scenarios that \"show\" rather than \"tell,\" allowing learners to visualize safety hazards and solutions in a relatable context.\n\nI purposefully moved away from static slides, using moving graphics and animations in every section to maintain high energy and dynamic fluidity. By ensuring there was movement on screen, I kept the visual pacing active, which prevented the content from feeling stale. This strategy effectively simplified the technical data, keeping learner retention high by turning a dry engineering topic into an engaging, visual narrative."
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
