"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Building,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

export const AppointmentBooking: React.FC = () => {
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const departments = [
    "Department of Physiotherapy",
    "Department of Dentistry",
    "ENT Department",
    "Department of Pharmacy",
    "Nursing Department",
    "Cardiology Department",
  ];

  const doctors = [
    "Dr. William Davies (Physiotherapy)",
    "Dr. Charlotte Taylor (Dentistry)",
    "Dr. William Jones (ENT)",
    "Dr. Leslie Taylor (Pediatrics)",
    "Dr. Zachary Brown (Cardiology)",
    "Dr. Isabella Davies (Gynecology)",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="book-appointment" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-50 via-white to-primary-200/30 p-8 sm:p-12 lg:p-16 rounded-3xl border border-primary/20 shadow-card">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold block mb-2">
              Online Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight">
              Book Appointment or call:{" "}
              <a
                href="tel:+4873849452"
                className="text-primary hover:text-dark transition-colors inline-block whitespace-nowrap"
              >
                +91 8103210256
              </a>
            </h2>
            <p className="mt-3 text-gray text-base">
              Fill out the form below and our medical reception desk will confirm your scheduled slot within 15 minutes.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex flex-col items-center text-center animate-fadeIn">
              <CheckCircle2 className="w-14 h-14 text-emerald-500 mb-3" />
              <h3 className="text-2xl font-bold mb-2">Appointment Request Received!</h3>
              <p className="text-sm max-w-md">
                Thank you, <strong>{formData.name || "Patient"}</strong>. Your booking for the{" "}
                <strong>{formData.department || "General"}</strong> clinic on{" "}
                <strong>{formData.date || "selected date"}</strong> has been registered.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-6 px-6 py-2 rounded-full bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-emerald-700 transition-colors"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Department Dropdown */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary">
                    <Building className="w-5 h-5" />
                  </div>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-10 py-4 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select Department *</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Doctor Dropdown */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-10 py-4 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select Doctor *</option>
                    {doctors.map((doc) => (
                      <option key={doc} value={doc}>
                        {doc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Full Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-dark text-sm placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-dark text-sm placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                  />
                </div>

                {/* Date Picker */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all cursor-pointer"
                  />
                </div>

                {/* Time Picker */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all cursor-pointer"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-white font-semibold text-sm tracking-wider uppercase hover:bg-dark transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Processing..." : "Book An Appointment"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppointmentBooking;
