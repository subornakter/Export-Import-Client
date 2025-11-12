import React from "react";
import { Link } from "react-router";
const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0077B6] via-[#0096C7] to-[#CAF0F8] text-white py-20 px-6 md:pl-20  flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Left Content */}
      <div className="relative z-10 text-center md:text-left max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-400">Alpha Global Trade</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Your trusted partner in global export and import services — connecting
          quality products with worldwide markets efficiently and reliably.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Link to='/allProducts'>  <button className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold px-6 py-3 rounded-2xl shadow-md transition-all duration-300">
            Explore Products
          </button></Link>
          <Link to='/myImports'><button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-2xl font-semibold transition-all duration-300">
            My Imports
          </button></Link>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative z-10 mt-10 md:mt-0">
        <img
          src="https://i.ibb.co.com/xKSHbQ7w/19962385-6206719-2.png" 
          alt="Export Import Trade"
          className="w-full md:w-[500px] h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;

