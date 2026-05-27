import React from 'react';
import { Linkedin, Twitter, MessageCircle, Instagram, Users, TrendingUp } from 'lucide-react';

const FAQSection = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/nextlayer-labs",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    // {
    //   name: "Twitter",
    //   icon: Twitter,
    //   url: "https://twitter.com/nextlayerlabs",
    //   color: "bg-sky-500 hover:bg-sky-600"
    // },
    // {
    //   name: "WhatsApp",
    //   icon: MessageCircle,
    //   url: "https://wa.me/917349546714",
    //   color: "bg-brand-600 hover:bg-brand-700"
    // },
    // {
    //   name: "Instagram",
    //   icon: Instagram,
    //   url: "https://instagram.com/nextlayerlabs",
    //   color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    // }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Connect With <span className="text-brand-600">NextLayer Labs</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Follow us on social media for daily tech updates and behind-the-scenes content from our technology experts.
          </p>
        </div>

        {/* Stay Connected & Informed Section - Direct Integration */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-brand-50 to-blue-50 rounded-xl p-6 sm:p-8 border border-brand-200 shadow-lg">
            <div className="text-center">
              <h4 className="font-bold text-slate-800 mb-4 text-xl sm:text-2xl">Stay Connected & Informed</h4>
              <p className="text-slate-600 text-base sm:text-lg mb-6">
                Connect with tech enthusiasts, industry professionals, and fellow innovators
              </p>
              
              {/* Quick Social Links */}
              <div className="flex justify-center space-x-3 mb-6">
                {socialLinks.slice(0, 4).map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center text-white transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Community Benefits */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-brand-600 mr-2" />
                    <div className="text-2xl font-bold text-brand-600">1K+</div>
                  </div>
                  <div className="text-slate-600 text-sm">Community Members</div>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                    <div className="text-2xl font-bold text-blue-600">Daily</div>
                  </div>
                  <div className="text-slate-600 text-sm">Tech Updates</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;