import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { TbDownload } from "react-icons/tb";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [captchaAnswer, setCaptchaAnswer] = React.useState('');
  const [captchaQuestion, setCaptchaQuestion] = React.useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaError, setCaptchaError] = React.useState(false);
  const [copyNotice, setCopyNotice] = React.useState('');

  React.useEffect(() => {
    // Generate random math question
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({ num1, num2, answer: num1 + num2 });
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('ronflakes@gmail.com');
    setCopyNotice('📧 Email copied to clipboard!');
    setTimeout(() => setCopyNotice(''), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verify human checker
    if (parseInt(captchaAnswer) !== captchaQuestion.answer) {
      setCaptchaError(true);
      setTimeout(() => setCaptchaError(false), 3000);
      return;
    }

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      website: e.target[2].value,
      message: e.target[3].value,
    };

    // Track form attempt
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'contact_attempt', {
        event_category: 'Contact',
        event_label: 'Contact Form Mailto',
      });
    }

    // Try mailto first
    const mailtoLink = `mailto:ronflakes@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=Hi Ron,%0D%0A%0D%0A${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0AWebsite: ${encodeURIComponent(formData.website)}`;
    
    // Try to open mailto
    const mailtoWindow = window.open(mailtoLink, '_self');
    
    // If mailto doesn't work (no email client), show copy option
    setTimeout(() => {
      copyEmailToClipboard();
      setCopyNotice('📧 No email client detected. Email copied! Please send to: ronflakes@gmail.com');
    }, 500);

    // Reset form
    e.target.reset();
    setCaptchaAnswer('');
    // Generate new question
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({ num1, num2, answer: num1 + num2 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%]'
        >
          {/* 👇 2. DITO NATIN INILAGAY YUNG onSubmit */}
          <form onSubmit={handleSubmit} className='w-full space-y-3 lg:space-y-5'>
            <input className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="text" placeholder='Your name' required />
            <input className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="email" placeholder='Email' required />
            <input className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="text" placeholder='Your website (If exists)' />
            <textarea className='resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A]  rounded text-sm w-full' placeholder='How can I help?*' required></textarea>
            
            {/* Human Verification */}
            <div className='space-y-2'>
              <label className='text-sm font-medium text-gray-700 flex items-center gap-2'>
                🤖 Verify you're human: What is {captchaQuestion.num1} + {captchaQuestion.num2}?
              </label>
              <input 
                className={`border-2 px-5 py-3 rounded placeholder:text-[#71717A] text-sm w-full ${captchaError ? 'border-red-500 bg-red-50' : 'border-black'}`}
                type="number" 
                placeholder='Your answer' 
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                required 
              />
              {captchaError && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='text-red-600 text-sm'
                >
                  ❌ Incorrect answer. Please try again.
                </motion.p>
              )}
              {copyNotice && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='text-green-600 text-sm font-medium'
                >
                  {copyNotice}
                </motion.p>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                type='submit'
                className='bg-black justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium'
              >
                Get In Touch
              </motion.button>

              <motion.a
                href="Ron Taruc CV 2025.pdf"
                target="_blank"
                download
                whileHover={{ scale: 1.05 }}
                className='bg-white border-2 border-black justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-black px-3 py-2 rounded flex items-center gap-x-3 font-medium'
                onClick={() => {
                  if (typeof window.gtag !== 'undefined') {
                    window.gtag('event', 'resume_download', {
                      event_category: 'Downloads',
                      event_label: 'Resume from Contact'
                    });
                  }
                }}
              >
                <TbDownload size={18} /> Resume
              </motion.a>
            </motion.div>
          </form>
        </motion.div>

            <motion.div
              className='flex items-center gap-x-2 lg:gap-x-5 mt-4'
            >
              {/* 1. GMAIL */}
              <motion.button
                onClick={copyEmailToClipboard}
                type="button"
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
                title="Copy email to clipboard"
              >
                <BiLogoGmail className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.button>              {/* 2. LINKEDIN */}
              <motion.a
                href="https://www.linkedin.com/in/rontaruc/"
                target="_blank"
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <IoLogoLinkedin className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>

              {/* 3. GITHUB */}
              <motion.a
                href="https://github.com/ronflakes"
                target="_blank"
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <BsGithub className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>work</span> on</h2>
            <h2>Something awesome</h2>
          </div>

          <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="mailto:ronflakes@gmail.com"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-1'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              ronflakes@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="tel:+639989723746"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]'>
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              +63 998 972 3746
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}