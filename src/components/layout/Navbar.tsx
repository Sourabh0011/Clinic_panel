"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Search,
  ChevronDown,
  Menu,
  X,
  Heart,
  Calendar,
  Sparkles,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  isSpecial?: boolean;
}

interface PageDropdownItem {
  label: string;
  href: string;
  isPro?: boolean;
}

const navLinks: NavItem[] = [
  { label: "Home", href: "#intro" },
  { label: "About", href: "#about-us" },
  { label: "Services", href: "#our-services" },
  { label: "Booking", href: "#book-appointment" },
  { label: "Team", href: "#our-team" },
  { label: "Faqs", href: "#faqs" },
  { label: "Department", href: "#department" },
];

const pageDropdownLinks: PageDropdownItem[] = [
  { label: "About", href: "#about-us", isPro: true },
  { label: "Blog", href: "#latest-blog", isPro: true },
  { label: "Blog-Single", href: "#latest-blog", isPro: true },
  { label: "Booking", href: "#book-appointment", isPro: true },
  { label: "Services", href: "#our-services", isPro: true },
  { label: "Departments", href: "#department", isPro: true },
  { label: "Gallery", href: "#gallery", isPro: true },
  { label: "Pricing", href: "#pricing", isPro: true },
  { label: "Contact", href: "#footer", isPro: true },
  { label: "Our Team", href: "#our-team", isPro: true },
  { label: "Reviews", href: "#testimonial", isPro: true },
  { label: "FAQs", href: "#faqs", isPro: true },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("intro");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Monitor scroll for sticky shadow effects & active link spy
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = [
        "intro",
        "about-us",
        "our-services",
        "book-appointment",
        "testimonial",
        "our-team",
        "faqs",
        "department",
        "latest-blog",
      ];

      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="w-full relative z-50 bg-white font-poppins">
      {/* Top Header Bar */}
      <div className="border-b border-gray-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 lg:py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tight text-dark group-hover:text-primary transition-colors duration-300">
                    INSOVE<span className="text-primary">.</span>
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-cadet -mt-1 font-medium">
                    Medical Healthcare
                  </span>
                </div>
              </Link>
            </div>

            {/* Middle Contact Info (Desktop & Tablet) */}
            <div className="hidden md:flex items-center space-x-8 text-sm text-gray">
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-normal text-dark/80">
                  123 Arling, Miola, NY
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+4873849452"
                  className="font-normal text-dark/80 hover:text-primary transition-colors duration-200"
                >
                  (+487) 384 9452
                </a>
              </div>
            </div>

            {/* Right Booking Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="#book-appointment"
                className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full border-2 border-primary text-dark font-medium text-xs tracking-wider uppercase hover:border-dark hover:bg-dark hover:text-white transition-all duration-300 shadow-sm"
              >
                Book Now
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg text-dark hover:text-primary hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-dark" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Floating Navigation Bar (Desktop) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 relative">
        <nav
          className={`hidden lg:flex items-center justify-between bg-white rounded-xl px-6 py-3.5 transition-all duration-300 ${
            isScrolled
              ? "shadow-card border border-gray-100"
              : "shadow-[0px_2px_40px_rgba(8,70,78,0.08)]"
          }`}
          aria-label="Primary Navigation"
        >
          {/* Main Links */}
          <ul className="flex items-center">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li
                  key={link.label}
                  className={`flex items-center ${
                    index !== 0 ? "border-l border-gray-200" : ""
                  }`}
                >
                  <a
                    href={link.href}
                    className={`px-4 py-1 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-dark hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}

            {/* Pages Dropdown */}
            <li className="relative border-l border-gray-200">
              <button
                type="button"
                onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                onBlur={() => setTimeout(() => setIsPagesDropdownOpen(false), 200)}
                className="px-4 py-1 text-sm font-medium text-dark hover:text-primary flex items-center gap-1.5 transition-colors duration-200 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isPagesDropdownOpen}
              >
                <span>Pages</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isPagesDropdownOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isPagesDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-dropdown border border-gray-100 py-2 z-50 animate-fadeIn">
                  <div className="grid grid-cols-1 divide-y divide-gray-50">
                    {pageDropdownLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="px-4 py-2 text-xs font-medium text-dark hover:text-primary hover:bg-primary-50/50 flex items-center justify-between transition-colors uppercase tracking-wider"
                      >
                        <span>{item.label}</span>
                        {item.isPro && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gray-200 text-gray-700">
                            Pro
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* Get Pro Link */}
            <li className="border-l border-gray-200">
              <a
                href="#pricing"
                className="px-4 py-1 text-sm font-bold text-dark hover:text-primary uppercase tracking-wider transition-colors duration-200 flex items-center gap-1"
              >
                <span>GET PRO</span>
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </a>
            </li>
          </ul>

          {/* Search Form */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex items-center"
            role="search"
          >
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-44 focus:w-60 transition-all duration-300 py-1.5 pl-3 pr-9 text-xs rounded-full bg-gray-100/70 border border-transparent focus:border-primary/40 focus:bg-white focus:outline-none text-dark placeholder:text-gray-400"
              aria-label="Search"
            />
            <button
              type="submit"
              className="absolute right-2.5 text-primary hover:text-dark transition-colors"
              aria-label="Submit search"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] sm:top-[85px] z-40 bg-white/95 backdrop-blur-md overflow-y-auto px-6 py-6 border-t border-gray-100 animate-fadeIn">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative mb-6">
            <input
              type="search"
              placeholder="Search services, doctors, articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 pl-4 pr-10 text-sm rounded-xl bg-gray-100 border border-transparent focus:border-primary focus:bg-white focus:outline-none text-dark"
            />
            <button
              type="submit"
              className="absolute right-3 top-3.5 text-primary"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-lg font-medium border-b border-gray-100 transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary font-semibold"
                    : "text-dark hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Dropdown Collapsible */}
            <div className="py-2 border-b border-gray-100">
              <button
                type="button"
                onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                className="w-full flex items-center justify-between text-lg font-medium text-dark hover:text-primary"
              >
                <span>Pages & Templates</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isPagesDropdownOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              {isPagesDropdownOpen && (
                <div className="grid grid-cols-2 gap-2 mt-3 pl-2 py-2">
                  {pageDropdownLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-1.5 text-sm text-gray hover:text-primary flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      {item.isPro && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gray-200 text-gray-700">
                          Pro
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-lg font-bold text-primary flex items-center gap-2"
            >
              <span>GET PRO TEMPLATE</span>
              <Sparkles className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Contact Shortcuts */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col gap-4 text-sm text-gray">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span>123 Arling, Miola, NY</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+4873849452" className="text-dark font-medium">
                (+487) 384 9452
              </a>
            </div>

            <a
              href="#book-appointment"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full mt-2 inline-flex items-center justify-center py-3 rounded-full bg-primary text-white font-semibold text-sm tracking-wider uppercase hover:bg-dark transition-colors shadow-md"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book An Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
