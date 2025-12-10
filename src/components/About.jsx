import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { name: "Aurecon", logo: "assets/aurecon.webp" },
  { name: "Avaya", logo: "assets/avaya.png" },
  { name: "Blackboard", logo: "assets/Blackboard_Inc._logo.png" },
  { name: "Boomzap", logo: "assets/Boomzap_Entertainment_Logo.jpg" },
  { name: "Cisco", logo: "assets/cisco logo.png" },
  { name: "Dell", logo: "https://cdn.worldvectorlogo.com/logos/dell-2.svg" },
  { name: "eBay", logo: "assets/EBay_logo.svg.png" },
  { name: "Electronic Arts", logo: "assets/EA_logo_black.png" },
  { name: "GMA 7", logo: "assets/GMA_Network_Logo_Vector.svg.png" },
  { name: "Ivoclar", logo: "assets/ivoclar logo.jpg" },
  { name: "Kumu", logo: "assets/kumu logo.png" },
  { name: "McAfee", logo: "assets/mcafee-patch-dearbytes-14.png" },
  { name: "Microsoft", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" },
  { name: "Red Hat", logo: "https://cdn.worldvectorlogo.com/logos/red-hat-1.svg" },
  { name: "Verizon", logo: "assets/verizon logo.png" },
  { name: "World Vision", logo: "assets/World_Vision_logo.svg.png" }
];

export default function About() {

  return (
    <div id="about">
      <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row gap-8 lg:gap-12">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
          viewport={{ once: true }}
        >
          <img 
    className="w-1/3 mx-auto" 
    src="assets/about.png" 
    alt="About Me Illustration" 
  />
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex flex-col"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
            About <span className="font-extrabold">Me</span>
          </h2>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
            I'm a Senior Instructional Designer and self-confessed tech geek with over 15 years of experience turning plain manuals into interactive experiences. I specialize in breaking the limits of standard tools using advance techniques to supercharge Articulate Storyline 360 and integrating cutting-edge Generative AI workflows (ComfyUI, Gemini, ElevenLabs) to engineer solutions that are as smart as they are visually stunning.
          </p>
          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
            Think of me as a "Full Stack" creator for learning. I handle everything from the technical side of LMS administration (SCORM/xAPI/Workday) to the creative heavy lifting of video production using Adobe Premiere, Camtasia, and Vyond. I blend proven methodologies like ADDIE and SAM with a gamer's mindset applying robust gamification mechanics to ensure that learners don't just complete a course, but actually enjoy the experience. 
          </p>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5 mb-5 lg:mb-8">
            Here are some of the world-class organizations I had the chance to work with:
          </p>
        </motion.div>
      </div>

      {/* Full width carousel */}
      <motion.div 
        className="mt-8 lg:mt-12 overflow-hidden w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex gap-8 animate-scroll">
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-2 w-28 lg:w-32"
            >
              <div className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 w-full h-20 lg:h-24">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-12 lg:max-h-16 w-auto object-contain"
                />
              </div>
              <p className="text-xs text-center text-gray-700 font-medium">{company.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
