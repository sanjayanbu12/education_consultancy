"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react'

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Map Section */}
      <div id="map" className="w-full bg-white dark:bg-black py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-2">Visit Our Office</h3>
            <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6]">Coimbatore, Tamil Nadu, India</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125411.95034123933!2d76.95576842167968!3d11.016844499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1706094000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>

      <footer className="w-full bg-[#f5f5f7] dark:bg-[#1d1d1f] transition-colors duration-300">

        {/* Main Footer */}
        <div className="max-w-[980px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3 tracking-wide">SERVICES</h4>
              <ul className="space-y-2.5">
                {[
                  "Course Selection",
                  "Admission Guidance",
                  "Career Counseling",
                  "Scholarship Assistance",
                  "Educational Loans",
                  "Placement Support",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#services"
                      className="text-xs text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:underline transition-colors leading-relaxed"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Medical Courses */}
            <div>
              <h4 className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3 tracking-wide">MEDICAL</h4>
              <ul className="space-y-2.5">
                {[
                  "MBBS",
                  "BDS",
                  "BAMS",
                  "BHMS",
                  "Nursing",
                  "Pharmacy",
                  "Physiotherapy",
                  "Paramedical",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#courses"
                      className="text-xs text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:underline transition-colors leading-relaxed"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering */}
            <div>
              <h4 className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3 tracking-wide">ENGINEERING</h4>
              <ul className="space-y-2.5">
                {[
                  "Computer Science",
                  "Mechanical",
                  "Civil Engineering",
                  "Electrical",
                  "Electronics",
                  "Aerospace",
                  "Automobile",
                  "Chemical",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#courses"
                      className="text-xs text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:underline transition-colors leading-relaxed"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Management & Others */}
            <div>
              <h4 className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3 tracking-wide">MANAGEMENT</h4>
              <ul className="space-y-2.5">
                {[
                  "MBA",
                  "BBA",
                  "B.Com",
                  "M.Com",
                  "Hotel Management",
                  "Event Management",
                  "Finance",
                  "Marketing",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#courses"
                      className="text-xs text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:underline transition-colors leading-relaxed"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About AL-HUDA */}
            <div>
              <h4 className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3 tracking-wide">ABOUT AL-HUDA</h4>
              <ul className="space-y-2.5">
                {[
                  { name: "Our Story", href: "#about" },
                  { name: "Why Choose Us", href: "#about" },
                  { name: "Partner Colleges", href: "#colleges" },
                  { name: "Success Stories", href: "#testimonials" },
                  { name: "FAQs", href: "#faq" },
                  { name: "Contact Us", href: "#contact" },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-xs text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:underline transition-colors leading-relaxed"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#d2d2d7] dark:border-[#424245] pt-4 pb-2">

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-xs text-[#6e6e73] dark:text-[#a1a1a6]">
              <span className="text-xs">More ways to connect:</span>
              <a href="tel:9578599785" className="text-xs hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:underline transition-colors">
                Call +91 9578599785
              </a>
              <span className="hidden sm:inline text-xs text-[#d2d2d7] dark:text-[#424245]">|</span>
              <a href="mailto:alhudaeducationalconsultant@gmail.com" className="text-xs hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:underline transition-colors">
                Email Us
              </a>
              <span className="hidden sm:inline text-xs text-[#d2d2d7] dark:text-[#424245]">|</span>
              <a href="#contact" className="text-xs hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:underline transition-colors">
                Visit Our Office
              </a>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-[#d2d2d7] dark:border-[#424245] pt-4">

              {/* Left Side */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <p className="text-xs text-[#6e6e73] dark:text-[#a1a1a6]">
                  Copyright © 2025 AL-HUDA Educational Consultancy. All rights reserved.
                </p>
                <div className="flex items-center gap-3 text-xs">
                  <a href="#" className="text-xs text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:underline transition-colors">
                    Privacy Policy
                  </a>
                  <span className="text-xs text-[#d2d2d7] dark:text-[#424245]">|</span>
                  <a href="#" className="text-xs text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:underline transition-colors">
                    Terms of Use
                  </a>
                  <span className="text-xs text-[#d2d2d7] dark:text-[#424245]">|</span>
                  <a href="#map" className="text-xs text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:underline transition-colors">
                    Sitemap
                  </a>
                </div>
              </div>

              {/* Right Side - Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-xs text-[#0071E3] dark:text-[#2997ff] hover:underline transition-colors group"
                aria-label="Scroll to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Region */}
            <div className="pt-3 text-xs text-[#6e6e73] dark:text-[#a1a1a6]">
              India
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
