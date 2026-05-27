'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, Code2, Palette, Lightbulb } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20 sm:pt-24 lg:pt-24">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-8 xl:px-8 relative z-10 w-full py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="lg:col-span-7 text-white text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-600/20 to-brand-500/20 border border-brand-500/30 rounded-full text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Transforming Ideas Into Reality
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold leading-tight mb-6">
              Engineering Scalable IT Infrastructure<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 animate-gradient"> & Digital Systems</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We help growing businesses design, secure, and optimize their IT infrastructure while building reliable software systems that scale with their operations.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span className="text-sm text-slate-300">Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span className="text-sm text-slate-300">UI/UX Design</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl shadow-brand-900/50"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="border-2 border-slate-600 text-white hover:bg-slate-800/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:border-brand-500"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent mb-2">10+</div>
                <div className="text-slate-400 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent mb-2">99.5%</div>
                <div className="text-slate-400 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 shadow-2xl backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Code Snippet Simulation */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Code2 className="w-5 h-5 text-brand-400" />
                      <span className="text-brand-300 text-sm font-medium">Development</span>
                    </div>
                    <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700/30 font-mono text-sm">
                      <div className="text-slate-500">{'//'} Building innovative solutions</div>
                      <div className="text-brand-400">const <span className="text-slate-300">success</span> = <span className="text-brand-300">await</span> <span className="text-slate-300">nextLayer</span>.<span className="text-brand-400">build</span>();</div>
                    </div>
                  </div>

                  {/* Design Element */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Palette className="w-5 h-5 text-brand-400" />
                      <span className="text-brand-300 text-sm font-medium">Design</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg"></div>
                      <div className="h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg"></div>
                      <div className="h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg"></div>
                      <div className="h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg"></div>
                    </div>
                  </div>

                  {/* Innovation Badge */}
                  <div className="flex items-center justify-between bg-slate-950/50 rounded-lg p-4 border border-slate-700/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-slate-300 text-sm font-medium">Innovation Score</div>
                        <div className="text-2xl font-bold text-brand-400">A+</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full blur-xl opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-brand-600 to-brand-800 rounded-full blur-xl opacity-60 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;