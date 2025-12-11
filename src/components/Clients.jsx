import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  {
    name: "Verizon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Verizon_2015_logo_-vector.svg/2560px-Verizon_2015_logo_-vector.svg.png"
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
  },
  {
    name: "McAfee",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/McAfee_logo.svg/2560px-McAfee_logo.svg.png"
  },
  {
    name: "Avaya",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Avaya_Logo.svg/2560px-Avaya_Logo.svg.png"
  },
  {
    name: "ServiceSource",
    logo: "https://www.servicesource.com/wp-content/uploads/2021/05/SS_Logo_Horiz_RGB.png"
  },
  {
    name: "Aurecon",
    logo: "https://www.aurecongroup.com/-/media/images/aurecon/logos/aurecon-logo-colour.png"
  }
];

export default function Clients() {
  return (
    <div id="experience" className="bg-white px-5 lg:px-28 py-12 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-2xl lg:text-4xl text-black mb-3">
          Trusted by <span className="font-extrabold">Industry Leaders</span>
        </h2>
        <p className="text-[#71717A] text-sm lg:text-base mb-10 lg:mb-16">
          Proud to have collaborated with world-class organizations
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 lg:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
