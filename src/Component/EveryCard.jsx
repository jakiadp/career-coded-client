import { Briefcase, Shield, TrendingUp, Users } from 'lucide-react';
import React from 'react';

const EveryCard = () => {
      const features = [
    {
      icon: Briefcase,
      title: "Millions of Jobs",
      description:
        "Access the largest database of job listings from companies worldwide. New opportunities added daily.",
    },
    {
      icon: TrendingUp,
      title: "Salary Insights",
      description: "Get personalized salary estimates based on your experience, location, and industry trends.",
    },
    {
      icon: Shield,
      title: "Verified Companies",
      description: "Read authentic reviews from current and former employees. Make informed career decisions.",
    },
    {
      icon: Users,
      title: "Career Support",
      description: "Connect with recruiters and career coaches. Get expert guidance throughout your job search.",
    },
  ]
    return (
        <div>
 <section className="px-6 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-balance lg:text-5xl">
            Everything You Need to Find Your Dream Job
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Our platform provides all the tools and resources you need to navigate your career journey successfully.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <div className="p-10 rounded-2xl hover:shadow-2xl hover:bg-base-300 space-y-4 bg-base-200 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default EveryCard;