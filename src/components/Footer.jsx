import React from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    img: "https://i.ibb.co.com/4n1dkBSS/e29.webp",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourpage",
    img: "https://i.ibb.co.com/1tTMLYRj/e31.webp",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/yourchannel",
    img: "https://i.ibb.co.com/ynNZRzZP/e28.webp",
  },
  {
    name: "X / Twitter",
    url: "https://x.com/yourprofile",
    img: "https://i.ibb.co.com/cKwzNqVK/e30.webp",
  },
];

const Footer = () => {
  return (
    <footer className=" mt-15 bg-gradient-to-b from-gray-600 via-gray-800 to-gray-900 text-white py-14 relative overflow-hidden">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative  mx-auto px-6 grid md:grid-cols-4 gap-15 z-10">
        {/* Logo & Intro */}
        <div className=" ">
       <div className="flex  items-center">
           <img
            src="https://i.ibb.co.com/RTQjFFbp/e26-removebg-preview.png"
            alt="Import Export Hub Logo"
            className="w-12 h-10 "
          />
          <h2 className="text-[22px] font-bold mb-2">Alpha Global Trade</h2>
       </div>
          <p className="text-gray-200 text-sm md:pl-8  leading-relaxed">
            A modern web platform where users can manage exports, browse global
            products, and import any product into their “My Imports” section
            with one click.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Global Partners</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Export Management</a></li>
            <li><a href="#">Import Tracking</a></li>
            <li><a href="#">Custom Clearance</a></li>
            <li><a href="#">24/7 Assistance</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow hover:shadow-lg transition-all"
              >
                <img
                  src={social.img}
                  alt={social.name}
                  className="w-5 h-5 object-contain"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-300 text-sm relative z-10">
        Copyright © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Import Export Hub</span> |
        All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

