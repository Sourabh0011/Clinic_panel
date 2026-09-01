import React from "react";
import { ShieldCheck, Heart, Cross, Stethoscope, Sparkles } from "lucide-react";

interface BrandItem {
  id: number;
  name: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const brands: BrandItem[] = [
  { id: 1, name: "BETAEL", subtitle: "Diagnostics", icon: ShieldCheck },
  { id: 2, name: "HEALER", subtitle: "Medical Lab", icon: Heart },
  { id: 3, name: "LIFETRACE", subtitle: "Pharma", icon: Cross },
  { id: 4, name: "MEDCARE", subtitle: "Healthcare", icon: Stethoscope },
  { id: 5, name: "SOVEN", subtitle: "Clinical Research", icon: Sparkles },
];

export const BrandCollection: React.FC = () => {
  return (
    <section id="brand-collection" className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-cadet font-semibold mb-8">
          Trusted Partners & Global Health Networks
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
          {brands.map((brand) => {
            const Icon = brand.icon;
            return (
              <div
                key={brand.id}
                className="group flex flex-col items-center justify-center p-4 rounded-xl border border-transparent hover:border-gray-100 hover:bg-primary-50/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-primary transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                  <span className="text-lg font-extrabold tracking-wider text-dark/70 group-hover:text-dark">
                    {brand.name}
                  </span>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-cadet mt-0.5">
                  {brand.subtitle}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandCollection;
