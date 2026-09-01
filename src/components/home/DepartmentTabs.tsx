"use client";

import React, { useState } from "react";
import {
  FlaskConical,
  HeartPulse,
  Activity,
  Microscope,
  Baby,
  Brain,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface Department {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description1: string;
  description2: string;
  tags: string[];
}

const departments: Department[] = [
  {
    id: "laboratory",
    name: "Laboratory Analysis",
    icon: FlaskConical,
    title: "Laboratory Analysis",
    description1:
      "Laboratory analysis means a test performed by a laboratory on body fluid, tissue, or excretion for the purpose of determining the presence, absence, or concentration of various substances in the human body.",
    description2:
      "Sampling is the process of collecting a portion of an environmental medium as representative of the locally remaining medium. The collected portion of the medium is then analyzed to determine exact biomarker levels.",
    tags: ["Diagnostic Hematology", "Clinical Biochemistry", "Molecular Genetics"],
  },
  {
    id: "cardiology",
    name: "Cardiology Clinic",
    icon: HeartPulse,
    title: "Cardiology Clinic",
    description1:
      "Our cardiology clinic provides comprehensive cardiovascular examinations, echocardiograms, stress testing, and preventative cardiac care designed to protect your heart health.",
    description2:
      "With advanced cardiac telemetry and seasoned cardiologists, we offer personalized treatment strategies from routine blood pressure optimization to complex arrhythmia management.",
    tags: ["Cardiac Imaging", "Interventional Cardiology", "Electrophysiology"],
  },
  {
    id: "gynecology",
    name: "Gynecology Clinic",
    icon: Activity,
    title: "Gynecology Clinic",
    description1:
      "Providing compassionate women's health consultations across all lifecycle stages. From preventative screenings and prenatal guidance to specialized gynecological therapies.",
    description2:
      "Our clinic emphasizes patient comfort, privacy, and evidence-based medicine in a modern and soothing clinical environment.",
    tags: ["Maternal Health", "Obstetric Ultrasound", "Reproductive Wellness"],
  },
  {
    id: "pathology",
    name: "Pathology Clinic",
    icon: Microscope,
    title: "Pathology Clinic",
    description1:
      "High-precision surgical and cellular pathology diagnostics providing rapid, accurate biopsy evaluations and biomarker assessments for oncological and systemic illnesses.",
    description2:
      "Our certified pathologists utilize digital microscopic imaging to ensure zero margin for diagnostic ambiguity.",
    tags: ["Histopathology", "Cytology", "Immunohistochemistry"],
  },
  {
    id: "pediatrics",
    name: "Pediatrics Clinic",
    icon: Baby,
    title: "Pediatrics Clinic",
    description1:
      "Child-centered healthcare from newborn check-ups to adolescent development. Our pediatricians foster gentle, reassuring atmospheres that keep young patients smiling.",
    description2:
      "Complete immunization tracking, developmental milestone assessments, and emergency pediatric triage available around the clock.",
    tags: ["Well-Child Exams", "Vaccination Programs", "Pediatric Nutrition"],
  },
  {
    id: "neurology",
    name: "Neurology Clinic",
    icon: Brain,
    title: "Neurology Clinic",
    description1:
      "Specialized diagnosis and management of conditions affecting the central and peripheral nervous systems, including headaches, epilepsy, stroke recovery, and neuromuscular disorders.",
    description2:
      "Equipped with advanced EEG, EMG, and neuro-imaging diagnostics to identify underlying neurological issues early.",
    tags: ["Neurocritical Care", "Neuro Oncology", "Geriatric Neurology"],
  },
];

export const DepartmentTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("laboratory");

  const current = departments.find((d) => d.id === activeTab) || departments[0];

  return (
    <section id="department" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-200/80 rounded-3xl p-6 sm:p-10 lg:p-14 border border-primary/20 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Tabs List (4 cols) */}
            <div className="lg:col-span-4 flex flex-col space-y-2">
              <span className="text-primary text-xs uppercase tracking-widest font-bold mb-4 block">
                Clinical Departments
              </span>
              {departments.map((dept) => {
                const Icon = dept.icon;
                const isActive = activeTab === dept.id;
                return (
                  <button
                    key={dept.id}
                    type="button"
                    onClick={() => setActiveTab(dept.id)}
                    className={`w-full text-left px-5 py-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center gap-3 ${
                      isActive
                        ? "bg-white text-primary shadow-sm translate-x-1"
                        : "text-dark/80 hover:bg-white/60 hover:text-dark"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-cadet"}`} />
                    <span>{dept.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Tab Content Display (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-8 sm:p-12 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center">
                    <current.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-cadet font-semibold">
                      Department Profile
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-dark">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 text-gray text-sm sm:text-base leading-relaxed my-6">
                  <p>{current.description1}</p>
                  <p>{current.description2}</p>
                </div>

                {/* Sub-specialty Badges */}
                <div className="flex flex-wrap gap-2.5 my-6">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-50 text-primary font-medium text-xs border border-primary/20"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                <a
                  href="#book-appointment"
                  className="inline-flex items-center px-7 py-3 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-dark transition-colors shadow-sm"
                >
                  <span>Book In {current.name}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>

                <span className="text-xs text-cadet font-medium">
                  Direct Inquiries: (+487) 384 9452
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentTabs;
