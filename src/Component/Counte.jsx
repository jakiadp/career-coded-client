import React from 'react';
import CountUp from 'react-countup';

const Counte = () => {
      const stats = [
    {
      value: "2M+",
      label: "Active Job Seekers",
      company: "JOBFINDER",
    },
    {
      value: "500K+",
      label: "Companies Listed",
      company: "CAREERPATH",
    },
    {
      value: "98%",
      label: "Success Rate",
      company: "HIRENOW",
    },
    {
      value: "1M+",
      label: "Jobs Posted Monthly",
      company: "WORKWISE",
    },
  ]

    return (
        <section className="border-y border-gray-200 bg-gray-50 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-3 border-l-2 border-blue-300 pl-6"
            >
              <div className="space-y-1">
                <div className="text-4xl font-bold text-gray-900">
                  <CountUp
                    end={stat.value}
                    duration={2}
                    separator=","
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
              <div className="text-xs font-semibold tracking-wider text-gray-400">
                {stat.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Counte;