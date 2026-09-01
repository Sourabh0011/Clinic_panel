import React from "react";
import {
  Thermometer,
  HeartHandshake,
  Apple,
  Pill,
  ArrowUpRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const services: ServiceItem[] = [
  {
    id: "general-practitioners",
    title: "General Practitioners",
    description:
      "Aliquam etiam lectus adipiscing est auctor mi quisque non viverra. Comprehensive healthcare diagnosis and treatment.",
    icon: Thermometer,
    href: "#book-appointment",
  },
  {
    id: "pregnancy-support",
    title: "Pregnancy Support",
    description:
      "Aliquam etiam lectus adipiscing est auctor mi quisque non viverra. Caring prenatal and postnatal maternal support.",
    icon: HeartHandshake,
    href: "#book-appointment",
  },
  {
    id: "nutritional-support",
    title: "Nutritional Support",
    description:
      "Aliquam etiam lectus adipiscing est auctor mi quisque non viverra. Personalized dietary regimens and wellness plans.",
    icon: Apple,
    href: "#book-appointment",
  },
  {
    id: "pharmaceutical-care",
    title: "Pharmaceutical Care",
    description:
      "Aliquam etiam lectus adipiscing est auctor mi quisque non viverra. Safe medication management and on-site dispensing.",
    icon: Pill,
    href: "#book-appointment",
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section
      id="our-services"
      className="relative py-20 lg:py-28 bg-[#182326] text-white overflow-hidden"
    >
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold block mb-3">
              Quality Medical Care
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Our Best Services <br className="hidden sm:inline" />
              For Your Solution
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Vitae aliquam vestibulum elit adipiscing massa diam in dignissim.
              Risus tellus libero elementum aliquam etiam. Lectus adipiscing est
              auctor mi quisque nunc non viverra est.
            </p>
          </div>
        </div>

        {/* Services 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white text-dark p-8 rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-16 h-16 rounded-2xl bg-primary-200/60 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-300 mb-6 shadow-sm">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors duration-200 mb-3">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Learn More link */}
                <a
                  href={service.href}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary group-hover:text-dark transition-colors duration-200 mt-2"
                >
                  <span>Book Consult</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
