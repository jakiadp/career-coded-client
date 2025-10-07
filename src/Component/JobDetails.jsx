import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();
    const { 
    _id,
    title,
    company,
    company_logo,
    location,
    jobType,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,} =job;
    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 my-20 space-y-4 ">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <img src={company_logo} alt="Company Logo" className="w-16 h-16 object-contain" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-500">{company}</p>
        </div>
      </div>

      {/* Details */}
      <div className="text-gray-700 space-y-1 ">
        <p>📍 <strong>Location:</strong> {location}</p>
        <p>💼 <strong>Job Type:</strong> {jobType}</p>
        <p>💰 <strong>Salary:</strong> {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}</p>
        <p>📅 <strong>Deadline:</strong> {applicationDeadline}</p>
      </div>

      {/* Description */}
      <div>
        <h3 className="font-semibold text-gray-800">Job Description</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Requirements */}
      <div>
        <h3 className="font-semibold text-gray-800">Requirements</h3>
        <ul className="list-disc list-inside text-gray-600">
          {requirements.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div>
        <h3 className="font-semibold text-gray-800">Responsibilities</h3>
        <ul className="list-disc list-inside text-gray-600">
          {responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <div className="pt-4">
        <Link to={`/jobApply/${_id}`}>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-medium  w-full">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
    );
};

export default JobDetails;