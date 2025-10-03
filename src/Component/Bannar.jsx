import { motion } from "motion/react"
import React from 'react';

import bannarImage1 from '../assets/Bannar/bannat-image1.jpg';

import bannarImage2 from '../assets/Bannar/bannat-image2.jpg';

const Bannar = () => {
    return (
        <div>
            <div className="hero bg-base-100 min-h-screen">
  <div className="hero-content flex flex-col lg:flex-row-reverse justify-around gap-20">
    
<div className="flex-1">
        <motion.img
        src={bannarImage1}
        alt="Image 1"
        
        animate={{ y: [100, 150, 100] , opacity:2  }}
        transition={{ duration: 5, repeat:Infinity}}
        className=" max-w-sm shadow-2xl rounded-t-[40px] rounded-br-[40px] border-blue-500 border-s-8 border-b-8 "
      />

      {/* Image 2 */}
 <motion.img
        src={bannarImage2}
        alt="Image 1"
        
        animate={{ x: [100, 170, 100] , opacity:2  }}
        transition={{ duration: 10, delay:5, repeat:Infinity}}
        className=" max-w-sm shadow-2xl rounded-t-[40px] rounded-br-[40px] border-blue-500 border-s-8 border-b-8 "
      />
</div>


    <div>



       <h1 
      
       className="text-5xl font-bold">The Easiest Way 
           </h1>
        
        <motion.h1 
       initial={{ scale: 0 }} animate={{ scale: 1 ,
        transition: { duration: 2 }
        }}
          

       className="text-5xl font-bold text-blue-700">
       to Get Your New Job</motion.h1>

      <p className="py-6">
       Each month, more than 3 million job seekers turn to <br />
website in their search for work, making over 140,000 <br />
applications every single day
      </p>
      <button className="btn px-8 py-3 font-semibold rounded-md  bg-blue-600 hover:bg-blue-500  text-gray-50">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Bannar;
