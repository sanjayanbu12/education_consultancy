"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Search, Globe, User, Phone, Moon, Sun } from "lucide-react"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

export default function Header() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openLanguage, setOpenLanguage] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("IN - EN")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('nav') && !target.closest('button')) {
        setOpenDropdown(null)
      }
    }

    if (openDropdown) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [openDropdown])

  // Hide header on course and course-info pages
  // if (pathname?.startsWith('/course/') || pathname?.startsWith('/course-info/')) {
  //   return null
  // }

  const menuItems = [
    {
      label: "Services",
      items: [
        { name: "All Services", href: "#services" },
        // { name: "Study Abroad", href: "#services" },
        // { name: "Visa Assistance", href: "#services" },
        // { name: "Career Counseling", href: "#services" }
      ]
    },
    {
      label: "Courses",
      items: [
        { name: "Course Catalog", href: "#courses" },
        // { name: "Medical & Paramedical", href: "/course/medical" },
        // { name: "Engineering", href: "/course/engineering" },
        // { name: "Commerce & Management", href: "/course/commerce" }
      ]
    },
    {
      label: "Colleges",
      items: [
        { name: "Top Colleges", href: "#top-colleges" },
        { name: "Partner Colleges", href: "#colleges" },
        // { name: "Top Institutions", href: "#colleges" },
        // { name: "College Details", href: "#colleges" }
      ]
    },
    {
      label: "Contact",
      items: [
        { name: "Contact Us", href: "#contact" },
        { name: "Call: 9578599785", href: "tel:9578599785" },
        // { name: "Email Us", href: "mailto:alhudaeducationalconsultant@gmail.com" },
        // { name: "Get Started", href: "#contact" }
      ]
    }
  ]

  const languages = [
    { code: "IN - EN", name: "India - English" },
    { code: "IN - HI", name: "India - Hindi" },
    { code: "IN - TA", name: "India - Tamil" },
    { code: "IN - TE", name: "India - Telugu" },
    { code: "US - EN", name: "United States - English" },
    { code: "UK - EN", name: "United Kingdom - English" }
  ]

  return (
    <header className="w-full fixed left-0 top-0 z-50 bg-white dark:bg-[#000000] border-b border-gray-200 dark:border-gray-800">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-[50px]">

          {/* Left Side: Logo + Navigation */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <img
                src="/images/3rd-ed-logo-final-removebg-preview.png"
                alt="AL-HUDA Educational Consultancy Logo"
                className="w-7 h-7 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-gray-900 dark:text-white text-sm font-bold leading-tight">AL-HUDA</span>
              </div>
            </a>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((menu, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <button
                    onClick={() => setOpenDropdown(openDropdown === menu.label ? null : menu.label)}
                    className="flex items-center gap-1 px-3 py-3 text-gray-900 dark:text-white text-sm font-normal transition-all relative group"
                  >
                    <span className="relative">
                      {menu.label}
                      {/* Blue underline on hover */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0E74D2] group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === menu.label ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === menu.label && (
                    <div className="absolute top-full left-0 mt-0 w-52 bg-white dark:bg-[#1a1a1a] shadow-lg dark:shadow-gray-900/50 rounded-sm overflow-hidden z-50 border border-gray-200 dark:border-gray-700">
                      {menu.items.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2.5 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Side Utilities */}
          <div className="flex items-center gap-3">


            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
                aria-label="Toggle theme"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            )}

            {/* Contact Button - Mobile Visible */}
            <a
              href="tel:9578599785"
              className="flex md:hidden items-center gap-2 px-3 py-1.5 bg-[#0E74D2] text-white rounded-full hover:bg-[#0a5ba8] transition-colors"
              aria-label="Call Us"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* User Profile */}
            {/* <button
              className="hidden md:block p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="User Profile"
            >
              <User className="w-4 h-4" />
            </button> */}

            {/* Contact Button */}
            <a
              href="tel:9578599785"
              title="Call: 9578599785"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-1.5 bg-[#0E74D2]/10 dark:bg-white/5 text-[#0E74D2] dark:text-white/80 text-sm font-semibold rounded hover:bg-[#0E74D2]/20 dark:hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Contact
            </a>

            {/* Get Started Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-1.5 bg-[#0E74D2] text-white text-sm font-semibold rounded hover:bg-[#0a5ba8] transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}