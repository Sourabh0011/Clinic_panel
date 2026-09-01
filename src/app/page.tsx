import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { AppointmentBooking } from "@/components/home/AppointmentBooking";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { TeamSection } from "@/components/home/TeamSection";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { DepartmentTabs } from "@/components/home/DepartmentTabs";
import { BlogSection } from "@/components/home/BlogSection";
import { BrandCollection } from "@/components/home/BrandCollection";
import { SubscribeNewsletter } from "@/components/home/SubscribeNewsletter";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero / Intro Section */}
      <HeroSection />

      {/* 2. Counter Stats Section */}
      <StatsCounter />

      {/* 3. Services Grid Section */}
      <ServicesGrid />

      {/* 4. Book Appointment Section */}
      <AppointmentBooking />

      {/* 5. Patient Reviews / Testimonial Slider */}
      <TestimonialSlider />

      {/* 6. Doctors / Medical Team Section */}
      <TeamSection />

      {/* 7. FAQs Accordion Section */}
      <FaqAccordion />

      {/* 8. Department Vertical Tabs Section */}
      <DepartmentTabs />

      {/* 9. Latest Blog / Healthcare Journal */}
      <BlogSection />

      {/* 10. Brand & Partner Network */}
      <BrandCollection />

      {/* 11. Newsletter Subscription */}
      <SubscribeNewsletter />
    </div>
  );
}
