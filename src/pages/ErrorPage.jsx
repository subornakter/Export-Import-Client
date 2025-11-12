import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import errorImg from '../assets/error-404.png'
import { Link } from 'react-router'
import { FaArrowRight } from "react-icons/fa";
const ErrorPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center text-center min-h-[80vh]">
        <title>Error-404</title>
        <img
          src={errorImg}
          alt="404 Error"
          className="w-[300px] mb-6"
        />
        <h1 className="font-bold text-3xl mb-2">Oops, page not found!</h1>
        <p className="text-gray-500 txt-sm">The page you are looking for is not available.</p>
         <Link to='/'><button className='bg-[#1096B5] text-white flex items-center gap-1 rounded-md p-2 font-bold mt-5'>Go Back <FaArrowRight /></button></Link>
      </div>

      <Footer />
    </>
  );
};

export default ErrorPage;