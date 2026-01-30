"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, GraduationCap, Building2, Info, Briefcase, MessageSquare, Mail, BookOpen, Award, Users, Target, TrendingUp, CheckCircle } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll for backdrop blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const megaMenuContent = {
    Courses: {
      title: "Explore 150+ Courses",
      description: "Find the perfect program for your career goals",
      stats: [
        { label: "Medical Programs", value: "35+" },
        { label: "Engineering Courses", value: "50+" },
        { label: "Management Programs", value: "13+" },
      ],
      features: [
        "NEET & JEE Guidance",
        "Career Path Planning",
        "Scholarship Assistance",
        "Expert Counseling",
      ],
      image: "/api/placeholder/400/300"
    },
    Colleges: {
      title: "5000+ Top Institutions",
      description: "Discover the best colleges across India",
      stats: [
        { label: "Government Colleges", value: "2000+" },
        { label: "Private Institutions", value: "3000+" },
        { label: "Partner Colleges", value: "500+" },
      ],
      features: [
        "Verified College Information",
        "Admission Process Support",
        "Campus Visit Assistance",
        "Placement Records",
      ],
      image: "/api/placeholder/400/300"
    },
    About: {
      title: "Your Success Partner",
      description: "15+ years of educational excellence",
      stats: [
        { label: "Students Helped", value: "10,000+" },
        { label: "Success Rate", value: "98%" },
        { label: "Expert Counselors", value: "50+" },
      ],
      features: [
        "100% Free Services",
        "24/7 Support Available",
        "Personalized Guidance",
        "End-to-End Assistance",
      ],
      image: "/api/placeholder/400/300"
    },
    Services: {
      title: "Comprehensive Support",
      description: "Everything you need for admission success",
      stats: [
        { label: "Services Offered", value: "15+" },
        { label: "Partner Institutions", value: "500+" },
        { label: "Satisfaction Rate", value: "100%" },
      ],
      features: [
        "Career Counseling",
        "Admission Guidance",
        "Document Assistance",
        "Scholarship Support",
      ],
      image: "/api/placeholder/400/300"
    },
  }

  const navItems = [
    { name: "Courses", href: "#courses" },
    { name: "Colleges", href: "#top-colleges" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#process-timeline" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setActiveDropdown(null)
  }

  const hasMegaMenu = (name: string) => name in megaMenuContent

  return (
    <>
      {/* Apple-style ultra-minimal header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-2xl border-b border-gray-200/20 dark:border-gray-800/20"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex items-center justify-between h-12">

            {/* Logo - Minimal */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity z-50">
              <img
                src="/images/alhuda.png"
                alt="AL-HUDA"
                className="h-12 w-auto object-cover object-center"
                style={{ objectPosition: 'center' }}
              />
              <div className="hidden sm:flex flex-col mt-3">

                <span className="text-sm font-semibold text-gray-900 dark:text-white hidden sm:inline">
                  AL-HUDA
                </span>
                <span className="text-apple-footnote font-normal text-gray-600 dark:text-gray-400 hidden sm:inline">
                  Educational Consultancy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Ultra Minimal */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  onMouseEnter={() => hasMegaMenu(item.name) && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    className="text-apple-footnote font-normal text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>

            {/* Right Side: Theme Toggle + CTA */}
            <div className="flex items-center gap-3 z-50">

              {/* Theme Toggle - Minimal */}
              <button
                onClick={() => mounted && setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
                disabled={!mounted}
              >
                {mounted && theme === "dark" ? (
                  <Sun className="w-4 h-4 text-gray-400" />
                ) : (
                  <Moon className="w-4 h-4 text-gray-600" />
                )}
              </button>

              {/* CTA Button - Desktop */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#contact')
                }}
                className="hidden md:inline-flex items-center px-4 py-1.5 bg-[#0071E3] hover:bg-[#0077ED] text-white text-apple-footnote font-semibold rounded-full transition-all duration-300 cursor-pointer"
              >
                Get Started
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width Mega Menu */}
        {activeDropdown && megaMenuContent[activeDropdown as keyof typeof megaMenuContent] && (
          <div
            className="absolute left-0 right-0 top-full bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-2xl"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-8">
              <div className="grid grid-cols-5 gap-8">
                {/* Left Side - Rich Content (3 columns) */}
                <div className="col-span-3 space-y-6">
                  <div>
                    <h3 className="text-apple-display-small font-semibold text-gray-900 dark:text-white mb-2">
                      {megaMenuContent[activeDropdown as keyof typeof megaMenuContent].title}
                    </h3>
                    <p className="text-apple-callout text-gray-600 dark:text-gray-400">
                      {megaMenuContent[activeDropdown as keyof typeof megaMenuContent].description}
                    </p>
                  </div>

                  {/* Stats Grid - Compact */}
                  <div className="grid grid-cols-3 gap-4">
                    {megaMenuContent[activeDropdown as keyof typeof megaMenuContent].stats.map((stat, index) => (
                      <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div className="text-apple-title-1 font-semibold text-[#0071E3] dark:text-blue-400 mb-0.5">
                          {stat.value}
                        </div>
                        <div className="text-[10px] text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features List - Compact 2 columns */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {megaMenuContent[activeDropdown as keyof typeof megaMenuContent].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0071E3] dark:text-blue-400 flex-shrink-0" />
                        <span className="text-apple-footnote text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button - Compact */}
                  <a
                    href={navItems.find(item => item.name === activeDropdown)?.href || "#"}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(navItems.find(item => item.name === activeDropdown)?.href || "#")
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0071E3] hover:bg-[#0077ED] text-white text-apple-callout font-semibold rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    Explore {activeDropdown}
                    <TrendingUp className="w-4 h-4" />
                  </a>
                </div>

                {/* Right Side - Image (2 columns) */}
                <div className="col-span-2">
                  <div className="aspect-[16/10] bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={
                        activeDropdown === "Courses" ? "/courses_mega_menu_1768571159569.png" :
                          activeDropdown === "Colleges" ? "/colleges_mega_menu_1768571179987.png" :
                            activeDropdown === "About" ? "/about_mega_menu_1768571207166.png" :
                              activeDropdown === "Services" ? "/services_mega_menu_1768571237885.png" :
                                ""
                      }
                      alt={`${activeDropdown} visual`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white dark:bg-black transition-all duration-300 md:hidden ${mobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                setMobileMenuOpen(false)
                setTimeout(() => scrollToSection(item.href), 300)
              }}
              className="text-apple-display-medium font-semibold text-gray-900 dark:text-white hover:text-[#0071E3] dark:hover:text-[#0077ED] transition-colors cursor-pointer"
              style={{
                animation: mobileMenuOpen
                  ? `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              setMobileMenuOpen(false)
              setTimeout(() => scrollToSection('#contact'), 300)
            }}
            className="mt-8 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white text-apple-body font-semibold rounded-full transition-all duration-300 cursor-pointer"
            style={{
              animation: mobileMenuOpen
                ? `fadeInUp 0.5s ease-out 0.4s both`
                : "none",
            }}
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}