"use client"

import { Phone, Mail, GraduationCap, Users, Award, Clock } from "lucide-react"

export default function HeroSection() {
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

            {/* ----------------- HERO SECTION ----------------- */}
            <div className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-8 sm:pb-12 md:pb-16 w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-0">

              <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                {/* LEFT SIDE */}
                <div className="lg:col-span-7 flex flex-col items-start space-y-8">

                  {/* HERO HEADING */}
                  <h1 className="text-[#1a365d] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] font-serif">
                    Shape Your Future With the <br />
                    <span className="text-[#0E74D2]">Right College & the Right Course</span>
                  </h1>

                  {/* HERO SUBTEXT */}
                  <p className="text-[#4a5568] text-base sm:text-lg leading-relaxed max-w-[550px]">
                    We guide students toward the right course and college with free, personalized
                    counseling ensuring your academic path matches your goals and financial needs.
                  </p>

                  {/* SUPPORTING LINE */}
                  <p className="text-[#0E74D2] font-medium text-sm sm:text-base">
                    Your Journey to Academic Excellence Begins With the Right Guidance.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:9578599785"
                      title="Call: 9578599785"
                      className="flex items-center gap-2 h-12 px-8 bg-[#0E74D2] text-white rounded-full font-medium text-sm shadow-lg hover:bg-[#0a5ba8] transition-all"
                    >          
                      <Phone className="w-4 h-4" /> Call Now
                    </a>

                    <a 
                      href="mailto:alhudaeducationalconsultant@gmail.com"
                      className="flex items-center gap-2 h-12 px-8 bg-white text-[#0E74D2] rounded-full font-medium text-sm border-2 border-[#0E74D2] hover:bg-[#0E74D2]/5 transition-all"
                    >
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