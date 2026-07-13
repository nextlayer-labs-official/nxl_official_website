'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Lightbulb,
  Award,
  Mail,
  ShieldCheck,
  Globe,
  Server,
  Lock,
  Bot,
} from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: 'E-commerce Platform Development',
      client: 'Royal Decants',
      challenge:
        'Need for a scalable e-commerce platform with logistics and payment integration',
      solution:
        'Developed an e-commerce solution using WordPress and WooCommerce with integrated payment gateways and logistics automation.',
      results: [
        { metric: 'Performance Boost', value: '+100%', icon: TrendingUp },
        { metric: 'User Engagement', value: '+100%', icon: Users },
        { metric: 'Revenue Growth', value: '+180%', icon: DollarSign },
      ],
      image: '/royal_decants.jpg',
      category: 'Web Development',
      color: 'blue',
      href: '/contact',
    },
    {
      title: 'Web Development Bootcamp',
      client: 'MIT Training Academy',
      challenge:
        'Introduce college students to web development fundamentals and build a strong foundation in internet technologies.',
      solution:
        'Conducted a structured bootcamp covering HTML, CSS, JavaScript fundamentals, and an introduction to how the web and modern development workflows work.',
      results: [
        { metric: 'Students Trained', value: '50+', icon: Users },
        { metric: 'Completion Rate', value: '90%', icon: TrendingUp },
        { metric: 'Project Built', value: '1', icon: DollarSign },
      ],
      image: '/web-bootcamp.jpg',
      category: 'Training',
      color: 'emerald',
      href: '/contact',
    },
    {
      title: 'JainSabha Web Application',
      client: 'JainSabha Organization',
      challenge:
        'Existing website was static and lacked features for online registrations, donations, and content management.',
      solution:
        'Developed a dynamic web application using Vite + React frontend and Node.js + Express backend with MySQL database, including an admin panel and integrated payment gateway for donations and event registrations.',
      results: [
        { metric: 'Online Registrations', value: '+70%', icon: TrendingUp },
        { metric: 'Donation Processing', value: 'Auto', icon: Users },
        { metric: 'Admin Efficiency', value: '+70%', icon: DollarSign },
      ],
      image: '/dbjs.jpg',
      category: 'Web Development',
      color: 'orange',
      href: '/contact',
    },
    {
      title: 'Business Email Setup & Website Launch',
      client: 'Global Laser Solutions',
      challenge:
        'No professional business email in place — all communication was being handled through personal Gmail accounts, with no branded domain presence online.',
      solution:
        'Configured a fully authenticated business email environment on Zoho Mail with MX, SPF, and DKIM records across 3 mailboxes, and delivered a fast, statically-hosted Next.js website.',
      results: [
        { metric: 'Mailboxes Configured', value: '3', icon: Mail },
        { metric: 'Email Authentication', value: 'SPF + DKIM', icon: ShieldCheck },
        { metric: 'Website Platform', value: 'Next.js', icon: Globe },
      ],
      image: '/support-specialist-server.jpg',
      category: 'IT Infrastructure & Security',
      color: 'indigo',
      href: '/contact',
    },
    {
      title: 'Digital Product Sales Automation via Telegram',
      client: 'SoftPixel Works',
      challenge:
        'Needed a reliable, self-hosted environment to automate digital product sales through Telegram without depending on third-party platforms.',
      solution:
        "Provisioned and configured a production VPS on Ubuntu with Nginx/Apache, MariaDB, and PM2, set up a custom domain with Let's Encrypt SSL, and built a Telegram bot to handle digital product sales end-to-end.",
      results: [
        { metric: 'Server Stack', value: 'Ubuntu + Nginx', icon: Server },
        { metric: 'Secure Domain', value: "Let's Encrypt SSL", icon: Lock },
        { metric: 'Sales Channel', value: 'Telegram Bot', icon: Bot },
      ],
      image: '/it-infrastructure-servers.jpg',
      category: 'IT Infrastructure & Security',
      color: 'teal',
      href: '/contact',
    }
  ];

  const colorStyles = {
    blue: {
      gradient: 'from-blue-500 to-cyan-500',
      hoverGradient: 'hover:from-blue-500 hover:to-cyan-500',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      ring: 'ring-blue-500/20',
    },
    emerald: {
      gradient: 'from-emerald-500 to-teal-500',
      hoverGradient: 'hover:from-emerald-500 hover:to-teal-500',
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-200',
      ring: 'ring-emerald-500/20',
    },
    orange: {
      gradient: 'from-orange-500 to-amber-500',
      hoverGradient: 'hover:from-orange-500 hover:to-amber-500',
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-200',
      ring: 'ring-orange-500/20',
    },
    indigo: {
      gradient: 'from-indigo-500 to-blue-500',
      hoverGradient: 'hover:from-indigo-500 hover:to-blue-500',
      bg: 'bg-indigo-50',
      text: 'text-indigo-600',
      border: 'border-indigo-200',
      ring: 'ring-indigo-500/20',
    },
    teal: {
      gradient: 'from-teal-500 to-cyan-500',
      hoverGradient: 'hover:from-teal-500 hover:to-cyan-500',
      bg: 'bg-teal-50',
      text: 'text-teal-600',
      border: 'border-teal-200',
      ring: 'ring-teal-500/20',
    },
  };

  return (
    <section
      id="case-studies"
      className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2">
            <Award className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Success Stories</span>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Transforming Businesses Through
            <span className="mt-2 block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Innovation & Excellence
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-slate-600 sm:text-xl">
            Real results from real partnerships. Discover how we&apos;ve helped
            organizations achieve their technology goals.
          </p>
        </div>

        <div className="mb-12 grid gap-6 sm:mb-16 lg:grid-cols-3 lg:gap-8">
          {cases.map((caseStudy, index) => {
            const styles = colorStyles[caseStudy.color];

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                  />
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />

                  <div className="absolute left-4 top-4">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-sm ${styles.bg} ${styles.text}`}
                    >
                      {caseStudy.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="mb-1 line-clamp-2 text-xl font-bold text-white">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-200">
                      {caseStudy.client}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6 space-y-4">
                    <div className={`rounded-xl border p-4 ${styles.bg} ${styles.border}`}>
                      <div className="flex items-start gap-3">
                        <div className={`rounded-lg bg-white p-2 ${styles.text}`}>
                          <Target className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="mb-1 text-sm font-semibold text-slate-900">
                            Challenge
                          </h4>
                          <p className="text-xs leading-relaxed text-slate-600">
                            {caseStudy.challenge}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={`rounded-xl border p-4 ${styles.bg} ${styles.border}`}>
                      <div className="flex items-start gap-3">
                        <div className={`rounded-lg bg-white p-2 ${styles.text}`}>
                          <Lightbulb className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="mb-1 text-sm font-semibold text-slate-900">
                            Solution
                          </h4>
                          <p className="text-xs leading-relaxed text-slate-600">
                            {caseStudy.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-3">
                    {caseStudy.results.map((result, resultIndex) => {
                      const Icon = result.icon;

                      return (
                        <div
                          key={resultIndex}
                          className="rounded-xl bg-slate-50 p-3 text-center transition-colors duration-300 hover:bg-slate-100"
                        >
                          <Icon className={`mx-auto mb-2 h-5 w-5 ${styles.text}`} />
                          <div className="mb-0.5 text-lg font-bold text-slate-900">
                            {result.value}
                          </div>
                          <div className="text-[10px] leading-tight text-slate-600">
                            {result.metric}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* <Link
                    href={caseStudy.href}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all duration-300
                      ${styles.text} ${styles.border}
                      bg-white hover:bg-gradient-to-r ${styles.hoverGradient}
                      hover:text-white hover:border-transparent`}
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link> */}
                </div>

                <div
                  className={`pointer-events-none absolute inset-0 rounded-2xl ring-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${styles.ring}`}
                />
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-12">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative text-center">
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Ready to Write Your Success Story?
              </h3>
              <p className="mx-auto mb-8 max-w-2xl text-base text-slate-300 sm:text-lg">
                Join our growing list of successful clients. Let&apos;s transform your
                vision into reality.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 sm:text-base"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;