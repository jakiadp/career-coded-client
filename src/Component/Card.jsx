import { Search } from 'lucide-react';
import React from 'react';
import image from '../assets/Image/injoy.jpg'

const Card = () => {
    return (
        <div>
 <section className="relative overflow-hidden mx-auto bg-base-100 min-h-96 p-5">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight text-balance lg:text-6xl xl:text-7xl">
                <span className="text-muted-foreground text-3xl text-blue-350">Millions Of Jobs.</span>
                <br />
                Find The One That's <span className="text-primary">Right</span> For You
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed lg:text-xl">
                Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on
                over 600,000 companies worldwide. The right job is out there.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button size="lg" className=" flex gap-2 btn px-8 py-3 font-semibold rounded-md  bg-blue-600 hover:bg-blue-500  text-gray-50">
                <Search className="mr-2 h-5 w-5" />
                Search Jobs
              </button>
              <button size="lg" variant="outline" className="text-base font-semibold  btn btn-outline">
                Learn More
              </button>
            </div>

            
          </div>

          {/* Right Content - Image Card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl  shadow-2xl">
              <img
                src={image }
                alt="Happy professionals celebrating success"
                width={400}
                height={400}
                className="w-100 h-auto object-cover"
                priority
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -left-10 top-10 bg-card rounded-xl shadow-lg p-4 border border-border max-w-[200px] hidden lg:block bg-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground">Market Static</span>
              </div>
              <h3 className="text-sm font-semibold mb-3">Course overview</h3>
              <div className="h-16 w-full">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <path
                    d="M 0,35 Q 20,30 25,25 T 50,15 T 75,10 T 100,5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                </svg>
              </div>
              <div className="flex gap-2 text-xs text-muted-foreground mt-2">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Card;