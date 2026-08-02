'use client';

import { useState } from 'react';
import { Mail, Phone, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const SHEETS_WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SHEETS_WEBHOOK_URL) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      await fetch(SHEETS_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+91 6363934148",
      secondary: "Mon-Sat 9:00AM-5:30PM IST",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@nextlayerlabs.in",
      secondary: "We'll respond within 24 hours",
      color: "blue"
    },
  ];

  const benefits = [
    "Free technical consultation",
    "Customized solutions for your needs",
    "24/7 technical support available",
    "Certified professionals and technicians"
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Let's Build Your <span className="text-brand-600">Technology Future</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology solutions? Get in touch with our experts for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">
                Get in Touch
              </h3>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const colorClasses = {
                  green: "bg-brand-100 text-brand-600",
                  blue: "bg-blue-100 text-blue-600",
                  purple: "bg-purple-100 text-purple-600"
                };

                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all duration-300 hover:border-brand-300"
                  >
                    <div className={`w-12 h-12 ${colorClasses[method.color]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-800 mb-1 text-base">
                        {method.title}
                      </h4>
                      <p className="text-slate-700 font-medium text-base break-words">
                        {method.primary}
                      </p>
                      <p className="text-slate-500 text-sm mt-1">
                        {method.secondary}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-br from-brand-50 via-brand-50 to-brand-50 rounded-xl p-6 border border-brand-100">
              <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 text-center lg:text-left">
                Why Choose NextLayer Labs?
              </h4>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
                Send Us a Message
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mb-6">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="+91 00000 00000"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="IT Infrastructure & Security">IT Infrastructure & Security</option>
                    <option value="Software & Web Development">Software & Web Development</option>
                    <option value="Managed IT & Support">Managed IT & Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project or requirement..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-brand-600 text-white py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-start gap-2 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Thanks! Your message has been sent — we'll get back to you within 24 hours.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Something went wrong sending your message. Please call or email us directly instead.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;