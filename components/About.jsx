import React from 'react';
import Image from 'next/image';
import { aboutAchievements, aboutBadge, aboutParagraphs, aboutImage } from './aboutContent';

const About = () => {
  const achievements = aboutAchievements;

  const taglines = [
    "Innovate • Build • Scale",
    "Technology solutions for modern businesses",
    "Your partner in digital transformation"
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-8 xl:px-8">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 sm:mb-20">
          <div className="text-center lg:text-left px-4 sm:px-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              About <span className="text-brand-600">NextLayer Labs</span>
            </h1>
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 last:mb-6 sm:last:mb-8 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="flex items-center justify-center lg:justify-start mb-6">
              <span className="bg-green-100 text-green-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full">
                {aboutBadge}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 text-center lg:text-left">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-800">{achievement.value}</div>
                      <div className="text-slate-600 text-xs sm:text-sm">{achievement.title}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative order-first lg:order-last px-4 sm:px-0">
            <div className="relative">
              <Image
                src={aboutImage.src}
                alt={aboutImage.alt}
                width={aboutImage.width}
                height={aboutImage.height}
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

        {/* Our Vision Section */}
        <div className="mb-16 sm:mb-20">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
              To empower businesses with reliable technology solutions and help organizations grow through innovation, automation, and digital transformation.
              At NextLayer Labs, we aim to simplify technology, build scalable software solutions, and support businesses in their journey toward a smarter digital future.
            </p>

            {/* Taglines */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {taglines.map((tagline, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="font-semibold text-brand-300">"{tagline}"</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;