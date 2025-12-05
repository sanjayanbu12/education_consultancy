"use client"

import { Phone, Mail, Menu, X, GraduationCap, Clock, Users, Award } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0E74D2]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/images/3rd-ed-logo-final-removebg-preview.png"
                alt="AL-HUDA Logo"
                className="w-12 h-12 object-contain"
              />
              <div className="hidden sm:block">
                <div className="text-white font-bold text-lg">AL-HUDA</div>
                <div className="text-blue-200 text-xs">Educational Consultancy</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#courses" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Courses
              </a>
              <a href="#colleges" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Colleges
              </a>
              <a href="#contact" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Contact
              </a>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:9578599785" className="flex items-center gap-2 text-white text-sm">
                <Phone className="w-4 h-4" />
                9578599785
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-white text-[#0E74D2] rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0a1628] border-t border-white/10 p-4">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-white py-2">
                Services
              </a>
              <a href="#courses" className="text-white py-2">
                Courses
              </a>
              <a href="#colleges" className="text-white py-2">
                Colleges
              </a>
              <a href="#contact" className="text-white py-2">
                Contact
              </a>
              <a href="tel:9578599785" className="flex items-center gap-2 text-white py-2">
                <Phone className="w-4 h-4" /> 9578599785
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content - Asymmetric Split Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm">24/7 Admission Helpline Available</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Journey to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                  Academic Excellence
                </span>
                Starts Here
              </h1>
              <p className="text-lg text-blue-100/80 max-w-xl leading-relaxed">
                Expert guidance to help you discover the perfect course and institution that aligns with your academic
                ambitions, career goals, and financial circumstances.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:9578599785"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0E74D2] rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg shadow-white/20"
              >
                <Phone className="w-5 h-5" />
                Call: 9578599785
              </a>
              <a
                href="mailto:alhudaeducationalconsultant@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/30 hover:bg-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {[
                { value: "5000+", label: "Colleges", icon: <GraduationCap className="w-5 h-5" /> },
                { value: "200+", label: "Courses", icon: <Award className="w-5 h-5" /> },
                { value: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> },
                { value: "10K+", label: "Students", icon: <Users className="w-5 h-5" /> },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-200 mb-1">
                    {stat.icon}
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <div className="text-blue-200/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - 5 columns - Stacked Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative space-y-4">
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/happy-diverse-students-celebrating-graduation-with.jpg"
                  alt="Students celebrating graduation"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-semibold">Free Consulting & Admission Assistance</div>
                  <div className="text-white/70 text-sm">No Service Charges</div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white">FREE</div>
                  <div className="text-blue-200 text-sm">Career Counseling</div>
                </div>
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-white/90 text-sm">Guidance Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
