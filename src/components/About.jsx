import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img 
  className="w-1/3 mx-auto" 
  src="/assets/about.png" 
  alt="About Me Illustration" 
/>
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm a Senior Instructional Designer and self-confessed tech geek with over 15 years of experience turning boring manuals into interactive experiences. I specialize in breaking the limits of standard tools using gamification to supercharge Articulate Storyline 360 and integrating cutting-edge Generative AI workflows (ComfyUI, Gemini, ElevenLabs) to engineer solutions that are as smart as they are visually stunning.
        </p>
        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Think of me as a "Full Stack" creator for learning. I handle everything from the technical side of LMS administration (SCORM/xAPI/Workday) to the creative heavy lifting of video production using Adobe Premiere, Camtasia, and Vyond. I blend proven methodologies like ADDIE and SAM with a gamer’s mindset applying robust gamification mechanics to ensure that learners don't just complete a course, but actually enjoy the experience. 
        </p>

      </motion.div>
    </div>
  );
}
