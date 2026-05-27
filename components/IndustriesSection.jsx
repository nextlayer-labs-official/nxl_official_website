import { Factory, ShoppingCart, GraduationCap, Briefcase, Building2 } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      desc: "Secure IT infrastructure, network segmentation, endpoint protection, and operational support for production environments."
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      desc: "Online stores, payment integrations, order workflows, and customer-facing digital platforms for retail businesses."
    },
    {
      icon: GraduationCap,
      title: "Education",
      desc: "Web platforms, student portals, secure collaboration systems, and digital tools for training and academic organizations."
    },
    {
      icon: Briefcase,
      title: "Startups & SMEs",
      desc: "Scalable websites, custom software, managed IT services, and business technology consulting for growing companies."
    },
    {
      icon: Building2,
      title: "Professional Services",
      desc: "Reliable business systems, cloud tools, communication platforms, and workflow automation for service-based firms."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Industries <span className="text-brand-600">We Serve</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            We deliver tailored technology solutions for growing businesses across multiple sectors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {industry.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {industry.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;