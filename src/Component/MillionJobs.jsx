import { ArrowRight } from 'lucide-react';
import React from 'react';

const MillionJobs = () => {
    return (
    <section className="px-6 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 from-primary to-primary/80 px-8 py-16 shadow-2xl lg:px-16 lg:py-24">
          <div className="relative z-10 mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-4xl font-bold tracking-tight  text-balance lg:text-5xl text-white">
              Ready to Take the Next Step in Your Career?
            </h2>
            <p className="text-lg text-base-100  leading-relaxed lg:text-xl">
              Join millions of professionals who have found their perfect job match. Start your journey today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button size="lg" variant="secondary" className="text-base font-semibold btn px-8 py-3  rounded-md  bg-white hover:bg-blue-300  text-blue-950">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                size="lg"
                variant="outline"
                className="btn  bg-base-50 hover:bg-base-500 text-base font-semibold "
              >
                View All Jobs
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
        </div>
      </div>
    </section>
  )
};

export default MillionJobs;