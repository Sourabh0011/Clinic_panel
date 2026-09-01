"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "Why choose Insove Medical Healthcare?",
    answer:
      "Diam orci gravida convallis at enim risus viverra. Hac mi tristique in aliquet tincidunt nam lectus nec. Placerat interdum auctor facilisi massa laoreet hendrerit posuere a. Tristique ultricies consectetu at.",
  },
  {
    id: 2,
    question: "Will we get healthcare updates after surgery?",
    answer:
      "Yes, our post-operative team provides continuous digital care monitoring, direct 24/7 doctor follow-up lines, and customized recovery timelines for each patient.",
  },
  {
    id: 3,
    question: "What is the cost for a standard medical check-up?",
    answer:
      "We accept most major commercial and private health insurances. Out-of-pocket check-ups feature transparent upfront tiered pricing with no hidden facility charges.",
  },
  {
    id: 4,
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Appointments can easily be rescheduled or canceled online or via phone up to 2 hours prior to your scheduled consultation with zero penalty fees.",
  },
];

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#fbfdfd] border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold block mb-2">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight">
            We&apos;ve Got Answers
          </h2>
          <p className="mt-3 text-gray text-base">
            Find quick answers to frequent patient inquiries regarding care, appointments, and insurance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-gray-200/80 bg-white overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-dark pr-4 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                      isOpen
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-dark hover:bg-primary-100"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-gray text-sm sm:text-base leading-relaxed border-t border-gray-100 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
