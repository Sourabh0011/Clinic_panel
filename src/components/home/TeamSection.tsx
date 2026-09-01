"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Leslie Taylor",
    specialty: "Pediatrician",
    bio: "Dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum habitant fames ac penatibus et.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    socials: { facebook: "#", twitter: "#", instagram: "#", youtube: "#" },
  },
  {
    id: 2,
    name: "Dr. Zachary Brown",
    specialty: "Cardiologist",
    bio: "Dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum habitant fames ac penatibus et.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    socials: { facebook: "#", twitter: "#", instagram: "#", youtube: "#" },
  },
  {
    id: 3,
    name: "Dr. Isabella Davies",
    specialty: "Gynecologist",
    bio: "Dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum habitant fames ac penatibus et.",
    image: "https://images.unsplash.com/photo-1594824813512-886d34ea993f?auto=format&fit=crop&w=600&q=80",
    socials: { facebook: "#", twitter: "#", instagram: "#", youtube: "#" },
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section id="our-team" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold block mb-2">
            Meet Our Experts
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight">
            Our Medical Team
          </h2>
          <p className="mt-3 text-gray text-base">
            Board-certified healthcare specialists dedicated to delivering exceptional, compassionate treatment.
          </p>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Doctor Image */}
              <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Doctor Info */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors">
                    {doctor.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider font-semibold text-cadet block mt-1 mb-3">
                    {doctor.specialty}
                  </span>
                  <p className="text-gray text-sm leading-relaxed mb-6">
                    {doctor.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <a
                    href={doctor.socials.facebook}
                    className="w-8 h-8 rounded-full bg-primary-200/50 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-xs"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={doctor.socials.twitter}
                    className="w-8 h-8 rounded-full bg-primary-200/50 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-xs"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={doctor.socials.instagram}
                    className="w-8 h-8 rounded-full bg-primary-200/50 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-xs"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={doctor.socials.youtube}
                    className="w-8 h-8 rounded-full bg-primary-200/50 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-xs"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
