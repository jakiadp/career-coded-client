import React from 'react';

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    location,
    jobType,
    category,
    applicationDeadline,
  } = job;

  return (
    <div className="card bg-white shadow-md rounded-md p-4 w-full max-w-md mx-auto hover:shadow-2xl hover:bg-base-300">
      <div className="mb-4">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Job Banner"
          className="w-full h-48 object-cover rounded"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mb-1">{company}</p>
        <p className="text-gray-600 text-sm">
          📍 {location} | 🕒 {jobType}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Deadline: {applicationDeadline}
        </p>
        <div className="mt-3 flex gap-2 flex-wrap">
          <span className="badge badge-outline">{category}</span>
          <span className="badge badge-outline">{jobType}</span>
        </div>
        <div className="mt-4">
          <button className="btn btn-sm btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
