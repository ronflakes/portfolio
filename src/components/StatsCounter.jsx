import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            setCount(Math.floor(progress * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

export default function StatsCounter() {
  return (
    <div className="bg-black px-5 lg:px-28 py-12 lg:py-16">
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Years of Experience */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl lg:text-6xl font-extrabold text-white mb-2">
            <Counter end={15} suffix="+" />
          </div>
          <p className="text-sm lg:text-base text-[#71717A] uppercase tracking-wide">Years Experience</p>
        </motion.div>

        {/* Projects Completed */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl lg:text-6xl font-extrabold text-white mb-2">
            <Counter end={100} suffix="+" />
          </div>
          <p className="text-sm lg:text-base text-[#71717A] uppercase tracking-wide">Projects Completed</p>
        </motion.div>

        {/* Companies */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl lg:text-6xl font-extrabold text-white mb-2">
            <Counter end={16} suffix="+" />
          </div>
          <p className="text-sm lg:text-base text-[#71717A] uppercase tracking-wide">Companies</p>
        </motion.div>

        {/* Client Satisfaction */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl lg:text-6xl font-extrabold text-white mb-2">
            <Counter end={100} suffix="%" />
          </div>
          <p className="text-sm lg:text-base text-[#71717A] uppercase tracking-wide">Client Satisfaction</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
