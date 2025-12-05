"use client"

import type React from "react"
import { Phone, Mail, GraduationCap, Users, Award, Clock } from "lucide-react"

// Reusable Badge Component
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-4 py-2 bg-white shadow-[0px_0px_0px_4px_rgba(14,116,210,0.08)] overflow-hidden rounded-full flex justify-start items-center gap-2 border border-[rgba(14,116,210,0.15)]">
      <div className="w-4 h-4 flex items-center justify-center text-[#0E74D2]">
        {icon}
      </div>
      <div className="text-center flex justify-center flex-col text-[#0E74D2] text-xs font-medium font-sans">
        {text}
      </div>
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen relative bg-gradient-to-b from-[#f0f7ff] to-white overflow-x-hidden flex flex-col items-center">

      {/* Wrapper Container */}
      <div className="relative flex flex-col items-center w-full">

        {/* Main container */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1200px] relative flex flex-col items-start">

          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(14,116,210,0.08)]"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(14,116,210,0.08)]"></div>

          <div className="self-stretch pt-[9px] flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 relative z-10">

            {/* ----------------- NAVIGATION ----------------- */}
            <div className="w-full h-12 sm:h-14 md:h-16 lg:h-20 absolute left-0 top-0 flex justify-center items-center z-20 px-4 sm:px-6 md:px-8 lg:px-0">

              <div className="w-full h-0 absolute left-0 top-10 border-t border-[rgba(14,116,210,0.1)]"></div>

              <div className="w-full max-w-[1100px] h-12 sm:h-14 py-2 px-4 bg-white/90 backdrop-blur-sm shadow-[0px_2px_8px_rgba(14,116,210,0.08)] rounded-full flex justify-between items-center border border-[rgba(14,116,210,0.1)]">

                {/* Logo */}
                <div className="flex items-center gap-3">
                  <img
                    src="/images/3rd-ed-logo-final-removebg-preview.png"
                    alt="AL-HUDA Educational Consultancy Logo"
                    className="w-10 h-10 object-contain"
                  />
                  <div className="hidden sm:flex flex-col">
                    <span className="text-[#0E74D2] text-sm sm:text-base font-bold leading-tight">AL-HUDA</span>
                    <span className="text-[#1a365d] text-[10px] sm:text-xs font-medium leading-tight">
                      Educational Consultancy
                    </span>
                  </div>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-6">
                  <a href="#services" className="text-[#1a365d] text-sm font-medium hover:text-[#0E74D2]">Services</a>
                  <a href="#courses" className="text-[#1a365d] text-sm font-medium hover:text-[#0E74D2]">Courses</a>
                  <a href="#colleges" className="text-[#1a365d] text-sm font-medium hover:text-[#0E74D2]">Colleges</a>
                  <a href="#contact" className="text-[#1a365d] text-sm font-medium hover:text-[#0E74D2]">Contact</a>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <a href="tel:9578599785" className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#0E74D2]/10 rounded-full">
                    <Phone className="w-3.5 h-3.5 text-[#0E74D2]" />
                    <span className="text-[#0E74D2] text-xs font-medium">9578599785</span>
                  </a>
                  <a href="#contact" className="px-4 py-2 bg-[#0E74D2] text-white text-xs font-medium rounded-full hover:bg-[#0a5ba8]">
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            {/* ----------------- HERO SECTION ----------------- */}
            <div className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-8 sm:pb-12 md:pb-16 w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-0">

              <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                {/* LEFT SIDE */}
                <div className="lg:col-span-7 flex flex-col items-start space-y-8">

                  {/* <Badge icon={<GraduationCap className="w-4 h-4" />} text="Free Consulting & Admission Assistance" /> */}

                  {/* UPDATED HERO HEADING */}
                  <h1 className="text-[#1a365d] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif">
                    Shape Your Future With the <br />
                    <span className="text-[#0E74D2]">Right College & the Right Course</span> <br />
                  </h1>

                  {/* UPDATED HERO SUBTEXT */}
                  <p className="text-[#4a5568] text-base sm:text-lg leading-relaxed max-w-[550px]">
                    We guide students toward the right course and college with free, personalized
                    counseling ensuring your academic path matches your goals and financial needs.
                  </p>


                  {/* OPTIONAL SUPPORTING LINE */}
                  <p className="text-[#0E74D2] font-medium text-sm sm:text-base">
                    Your Journey to Academic Excellence Begins With the Right Guidance.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:9578599785"
                      className="flex items-center gap-2 h-12 px-8 bg-[#0E74D2] text-white rounded-full font-medium text-sm shadow-lg hover:bg-[#0a5ba8] transition-all">
                      <Phone className="w-4 h-4" /> Call Now: 9578599785
                    </a>

                    <a href="mailto:alhudaeducationalconsultant@gmail.com"
                      className="flex items-center gap-2 h-12 px-8 bg-white text-[#0E74D2] rounded-full font-medium text-sm border-2 border-[#0E74D2] hover:bg-[#0E74D2]/5">
                      <Mail className="w-4 h-4" /> Email Us
                    </a>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#0E74D2]/10 w-full">
                    {[
                      { value: "5000+", label: "Colleges", icon: <GraduationCap className="w-5 h-5" /> },
                      { value: "200+", label: "Courses", icon: <Award className="w-5 h-5" /> },
                      { value: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> },
                      { value: "10K+", label: "Students", icon: <Users className="w-5 h-5" /> },
                    ].map((stat, i) => (
                      <div key={i} className="text-left">
                        <div className="flex items-center gap-2 text-[#0E74D2] font-bold text-xl">
                          {stat.icon} {stat.value}
                        </div>
                        <div className="text-[#4a5568] text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ----------------- RIGHT SIDE IMAGES ----------------- */}
                <div className="lg:col-span-5 space-y-4">

                  {/* Main Image Card */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src="/happy-diverse-students-celebrating-graduation-with.jpg"
                      alt="Students celebrating graduation"
                      className="w-full h-[330px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="font-semibold">Free Consulting & Admission Assistance</div>
                      <div className="text-white/70 text-sm">No Service Charges</div>
                    </div>
                  </div>

                  {/* Floating Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                      <div className="text-3xl font-bold text-[#0E74D2]">FREE</div>
                      <div className="text-gray-700 text-sm">Career Counseling</div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-4 text-white">
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-white/90 text-sm">Guidance Support</div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  )
}