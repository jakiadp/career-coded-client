import React from 'react';
import CountUp from 'react-countup';

const Counte = () => {
     

    return (
        <section className="border-y  bg-base-100 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">


            {/* 1 */}
                 <div className='flex flex-col items-center space-y-3 border-l-2 border-blue-300 pl-6 bg-base-200 p-15 rounded-2xl hover:shadow-2xl hover:bg-base-300'>

                      

        <div>
            <h1   className=" text-4xl text-black font-bold"><CountUp 
                                                                start={0}
                                                                end={98}
                                                                duration={8}></CountUp>%</h1>
            <p className='text-xl font-semibold text-gray-500'>Active Job Seekers</p>
            <p className="text-xl font-semibold tracking-wider text-gray-400">WORKWISE</p>
        </div>


        </div>
       
       {/* 2 */}
                         <div className='flex flex-col items-center space-y-3 border-l-2 border-blue-300 pl-6 bg-base-200 p-15 rounded-2xl  hover:shadow-2xl hover:bg-base-300'>

                      

        <div>
            <h1   className=" text-4xl text-black font-bold"><CountUp 
                                                                start={100}
                                                                end={200}
                                                                duration={8}></CountUp>K+</h1>
            <p className='text-xl font-semibold text-gray-500'>Activ Jop Portal</p>
            <p className="text-xl font-semibold tracking-wider text-gray-400">CAREERPATH</p>
        </div>


        </div>

       {/* 3 */}
                         <div className='flex flex-col items-center space-y-3 border-l-2 border-blue-300 pl-6 bg-base-200 p-15 rounded-2xl  hover:shadow-2xl hover:bg-base-300'>

                      

        <div>
            <h1   className=" text-4xl text-black font-bold"><CountUp 
                                                                start={900}
                                                                end={1000}
                                                                duration={8}></CountUp>+</h1>
            <p className='text-xl font-semibold text-gray-500'>Abvance Job Seekers</p>
            <p className="text-xl font-semibold tracking-wider text-gray-400">WORKWISE</p>
        </div>


        </div>

       {/* 4 */}
                          <div className='flex flex-col items-center space-y-3 border-l-2 border-blue-300 pl-6 bg-base-200 p-15 rounded-2xl hover:shadow-2xl hover:bg-base-300'>

                      

        <div>
            <h1   className=" text-4xl text-black font-bold"><CountUp 
                                                                start={400}
                                                                end={500}
                                                                duration={8}></CountUp>M</h1>
            <p className='text-xl font-semibold text-gray-500'> Job Seekers portal</p>
            <p className="text-xl font-semibold tracking-wider text-gray-400">NEWWORK</p>
        </div>


        </div>

                 </div>

       
      </div>
    </section>
    );
};

export default Counte;