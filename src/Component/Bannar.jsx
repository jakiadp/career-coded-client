import React from 'react';

const Bannar = () => {
    return (
        <div>
            <div className="hero bg-base-100 min-h-screen">
  <div className="hero-content flex flex-col lg:flex-row-reverse justify-around gap-20">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">The Easiest Way <br />
to Get Your New Job</h1>
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
