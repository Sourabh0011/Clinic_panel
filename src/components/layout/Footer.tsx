import React from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Heart,
  Clock,
  ArrowRight,
} from "lucide-react";

interface ScheduleItem {
  days: string;
  hours: string;
  isEmergency?: boolean;
}

const scheduleData: ScheduleItem[] = [
  { days: "Monday - Thursday", hours: "8:00 am - 6:00 pm" },
  { days: "Friday - Saturday", hours: "10:00 am - 4:00 pm" },
  { days: "Sunday", hours: "Emergency only", isEmergency: true },
  { days: "Personal", hours: "7:00 pm - 9:00 pm" },
];

const quickLinks = [
  { label: "Home", href: "#intro" },
  { label: "About", href: "#about-us" },
  { label: "Services", href: "#our-services" },
  { label: "Booking", href: "#book-appointment" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "Our Team", href: "#our-team" },
  { label: "Faqs", href: "#faqs" },
  { label: "Department", href: "#department" },
  { label: "Blog", href: "#latest-blog" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "Youtube" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#fcfdfd] border-t border-gray-100 font-poppins pt-16 sm:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Col 1: About & Info (5 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 group mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tight text-dark">
                    INSOVE<span className="text-primary">.</span>
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-cadet -mt-1 font-medium">
                    Medical Healthcare
                  </span>
                </div>
              </Link>

              <p className="text-gray text-sm leading-relaxed mb-6">
                Elit adipi massa diam in dignissim. Sagittis pulvinar ut dis
                venenatis nunc nunc. Providing world-class healthcare tailored to your family&apos;s wellness.
              </p>

              <div className="space-y-3 text-sm text-dark/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>123 Arling, Miola, NY</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:Info@yourinfo.com"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Info@yourinfo.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="tel:+4873849452"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    (+487) 384 9452
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="text-xs uppercase tracking-wider font-semibold text-gray mb-3">
                Follow Us
              </h5>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (4 cols on lg) */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold text-dark mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-primary">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-gray">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Opening Hours (4 cols on lg) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-dark relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-primary">
                Opening Hours
              </h4>
            </div>

            <div className="divide-y divide-gray-200/80 border-t border-b border-gray-200/80">
              {scheduleData.map((item) => (
                <div
                  key={item.days}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="font-normal text-dark">{item.days}</span>
                  <span
                    className={`font-medium ${
                      item.isEmergency
                        ? "text-rose-500 font-semibold"
                        : "text-primary"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary-200/60 border border-primary/20 flex items-center justify-between">
              <div>
                <p className="text-xs text-dark/70 font-medium">Need immediate consultation?</p>
                <p className="text-sm font-bold text-dark">(+487) 384 9452</p>
              </div>
              <a
                href="#book-appointment"
                className="px-3.5 py-1.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-dark transition-colors uppercase tracking-wider"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray">
          <p>© {new Date().getFullYear()} Insove - All rights reserved</p>
          <p className="flex items-center gap-1">
            <span>Free HTML Template migrated to Next.js by</span>
            <span className="font-semibold text-dark hover:text-primary transition-colors">
              TemplatesJungle
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
