"use client";

import React, { useEffect, useState } from "react";
import { Users, Building2, Stethoscope, Award } from "lucide-react";

interface StatItem {
  id: number;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stats: StatItem[] = [
  {
    id: 1,
    value: 5120,
    prefix: "+",
    label: "Happy Patients",
    icon: Users,
  },
  {
    id: 2,
    value: 26,
    prefix: "+",
    label: "Total Branches",
    icon: Building2,
  },
  {
    id: 3,
    value: 53,
    prefix: "+",
    label: "Senior Doctors",
    icon: Stethoscope,
  },
  {
    id: 4,
    value: 10,
    prefix: "+",
    label: "Years Experience",
    icon: Award,
  },
];

export const StatsCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <section id="about-us" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center group p-6 rounded-2xl transition-all duration-300 hover:bg-primary-50/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-200/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="flex items-center text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500 group-hover:text-primary transition-colors duration-300">
                  <span>{stat.prefix}</span>
                  <span className="tabular-nums tracking-tight">
                    {stat.value.toLocaleString()}
                  </span>
                  <span>{stat.suffix}</span>
                </div>
                <p className="mt-2 text-sm sm:text-base font-medium text-gray">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
