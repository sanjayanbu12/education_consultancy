"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react'

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full bg-[#1a365d] text-white">
      {/* Top Wave */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="#1a365d"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd_ED_logo_final-removebg-preview-EmZWbBGyrR3ayEYVNsJmqvnvgjhtt3.png"
                alt="AL-HUDA Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">AL-HUDA</h3>
                <p className="text-white/70 text-sm">Educational Consultancy</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Empowering students to achieve their academic dreams through expert guidance and personalized support.
              Free consulting services available 24/7.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "#", label: "Facebook" },
                { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
                { icon: <ArrowUp className="w-4 h-4" />, href: "#", label: "ArrowUp" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#0E74D2] transition-colors border border-white/10"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#" },
                { name: "Our Services", href: "#services" },
                { name: "Courses", href: "#courses" },
                { name: "Partner Colleges", href: "#colleges" },
                { name: "FAQs", href: "#faq" },
                { name: "Contact Us", href: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#60a5fa] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#0E74D2] rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Popular Courses</h4>
            <ul className="space-y-3">
              {[
                "Medical / MBBS",
                "Engineering",
                "Nursing & Paramedical",
                "MBA / Management",
                "Arts & Science",
                "Law",
                "Aviation & Marine",
                "Agriculture",
              ].map((course, i) => (
                <li key={i}>
                  <a
                    href="#courses"
                    className="text-white/70 hover:text-[#60a5fa] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-3 h-3 bg-[#0E74D2] rounded-full"></span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9578599785"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl text-white hover:bg-[#0E74D2]/20 transition-colors group border border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0E74D2] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white/70">24/7 Helpline</div>
                    <div className="font-semibold">+91 9578599785</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:alhudaeducationalconsultant@gmail.com"
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl text-white hover:bg-[#0E74D2]/20 transition-colors group border border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0E74D2] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white/70">Email Us</div>
                    <div className="text-sm break-all">alhudaeducationalconsultant@gmail.com</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-[#0E74D2] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/70">Location</div>
                  <div className="text-sm">Coimbatore, Tamil Nadu, India</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              &copy; 2025 AL-HUDA Educational Consultancy. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Free Consulting
                </span>
                <span>|</span>
                <span>No Service Charges</span>
                <span>|</span>
                <span>24/7 Support</span>
              </div>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-xl bg-[#0E74D2] flex items-center justify-center hover:bg-[#0a5ba8] transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
