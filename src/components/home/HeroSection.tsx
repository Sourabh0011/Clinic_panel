import React from "react";
import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative w-full overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-200/40 pt-4 pb-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content (7 cols on lg) */}
          <div className="lg:col-span-7 z-10">
            {/* Tag / Sub-heading */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-primary/20 text-cadet-blue font-medium text-xs sm:text-sm uppercase tracking-wider mb-6">
              <Heart className="w-4 h-4 text-primary fill-primary/20" />
              <span className="text-gray-700 font-semibold">Live your life</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark tracking-tight leading-[1.15] mb-6">
              We Care About <br className="hidden sm:inline" />
              <span className="text-primary relative inline-block">
                Your Health
                <svg
                  className="absolute -bottom-2 left-0 w-full text-primary/30 h-2.5"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 10 Q 50 20 100 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                  />
                </svg>
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-gray leading-relaxed max-w-xl mb-8">
              Vitae aliquam vestibulum elit adipiscing massa diam in dignissim.
              Risus tellus libero elementum aliquam etiam. Lectus adipiscing est
              auctor mi quisque nunc non viverra est.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#book-appointment"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-white font-semibold text-sm tracking-wider uppercase hover:bg-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <span>Contact us</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#our-services"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-dark/20 text-dark font-semibold text-sm tracking-wider uppercase hover:border-primary hover:text-primary transition-all duration-300"
              >
                Our Services
              </a>
            </div>

            {/* Fast Features Under CTA */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-200/80 max-w-lg">
              <div>
                <span className="block text-2xl font-bold text-dark">24/7</span>
                <span className="text-xs text-gray">Emergency Service</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-dark">50+</span>
                <span className="text-xs text-gray">Expert Doctors</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-dark">100%</span>
                <span className="text-xs text-gray">Patient Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Image Banner (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background decorative blob */}
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-70 -z-10 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-60 h-60 bg-cadet-blue/20 rounded-full filter blur-2xl opacity-60 -z-10"></div>

              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
                  alt="Doctor with patient in consultation"
                  width={600}
                  height={500}
                  priority
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                />

                {/* Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Heart className="w-6 h-6 fill-current text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dark">Modern Healthcare</h4>
                    <p className="text-xs text-gray">Top ranked medical clinic with personalized patient care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
