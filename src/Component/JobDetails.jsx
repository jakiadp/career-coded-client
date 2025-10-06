import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();
    const {_id,
    title,
    company,
    location,
    jobType,
    
    applicationDeadline,
    
    description,
    salaryRange,} =job;
    return (
        <div>
            
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mb-1">{company}</p>

        <p className="text-gray-600 text-sm">
          📍 {location} | 🕒 {jobType}
        </p>
        <p>Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
        <p>{description}</p>

        <p className="text-xs text-gray-400 mt-1">
          Deadline: {applicationDeadline}
        </p>
        
       

        
        </div>
    );
};

export default JobDetails;