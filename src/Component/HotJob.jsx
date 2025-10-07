import React from 'react';
import JobCard from '../Pages/Share/JobCard';

const HotJob = ({ jobs }) => {
  return (
    <div className="px-4 mt-20">
      <h2 className="text-5xl mt-20 font-bold mb-5 items-center text-center">Jobs of the day</h2>
      <p className='mb-2 items-center text-center'>Search and connect with the right candidates faster.</p>
      <p className='mb-10 items-center text-center'>Job is a dedicated and results-driven with a strong background  She plays a key role in ensuring smooth day-to-day <br /> operations and contributes to the overall success of her team and organization.</p>
      <p></p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJob;