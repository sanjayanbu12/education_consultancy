"use client"

import { Phone, Mail, GraduationCap, Users, Award, Clock, ArrowRight, CheckCircle2 } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen relative bg-white overflow-x-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,116,210,0.05)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(14,116,210,0.03)_0%,transparent_50%)]"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,116,210,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,210,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative">

        {/* Navigation Spacer */}
        <div className="h-20"></div>

        {/* Main Hero Container */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-10">


              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-light text-[#1a1a1a] tracking-tight leading-[1.1]">
                  Navigate Your
                  <span className="block mt-2 font-normal bg-gradient-to-r from-[#0E74D2] to-[#0a5ba8] bg-clip-text text-transparent">
                    Academic Journey
                  </span>
                  <span className="block mt-2">With Precision</span>
                </h1>

                <p className="text-lg text-[#5a5a5a] leading-relaxed max-w-xl font-light">
                  Al Huda Educational Consultants delivers strategic guidance for discerning students and families,
                  connecting aspirations with premier institutions through our comprehensive advisory framework.
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                {[
                  "Personalized institutional matching",
                  "Strategic program selection",
                  "End-to-end admission support"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0E74D2] flex-shrink-0" />
                    <span className="text-[#3a3a3a] font-light">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:9578599785"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0E74D2] text-white font-medium rounded-lg hover:bg-[#0a5ba8] transition-all duration-300 shadow-[0_4px_20px_rgba(14,116,210,0.25)] hover:shadow-[0_8px_30px_rgba(14,116,210,0.35)] hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="mailto:alhudaeducationalconsultant@gmail.com"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-[#0E74D2] font-medium rounded-lg border-2 border-[#0E74D2]/20 hover:border-[#0E74D2] hover:bg-[#0E74D2]/5 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Information</span>
                </a>
              </div>

            </div>

            {/* RIGHT VISUAL */}
            <div className="relative lg:pl-12">

              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <div className="relative h-[500px]">
                  <img
                    src="/happy-diverse-students-celebrating-graduation-with.jpg"
                    alt="Academic excellence"
                    className="w-full h-full object-cover"
                  />
                </div>


                {/* Bottom Info Card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="font-semibold">Complimentary Advisory Services</div>
                    <div className="text-white/70 text-sm">Expert guidance at no cost to families</div>
                  </div>
                </div>
              </div>


            </div>

          </div>

          {/* Stats Bar */}
          {/* <div className="mt-24 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <GraduationCap className="w-6 h-6" />, value: "5,000+", label: "Partner Institutions", sublabel: "Worldwide" },
                { icon: <Award className="w-6 h-6" />, value: "200+", label: "Academic Disciplines", sublabel: "Available" },
                { icon: <Users className="w-6 h-6" />, value: "10,000+", label: "Students Placed", sublabel: "Since 2009" },
                { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Support Available", sublabel: "Year-round" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center lg:justify-start w-12 h-12 bg-[#0E74D2]/5 rounded-lg mb-4 text-[#0E74D2]">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#1a1a1a] mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-[#3a3a3a]">{stat.label}</div>
                  <div className="text-xs text-[#7a7a7a] mt-0.5">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div> */}

        </div>

      </div>

    </div>
  )
}