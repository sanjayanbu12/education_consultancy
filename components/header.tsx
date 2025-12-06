"use client"

import { Phone } from "lucide-react"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  return (
    <div className="w-full h-12 sm:h-14 md:h-16 lg:h-20 fixed left-0 top-0 flex justify-center items-center z-50 px-4 sm:px-6 md:px-8 lg:px-0">

      {/* <div className="w-full h-0 absolute left-0 top-10 border-t border-[rgba(14,116,210,0.1)]"></div> */}

      <div className="w-full max-w-[1100px] h-12 sm:h-14 py-2 px-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-[0px_2px_8px_rgba(14,116,210,0.08)] dark:shadow-[0px_2px_8px_rgba(0,0,0,0.2)] rounded-full flex justify-between items-center border border-[rgba(14,116,210,0.1)] dark:border-gray-700">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/3rd-ed-logo-final-removebg-preview.png"
            alt="AL-HUDA Educational Consultancy Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-[#0E74D2] text-sm sm:text-base font-bold leading-tight">AL-HUDA</span>
            <span className="text-[#1a365d] dark:text-gray-300 text-[10px] sm:text-xs font-medium leading-tight">
              Educational Consultancy
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-[#1a365d] dark:text-gray-300 text-sm font-medium hover:text-[#0E74D2] dark:hover:text-blue-400 transition-colors">
            Services
          </a>
          <a href="#courses" className="text-[#1a365d] dark:text-gray-300 text-sm font-medium hover:text-[#0E74D2] dark:hover:text-blue-400 transition-colors">
            Courses
          </a>
          <a href="#colleges" className="text-[#1a365d] dark:text-gray-300 text-sm font-medium hover:text-[#0E74D2] dark:hover:text-blue-400 transition-colors">
            Colleges
          </a>
          <a href="#contact" className="text-[#1a365d] dark:text-gray-300 text-sm font-medium hover:text-[#0E74D2] dark:hover:text-blue-400 transition-colors">
            Contact
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <a
            href="tel:9578599785"
            title="Call: 9578599785"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#0E74D2]/10 dark:bg-blue-500/20 rounded-full hover:bg-[#0E74D2]/20 dark:hover:bg-blue-500/30 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#0E74D2] dark:text-blue-400" />
            <span className="text-[#0E74D2] dark:text-blue-400 text-xs font-medium">Contact</span>
          </a>

          <a
            href="#contact"
            className="px-4 py-2 bg-[#0E74D2] text-white text-xs font-medium rounded-full hover:bg-[#0a5ba8] transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}