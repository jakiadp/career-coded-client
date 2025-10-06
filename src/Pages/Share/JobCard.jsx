import React from 'react';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    location,
    jobType,
    requirements,
    applicationDeadline,
    company_logo,
    description,
    salaryRange,
  } = job;

  return (
    <div className="card bg-white shadow-md rounded-md p-4 w-full max-w-md mx-auto hover:shadow-2xl hover:bg-base-300">
      <div className="mb-4">
        <img
          src={company_logo}
          alt="Job Banner"
          className="w-16"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mb-1">{company}</p>

      <p className="text-gray-600 text-sm">
          📍 {location} | 🕒 {jobType}
        </p>
        <p>Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
        <p>{description}</p>

        <p className="text-xs text-gray-400 mt-1">
          Deadline: {applicationDeadline}
        </p>
        
        <div className="mt-3 flex gap-2 flex-wrap">
          {
            requirements.map((skill, index) => <span  key={index} className="badge badge-outline">{skill}</span> )
          }
          
        </div>
        <div className="mt-4">
          <Link to={`/jobs/${_id}`} className="btn px-8 py-3 font-semibold rounded-md  bg-blue-600 hover:bg-blue-500  text-gray-50">Show Details</Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
