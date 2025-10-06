import React, { useEffect, useState } from 'react';
import Bannar from '../Component/Bannar';
import HotJob from '../Component/HotJob';
import MillionJobs from '../Component/MillionJobs';
import Card from '../Component/Card';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch jobs:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-8">
      <Bannar />

      {loading ? (
        <p className="text-center text-gray-500 text-xl">⏳ Loading hot jobs...</p>
      ) : (
        <HotJob jobs={jobs} />
      )}

      <MillionJobs></MillionJobs>
      <Card></Card>
      
    </div>
  );
};

export default Home;