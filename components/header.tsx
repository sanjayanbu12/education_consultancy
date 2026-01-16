"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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

  const navItems = [
    { name: "Courses", href: "#courses" },
    { name: "Colleges", href: "#top-colleges" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* Apple-style minimal header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img
                src="/images/3rd-ed-logo-final-removebg-preview.png"
                alt="AL-HUDA"
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold text-gray-900 dark:text-white hidden sm:block">
                AL-HUDA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right Side: Theme Toggle + CTA */}
            <div className="flex items-center gap-4">

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-gray-300" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-700" />
                  )}
                </button>
              )}

              {/* CTA Button - Desktop */}
              <Link
                href="#contact"
                className="hidden md:inline-flex items-center px-5 py-2 bg-[#0071E3] hover:bg-[#0077ED] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
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
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-bold text-gray-900 dark:text-white hover:text-[#0071E3] dark:hover:text-[#0077ED] transition-colors"
              style={{
                animation: mobileMenuOpen
                  ? `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              {item.name}
            </a>
          ))}

          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 px-8 py-4 bg-[#0071E3] hover:bg-[#0077ED] text-white text-lg font-semibold rounded-full transition-all duration-300"
            style={{
              animation: mobileMenuOpen
                ? `fadeInUp 0.5s ease-out 0.4s both`
                : "none",
            }}
          >
            Get Started
          </Link>
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