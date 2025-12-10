import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Learning Manager",
    company: "Microsoft",
    quote: "Ron's ability to transform complex technical content into engaging learning experiences is unmatched. His work on our gamified training modules increased completion rates by 85%.",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=4F46E5&color=fff&size=128"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "VP of Training",
    company: "Verizon",
    quote: "Working with Ron was a game-changer. His modern, magazine-style approach to product training made our content feel fresh and exciting. The team loved it!",
    avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=7C3AED&color=fff&size=128"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "L&D Director",
    company: "McAfee",
    quote: "Ron's technical expertise and creative vision helped us establish a cohesive brand template that became the standard across our entire organization. Highly recommend!",
    avatar: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=EC4899&color=fff&size=128"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white px-5 lg:px-28 py-12 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 lg:mb-16"
      >
        <h2 className="text-2xl lg:text-4xl text-black">
          What <span className="font-extrabold">Clients Say</span>
        </h2>
        <p className="text-[#71717A] text-sm lg:text-base mt-3">
          Trusted by industry leaders worldwide
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="bg-gray-50 rounded-2xl p-6 lg:p-8 relative border border-gray-200 hover:border-black transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <FaQuoteLeft className="text-3xl text-gray-300 mb-4" />
            
            <p className="text-gray-700 text-sm lg:text-base mb-6 leading-relaxed">
              "{testimonial.quote}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-bold text-black text-sm lg:text-base">
                  {testimonial.name}
                </h4>
                <p className="text-xs lg:text-sm text-gray-600">
                  {testimonial.role}
                </p>
                <p className="text-xs text-gray-500">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
