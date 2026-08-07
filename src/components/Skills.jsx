import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase,FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill,RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";

export default function Skills() {
  const iconStyle = { width: '100%', height: 'auto', maxWidth: '60px' };
  const outlineOnHoverStyle = {
    ...iconStyle,
    filter: 'drop-shadow(0.75px 0 0 #fff) drop-shadow(-0.75px 0 0 #fff) drop-shadow(0 0.75px 0 #fff) drop-shadow(0 -0.75px 0 #fff)',
  };
  const whiteBoxedIcon = (src, alt) => (
    <div className="bg-white rounded-md p-2 w-full h-full flex items-center justify-center">
      <img src={src} alt={alt} style={iconStyle} />
    </div>
  );

  const [skills] = useState([
    // Core Instructional Design authoring tools — lead with the industry standard
    { id: 1, name: "Articulate 360", icon: <img src="skills/art.jpg" alt="Articulate" style={iconStyle} /> },
    { id: 2, name: "Captivate", icon: <img src="skills/captivate.png" alt="Captivate" style={iconStyle} /> },
    // Enterprise LMS / HRIS platform experience — shows admin-level, enterprise-scale credibility
    { id: 3, name: "Docebo", icon: whiteBoxedIcon("skills/docebo.svg", "Docebo") },
    { id: 4, name: "UKG", icon: <img src="skills/ukg.svg" alt="UKG" style={iconStyle} /> },
    { id: 5, name: "Workday", icon: <img src="skills/workday.png" alt="Workday" style={iconStyle} /> },
    // Generative AI workflow — the differentiator for a modern ID
    { id: 6, name: "Claude", icon: <img src="skills/claude.svg" alt="Claude" style={iconStyle} /> },
    { id: 7, name: "ChatGPT", icon: <img src="skills/chatgpt.svg" alt="ChatGPT" style={iconStyle} /> },
    { id: 8, name: "Google Gemini", icon: <img src="skills/gemini.webp" alt="Gemini" style={iconStyle} /> },
    { id: 9, name: "ComfyUI", icon: <img src="skills/comfy.webp" alt="ComfyUI" style={iconStyle} /> },
    { id: 10, name: "Synthesia", icon: <img src="skills/synthesia.png" alt="Synthesia" style={iconStyle} /> },
    { id: 11, name: "HeyGen", icon: whiteBoxedIcon("skills/heygen.svg", "HeyGen") },
    { id: 12, name: "Eleven Labs", icon: <img src="skills/eleven1.png" alt="Eleven Labs" style={iconStyle} /> },
    // Video & multimedia production — the craft skillset behind the AI Twin/eLearning work
    { id: 13, name: "Premiere Pro", icon: <img src="skills/pr.png" alt="Premiere Pro" style={iconStyle} /> },
    { id: 14, name: "Camtasia", icon: <img src="skills/camtasia.webp" alt="Camtasia" style={iconStyle} /> },
    { id: 15, name: "Vyond", icon: <img src="skills/vyond.png" alt="Vyond" style={iconStyle} /> },
    { id: 16, name: "Vegas Pro", icon: <img src="skills/vegas.png" alt="Vegas Pro" style={iconStyle} /> },
    { id: 17, name: "CapCut", icon: <img src="skills/capcut.svg" alt="CapCut" style={iconStyle} /> },
    { id: 18, name: "Pictory", icon: <img src="skills/pictory.png" alt="Pictory" style={iconStyle} /> },
    { id: 19, name: "360 Studio", icon: <img src="skills/360.png" alt="Insta 360 Studio" style={iconStyle} /> },
    // Design tools
    { id: 20, name: "Photoshop", icon: <img src="skills/ps.png" alt="Photoshop" style={iconStyle} /> },
    { id: 21, name: "Canva", icon: <img src="skills/canva.svg" alt="Canva" style={iconStyle} /> },
    // Web & productivity
    { id: 22, name: "WordPress", icon: <img src="skills/wp.png" alt="WordPress" style={iconStyle} /> },
    { id: 23, name: "Squarespace", icon: <img src="skills/ss.webp" alt="Squarespace" style={outlineOnHoverStyle} /> },
    { id: 24, name: "Office 365", icon: <img src="skills/ofc.svg" alt="Office 365" style={iconStyle} /> },
    { id: 25, name: "OBS Studio", icon: <img src="skills/obs.png" alt="OBS Studio" style={outlineOnHoverStyle} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Verizon",
      role: "Sr Instructional Design Manager",
      period: "Jul 2024 - Dec 2025",
      description:
        (
  <ul className="list-disc ml-5 space-y-2 text-left text-sm lg:text-base">
    <li>
      Designed and developed high-impact, gamified learning solutions using Articulate Storyline 360 (utilizing custom JavaScript & xAPI) and Rise 360, translating complex technical concepts into engaging simulations.
    </li>
    <li>
      Led the end-to-end training lifecycle using ADDIE and SAM models from conducting needs analysis with SMEs to creating detailed SOPs, Facilitator Guides, and Job Aids.
    </li>
    <li>
      Managed stakeholder relationships and learning strategies, while overseeing LMS administration and ensuring all content met universal accessibility and inclusivity standards.
    </li>
  </ul>
),
      logo: "assets/v.jpg",
    },
    {
      id: 2,
      company: "Aurecon Australasia Pty Ltd",
      role: "Digital Technologist",
      period: "Feb 2018 - Jun 2024",
      description:
        (
  <ul className="list-disc ml-5 space-y-2 text-left text-sm lg:text-base">
    <li>
      Delivered tailored eLearning and multimedia solutions for a global workforce, effectively managing remote collaboration with stakeholders across Australia and Asia.
    </li>
    <li>
      Acted as the primary technical lead for content creation, utilizing Articulate 360, Adobe Creative Cloud, and video production tools to build high-performing training modules.
    </li>
    <li>
      Established strong partnerships with SMEs to translate complex business strategies into interactive digital learning experiences.
    </li>
  </ul>
),
      logo: "assets/aurecon.webp",
    },
        {
      id: 3,
      company: "ServiceSource",
      role: "Instructional Designer",
      period: "Aug 2016 - Jan 2018",
      description:
        (
  <ul className="list-disc ml-5 space-y-2 text-left text-sm lg:text-base">
    <li>
      Produced training materials for major tech clients.
    </li>
    <li>
      Developed gamified web-based training templates.
    </li>
    <li>
      Developed high-impact complex product training for specialized service lines.
    </li>
  </ul>
),
      logo: "assets/serv.png",
    },
    {
      id: 4,
      company: "ShareSource",
      role: "Course Developer",
      period: "Nov 2015 - Jun 2016",
      description:
        (
  <ul className="list-disc ml-5 space-y-2 text-left text-sm lg:text-base">
    <li>
      Led micro-teams for eLearning development and conducted QA reviews on storyboards and final builds.
    </li>
     <li>
      Provided multimedia support including video editing and graphic design for course content.
    </li>
     <li>
      Developed interactive tool walkthroughs and simulations.
    </li>
  </ul>
),
      logo: "assets/share.jpg",
    },
    {
      id: 5,
      company: "Boomzap",
      role: "Game Designer",
      period: "Sep 2013 - Nov 2015",
      description:
        (
  <ul className="list-disc ml-5 space-y-2 text-left text-sm lg:text-base">
    <li>
      Demonstrated rapid career progression, evolving from <b>Game Tester</b> to <b>Assistant Designer</b>, and ultimately <b>Head Designer</b>, shaping the narrative and mechanics of successful casual game titles.
    </li>
     <li>
      Designed mechanics and user experience (UX) for PC and mobile games, ensuring seamless player engagement.
    </li>
     <li>
      Spearheaded the technical <b>migration and porting</b> of legacy PC games to mobile platforms (iOS/Android), optimizing UI/UX for touch interfaces and ensuring seamless cross-platform performance.
    </li>
  </ul>
),
      logo: "assets/bz.jpg",
    },
    {
  id: 3, // Siguraduhin na sunod na number ito
  company: "BPO & Media Companies",
  role: "Early Career Roles ",
  period: "Previous Experience", // O kaya ilagay mo taon "20xx - 20xx"
  description: (
    <ul className="list-disc ml-5 space-y-2 text-left text-sm lg:text-base">
      <li>
        Rapid career progression starting from <b>Technical Support</b>, advancing to <b>Quality Assurance (QA)</b>, and transitioning into <b>Corporate Trainer</b> roles.
      </li>
      <li>
        Provided expert support and training for top-tier global brands including <b>World Vision, eBay, Honeywell, Blackboard,</b> and <b>GMA7 Network</b>.
      </li>
      <li>
        Built a strong technical foundation in software troubleshooting (Microsoft Xbox/Cisco) which paved the way for specialized Technical Instructional Design work.
      </li>
    </ul>
  ),
  logo: "assets/favicon.png", // Hanap ka lang ng generic icon o kahit wala na
},
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 text-sm sm:text-base lg:text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-4 sm:gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-2 sm:p-3 h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                {skill.icon}
              </div>
              <p className="text-center text-xs sm:text-sm lg:text-base leading-tight">{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div id="experience" className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
