import React from 'react';
import JobCard from '../Pages/Share/JobCard';

const HotJob = ({ jobs }) => {
  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold mb-4">Jobs of the day</h2>
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