"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Rodrigo",
    role: "Patient",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. The more content you provide about you. Lorem, Quos saepe suscipit, nemo dolore sapiente! Outstanding clinic and staff.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Jenny Rose",
    role: "Cardiology Patient",
    quote:
      "The doctors at Insove took great care of my cardiac rehabilitation. Attentive, professional, and world-class diagnostics. Highly recommend their services to everyone.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
  {
    id: 3,
    name: "Wednesday Marigold",
    role: "Maternity Care",
    quote:
      "Exceptional pregnancy and newborn support. The nurses and pediatric team are warm, patient, and always available for questions. Best healthcare experience in NY.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
  },
];

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonial"
      className="py-20 lg:py-28 bg-[#f5fafb] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Feature Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-card border-4 border-white bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="Doctor consultation review"
                  width={500}
                  height={550}
                  className="w-full h-[380px] sm:h-[450px] object-cover"
                />
              </div>

              {/* Patient Badge */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:right-6 bg-white rounded-xl shadow-review p-4 border border-gray-100 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-primary font-bold text-xs">
                    5★
                  </div>
                  <div className="w-8 h-8 rounded-full bg-dark/20 border-2 border-white flex items-center justify-center text-dark font-bold text-xs">
                    +5k
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-dark">5,000+ Reviews</p>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Review Content (7 cols) */}
          <div className="lg:col-span-7 relative">
            <Quote className="w-16 h-16 text-primary-200 fill-primary/10 absolute -top-8 -left-6 -z-10" />

            <div className="relative min-h-[220px]">
              <span className="text-primary text-xs uppercase tracking-widest font-semibold block mb-4">
                What Our Patients Say
              </span>

              <blockquote className="text-xl sm:text-2xl lg:text-3xl text-dark font-normal leading-relaxed mb-8">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4 border-t border-gray-200/80 pt-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-dark">{current.name}</h4>
                    <span className="text-xs uppercase tracking-wider text-cadet font-medium">
                      {current.role}
                    </span>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-gray-300 text-dark hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Bullet Dots */}
                  <div className="flex items-center space-x-1.5 px-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          currentIndex === i
                            ? "bg-primary w-6"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-gray-300 text-dark hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
