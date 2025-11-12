import React from 'react';
import { PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">    
      <PacmanLoader color="purple" />
   
    </div>
  //       <div className="">
  //     <h1 className=" flex items-center content-center  md:gap-3 gap-2 justify-center text-center text-2xl md:text-5xl h-screen font-bold text-gray-500">
  //  loading...
  //     </h1>
  //   </div>
  );
};

export default Loader;