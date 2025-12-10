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
    details: "It started with a casual wish from a Senior Developer who wondered, \"Wouldn't it be cool if we had a truly gamified experience?\" Challenge accepted. Drawing inspiration from classics like Pokémon and typical RPGs, I set out to build something beyond a simple point-and-click course. The goal was to create a comprehensive, end-to-end \"Game Template\" that other developers could use - a robust framework complete with progression systems, combat, puzzles, and boss battles designed to make the learning process not just bearable, but genuinely rewarding.\n\nTo pull this off, I pushed Articulate Storyline to its absolute limits, utilizing complex variable structures and custom JavaScript to engineer the \"bells and whistles\" of a true RPG. The template features map-based exploration where learners gain both in-game experience (XP) and actual knowledge as they progress.\n\nA key feature I introduced is the \"Knowledge Hub.\" Instead of boring handouts, learners \"loot\" or collect information in the form of in-game Books, which are stored in their personal inventory to be read anytime. This mechanic creates a sense of ownership and accomplishment transforming content consumption into a treasure hunt. This project stands as a proof-of-concept for the community, hoping to spark inspiration in other developers to break the mold and try a completely different, enjoyable approach to eLearning."
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
    details: "The Risk Management team provided high-level video production assets with a vision to teach compliance in a very creative manner. They did an awesome job producing the raw footage, so it was only right that I transformed their work into an engaging and unique presentation. The goal was to move away from static slides and create a \"Choose Your Own Adventure\" experience where learners aren't just watching, they are deciding the outcome in a cinematic environment with multiple endings, both good and bad.\n\nThis project was a true 50/50 split between post-production and instructional design. I utilized my Adobe Premiere Pro skills to fine-tune and color-grade the raw videos, ensuring visual consistency before importing them into the authoring tool. Inside Articulate Storyline 360, I built a sophisticated logic structure to map out the branching narrative, ensuring the video transitions felt seamless despite the complex decision trees running in the background.\n\nThe result is a seamless fusion of multimedia art and instructional technology. The multi-ending format encouraged learners to replay the course voluntarily to see different outcomes, successfully turning a mandatory risk management training into an exciting, replayable interactive film."
  },
  {
    id: 3,
    title: "A Gamified Systems Simulation",
    description: "A high-stakes, heist-themed software simulation where learners act as elite agents mastering complex tool navigation to retrieve a stolen masterpiece.",
    image: "assets/heist-preview.mp4",
    videoSrc: "assets/heist-preview.mp4",
    link: "#",
    previewUrl: "https://360.articulate.com/review/content/b9a784da-bc2e-487b-b8b5-ced28fadeab8/review",
    isPreview: true,
    details: "Software simulations are notoriously dry, repetitive, and often lead to \"click-fatigue.\" The challenge was to take a standard, technical tool training and make it exciting enough to keep learners glued to the screen. I wanted to completely reframe the learning experience by shifting the mindset from \"I need to learn this button\" to \"I need to hack this system to complete the mission.\"\n\nTo achieve this, I wrapped the technical content in a cinematic \"Heist\" narrative inspired by Mission Impossible. Learners assume the role of a secret agent hired to retrieve a stolen painting, where every navigational test serves as a security protocol they must bypass.\n\nTo support the learner without breaking immersion, I designed a \"Jarvis-like\" AI guide character. This character acts as an intelligent companion, providing real-time tutorials and lore, effectively adding flavor to what would otherwise be a boring walkthrough. This approach transformed mundane drills into rewarding challenges providing a tangible sense of accomplishment after every task and significantly boosting long-term retention by anchoring technical skills to an engaging story."
  },
  {
    id: 4,
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
    id: 5,
    title: "The Compliance Detective",
    description: "A gamified investigation into workplace harassment, blending an immersive art gallery narrative with a 'novice-to-expert' progression system to turn sensitive topics into solvable cases.",
    image: "assets/eeo preview.mp4",
    videoSrc: "assets/eeo preview.mp4",
    link: "#",
    previewUrl: "https://ronflakes.github.io/courses/eeo_demo/story.html",
    isPreview: true,
    details: "Topics like sexual harassment are traditionally heavy, uncomfortable, and difficult to teach without putting learners on the defensive. The challenge was to strike a delicate balance: making the content \"light\" enough to be approachable, yet serious enough to drive behavioral change. I needed to create a safe learning environment where employees could explore these sensitive issues objectively, rather than feeling lectured or accused.\n\nTo achieve this, I split the experience into two creative phases. First, I utilized Aurecon's branded illustrations to create an \"Opening Gallery\" scene. By presenting each case as a painting in an art exhibit, I used cartoonish yet effective visuals to soften the immediate impact of the topic while clearly displaying the offenses.\n\nFor the second phase, I gamified the application by casting the learner as a Detective. Instead of just answering quizzes, users \"solved cases\" based on the gallery exhibits, analyzing scenarios to decide the correct course of action in tight situations. I implemented a Ranked Progression System where learners leveled up from \"Novice\" to \"Expert\" as they solved more cases. This \"playful yet serious\" approach significantly increased engagement, transforming a dreaded compliance topic into a motivating challenge of investigative skill."
  },
  {
    id: 6,
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
    id: 7,
    title: "Simplification through Motion",
    description: "Transforming dense technical safety protocols into an accessible, animated learning experience leveraging Vyond and dynamic motion graphics.",
    image: "assets/safe-preview.mp4",
    videoSrc: "assets/safe-preview.mp4",
    link: "#",
    previewUrl: "https://ronflakes.github.io/courses/safe_design_demo/story.html",
    isPreview: true,
    details: "Safe Design is a highly technical topic that revolves around critical safety engineering, often resulting in dense, text-heavy training materials that are difficult to digest. The challenge was to take this serious subject matter and make it \"easy on the eyes\" without diluting the importance of the content. My goal was to break down complex technical concepts into accessible visuals, injecting a sense of lightheartedness to keep the learning experience approachable while respecting the seriousness of safety standards.\n\nTo counter the heavy cognitive load, I opted for a motion-first approach. I utilized Vyond to create animated scenarios that \"show\" rather than \"tell,\" allowing learners to visualize safety hazards and solutions in a relatable context.\n\nI purposefully moved away from static slides, using moving graphics and animations in every section to maintain high energy and dynamic fluidity. By ensuring there was movement on screen, I kept the visual pacing active, which prevented the content from feeling stale. This strategy effectively simplified the technical data, keeping learner retention high by turning a dry engineering topic into an engaging, visual narrative."
  },
  {
    id: 8,
    title: "Stack of Cards",
    description: "A gamified Business Acumen module that uses a card game analogy and advanced Storyline logic to visualize organizational hierarchy and influence.",
    image: "assets/acumen preview.mp4",
    videoSrc: "assets/acumen preview.mp4",
    link: "#",
    previewUrl: "https://ronflakes.github.io/courses/ss%20acumen%20demo%20-%20Storyline%20output/index.html",
    isPreview: true,
    details: "Business Acumen can often feel abstract and dry, especially when discussing corporate structures and scopes of influence. The challenge was to turn this conceptual topic into something tangible and memorable. I wanted to move away from standard organizational charts and create a fun, visual metaphor that learners could instantly understand. My goal was to create a project with a variety of activities to break the monotony and promote high retention.\n\nI pushed Articulate Storyline 360 well beyond its default usage, relying heavily on advanced variable utilization to drive the experience. The centerpiece of the module uses a standard Deck of Cards to demonstrate corporate hierarchy by animating multiple card objects via complex variable sets to represent different levels of influence. I even added a personal touch by using my teammates' names for the characters, making the development process fun and the content relatable.\n\nOn the technical side, I engineered a unique \"Ordered Stack\" Drag-and-Drop activity. Unlike standard interactions, this required custom logic to ensure the task would only complete if the learner stacked the options in the exact right order. This blend of creative visual metaphors and strict logic checks resulted in a playful yet rigorously educational experience."
  },
  {
    id: 9,
    title: "Gamified Survival",
    description: "A playful, highly interactive module featuring zombie shootouts and island rescue missions to teach business solutions using advanced Storyline mechanics.",
    image: "assets/evolve preview.mp4",
    videoSrc: "assets/evolve preview.mp4",
    link: "#",
    previewUrl: "https://ronflakes.github.io/courses/ss%20evolve%20demo%20-%20Storyline%20output/index.html",
    isPreview: true,
    details: "This project was designed to be a playground for creativity to prove that serious business concepts can be taught through imaginative scenarios. I wanted to break the mold of traditional corporate training and showcase the extreme versatility of Storyline 360. The goal was to create a course that felt less like a lesson and more like a series of exciting mini games, making the learning process fun, fresh, and memorable.\n\nI utilized complex object-to-object interactions and strategic hotspot utilization to build a fully gamified experience. For the opening activity, I placed learners in a vibrant island setting where they had to \"save\" partners drowning in business problems by dragging the correct lifesavers to them. Later, I introduced a target shooting segment where learners aim at zombies representing incorrect practices to reveal the right answers. These imaginative touches kept the energy high and ensured learners stayed engaged while effectively mastering the core material."
  },
  {
    id: 10,
    title: "The 360 Bridge Challenge",
    description: "A showcase of creative engineering that pushed early Storyline 360 limits to create 360-degree object viewers and 2D platformer-style escape games.",
    image: "assets/explore preview.mp4",
    videoSrc: "assets/explore preview.mp4",
    link: "#",
    previewUrl: "https://ronflakes.github.io/courses/ss%20explore%20demo%20-%20Storyline%20output/index.html",
    isPreview: true,
    details: "This project serves as a testament to creative problem solving. Even back when authoring tools had significantly fewer features, I refused to settle for static slides. The challenge was to create high-level interactivity and engagement without the convenience of modern plugins or built-in 3D support. I wanted to prove that with the right logic and asset management, we could build immersive experiences like virtual product inspections and escape room scenarios using only the core functions available at the time.\n\nI engineered a manual 360-degree product viewer by meticulously capturing an object from every angle and binding the image sequence to a slider interaction. This allowed learners to rotate and inspect the item in real time, simulating a 3D environment.\n\nFor the assessment portion, I gamified the experience by designing a \"Bridge Builder\" segment. Presented as a 2D side-scrolling game, learners needed to select the correct sequence of words to construct a virtual bridge and cross a platform to the next level. This escape room mechanic turned simple multiple choice questions into a high-stakes puzzle, proving that engaging gamification is about creativity rather than just software capabilities."
  },
  {
    id: 11,
    title: "The Service Source Template",
    description: "The Operations Hub. A visually cohesive, brand-centric onboarding module featuring a gamified 'Central Hub' navigation system that guides learners through a locked progression path.",
    image: "assets/ss preview.mp4",
    videoSrc: "assets/ss preview.mp4",
    link: "#",
    previewUrl: "https://ronflakes.github.io/courses/ss%20demo/index.html",
    isPreview: true,
    details: "Corporate onboarding, specifically for complex operations and sales processes, can easily become overwhelming for new hires. The goal for this ServiceSource project was to organize dense information (ranging from Client Challenges to Sales Process Fundamentals) into a digestible, structured experience. I needed to create a template that strictly adhered to the corporate branding while transforming a linear presentation into an interactive journey that learners could explore at a controlled pace.\n\nI developed a \"Central Hub\" navigation system  using Articulate Storyline 360. This acted as the learner's home base, utilizing variables to create a locked progression mechanic. Topics such as \"Company Assets\" must be completed to unlock subsequent sections like \"Sales Process Fundamentals\", ensuring that learners build foundational knowledge before moving forward.\n\nVisually, I brought the static brand assets to life by animating lines to serve as dynamic visual boundaries on the slides, adding fluidity to the transitions. I incorporated various interactive elements, such as drag-and-drop activities for sequencing sales processes and click-to-reveal interactions for KPIs. The experience culminates in a final assessment that only unlocks once all topics are mastered, ensuring comprehensive understanding before course completion."
  },
  {
    id: 12,
    title: "AI-Enhanced Safety Module",
    description: "A next-gen emergency preparedness module where Articulate Storyline 360 serves as the central engine to weave Generative AI assets and high-end multimedia into visceral, high-stakes crisis simulations.",
    image: "assets/safety preview.mp4",
    videoSrc: "assets/safety preview.mp4",
    link: "#",
    previewUrl: "https://ronflakes.github.io/samples/safety%20demo/story.html",
    isPreview: true,
    details: "Articulate Storyline 360 served as the master canvas that brought this vision to life. I engineered a sophisticated workflow that integrated cutting-edge assets into a seamless interactive experience.\n\nI utilized Gemini for scenario scripting and open-source generative tools like Flux via ComfyUI to create hyper-realistic imagery for scenarios impossible to shoot manually. I then polished these visuals using Adobe Photoshop and Canva, edited cinematic sequences in Premiere Pro, and engineered immersive soundscapes with Audacity.\n\nStoryline 360 was the tool that put all of these together. I built complex gamified logic within the tool, such as the \"Bomb Threat Response Challenge\" where correct answers visually slowed down a burning fuse , and fire scenarios where user choices determined if the flames intensified or were extinguished. This fusion of AI generation and Storyline's robust interactivity proved that safety training can be both technologically advanced and deeply impactful."
  },
  {
    id: 13,
    title: "The McAfee Template",
    description: "A slick, brand-compliant master template designed in Articulate Storyline 360, which served as the standard UI for the entire organization's training modules.",
    image: "assets/mcafee preview.mp4",
    videoSrc: "assets/mcafee preview.mp4",
    link: "#",
    previewUrl: "https://ronflakes.github.io/samples/McAfee%20template%20demo/story.html",
    isPreview: true,
    details: "Consistency is key in corporate training. For McAfee's \"Global Learning\" initiative, the team needed a standardized look and feel that was unmistakably McAfee - clean, red-and-white branding, and professional. The challenge was to build a robust template that was not only visually \"slick\" but also flexible enough to handle various types of content, from video slides to complex knowledge checks, without breaking the design integrity.\n\nI carefully crafted a master template in Articulate Storyline 360 that fully embodied the McAfee brand identity, featuring a modern, flat UI with sharp red accents and the iconic shield integrated subtly into layouts. To ensure a seamless user experience, I engineered reusable slide layouts for every possible need, including custom interactive menus with hover and visited states for tracking progress, and dedicated video slides with branded player controls. I also built a robust assessment engine with a variety of pre-built question types such as Multiple Choice, Multiple Response, Drag-and-Drop, and Fill-in-the-Blank all styled to look like a native app rather than a default Storyline quiz. This template became the foundational asset for the team, ensuring that every module produced was visually consistent and brand-compliant, significantly speeding up the development time for future projects."
  },
  {
    id: 14,
    title: "Netflix Inspired",
    description: "A sleek, cinema-quality course template that reimagines the Learning Management System as a Netflix-style content hub, featuring dynamic catalogue browsing and high-fidelity media.",
    image: "assets/netflix preview.mp4",
    videoSrc: "assets/netflix preview.mp4",
    link: "#",
    previewUrl: "https://ronflakes.github.io/samples/netflix%20style%20demo/story.html",
    isPreview: true,
    details: "The client had a specific vision: she wanted her courses to break away from the rigid, linear feel of traditional eLearning. Her goal was to create an environment that felt familiar, modern, and engaging - specifically requesting the look and feel of Netflix. The challenge was to replicate the intuitive experience of browsing through movie catalogues and TV series within the constraints of an authoring tool, transforming the selection process from a simple list into an immersive visual journey.\n\nTo execute this, I pushed Articulate Storyline 360 to its limits to replicate the complex UI of a streaming platform. I engineered a custom course selection menu that mimics a media catalogue, allowing users to browse through modules visually rather than clicking through text links. This required intricate state logic and variable management to ensure the \"browsing\" experience felt fluid and responsive.\n\nI supported this advanced interface with high-end asset production. I used Adobe Photoshop to design movie-poster-style thumbnails for each module and Adobe Premiere Pro to edit stock footage from the content library, turning them into cinematic \"trailers\" and previews. The client was thrilled with the result, as the template successfully transformed their training content into a \"binge-worthy\" experience that looked slick, clean, and unmistakably premium."
  },
  {
    id: 15,
    title: "The Career Compass",
    description: "A logic-driven personality assessment engine featuring AI-generated visuals and a complex variable scoring system to determine unique learner archetypes.",
    image: "assets/misc preview.mp4",
    videoSrc: "assets/misc preview.mp4",
    link: "#",
    previewUrl: "https://ronflakes.github.io/courses/adventurer_demo/story.html",
    isPreview: true,
    details: "Standard career assessments are often dry, form-based surveys that feel like administrative tasks. For the \"Journey Forward\" initiative, the goal was to transform self-reflection into an engaging expedition. We needed a tool that didn't just ask questions but immersed the user in an adventure narrative using metaphors like \"Unmapped Forks\" and \"Ancient Maps\" to uncover their professional working style. The challenge was to build a system that felt personalized, not generic.\n\nI engineered a custom scoring algorithm within Articulate Storyline 360 using advanced number variables. Unlike simple linear courses, this project tracks every choice the user makes, assigning points to specific hidden categories. At the end of the assessment, the logic calculates the totals to reveal one of 5 distinct Career Personas (e.g., \"The Curious Cartographer\"), ensuring the result feels tailored to the user's specific decisions.\n\nVisually, I elevated the experience by integrating Generative AI. I created custom, explorer-themed imagery for the hover states and selection effects, giving the interface a polished, high-end game feel. This combination of complex backend logic and modern AI aesthetics resulted in a highly engaging tool that encourages users to discover their strengths in a fun, non-intrusive way."
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
