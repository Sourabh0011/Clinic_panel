"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export const SubscribeNewsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section
      id="subscribe"
      className="py-16 sm:py-20 bg-gradient-to-r from-[#134950] via-[#103a40] to-[#0d2f34] text-white relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-primary-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Info (6 cols) */}
          <div className="lg:col-span-6">
            <span className="text-primary-300 text-xs uppercase tracking-widest font-semibold block mb-2">
              Our Newsletter
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Subscribe Us To Get More Healthcare Updates
            </h3>
            <p className="mt-3 text-gray-300 text-sm sm:text-base">
              Receive medical advice, clinic health bulletins, and seasonal wellness reminders directly in your inbox.
            </p>
          </div>

          {/* Form (6 cols) */}
          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-sm font-medium">
                  Thank you! You have successfully subscribed to our monthly healthcare bulletins.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="relative flex flex-col sm:flex-row items-center gap-3"
              >
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address..."
                    className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border-2 border-white/30 text-white placeholder:text-white/60 text-sm focus:outline-none focus:border-white focus:bg-white/20 transition-all backdrop-blur-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-dark font-bold text-xs uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300 shadow-md flex-shrink-0 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeNewsletter;
