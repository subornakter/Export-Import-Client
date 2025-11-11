import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: "40+",
    label: "Years Of Experience",
    icon: "https://i.ibb.co.com/cck2rsZL/incentive-1999115.png",
  },
  {
    number: "850+",
    label: "Consignment Done",
    icon: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
  },
  {
    number: "1200+",
    label: "Happy Buyers",
    icon: "https://i.ibb.co.com/J1hb4m8/e29.png",
  },
];

const ExtraSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/Z6VTvr9T/e27.webp')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/70 to-yellow-400/60 backdrop-blur-lg text-white py-10 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-16 h-16 object-contain drop-shadow-lg"
                />
              </div>
              <h2 className="text-5xl font-bold mb-3">{item.number}</h2>
              <p className="text-lg font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;

