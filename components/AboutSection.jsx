import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { ArrowRight, Award, Globe } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { icon: Award, title: "Projects Delivered", value: "10+" },
    { icon: Globe, title: "Success Rate", value: "99.5%" },
    { icon: Globe, title: "Industries Served", value: "5+" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              About <span className="text-brand-600">NextLayer Labs</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              NextLayer Labs is a business-focused IT consulting and technology solutions company delivering secure infrastructure, scalable digital systems, and reliable software platforms. Our expertise spans IT architecture, network security, cloud-based systems, custom web applications, and managed IT services. We follow a structured, results-driven approach that ensures every deployment is secure, optimized, and aligned with business objectives.
            </p>

            <div className="flex items-center justify-center lg:justify-start mb-6">
              <span className="bg-green-100 text-green-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full">
                MSME Registered – Government of India
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 justify-center lg:justify-start">
              <Link
                href="/about"
                className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 text-sm sm:text-base"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center lg:text-left">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-2">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-800">{achievement.value}</div>
                    <div className="text-slate-600 text-xs sm:text-sm">{achievement.title}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative order-first lg:order-last px-4 sm:px-0">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="Technology professionals in modern workspace"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-brand-600 mb-1">3+</div>
                  <div className="text-slate-600 text-xs sm:text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;