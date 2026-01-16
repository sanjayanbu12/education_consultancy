"use client"

import { Phone, Mail, GraduationCap, Users, Award, Clock, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen relative bg-white dark:bg-black overflow-x-hidden transition-colors duration-300">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E74D2]/10 via-[#0E74D2]/5 to-[#0E74D2]/8 dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1)_0%,transparent_50%)]"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,116,210,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,210,0.15)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

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
                <h1 className="text-4xl lg:text-6xl font-light text-[#1a1a1a] dark:text-gray-100 tracking-tight leading-[1.1]">
                  Navigate Your
                  <span className="block mt-2 font-normal bg-gradient-to-r from-[#0E74D2] to-[#0a5ba8] dark:from-zinc-400 dark:to-zinc-500 bg-clip-text text-transparent">
                    Academic Journey
                  </span>
                  <span className="block mt-2">With Precision</span>
                </h1>

                <p className="text-lg text-[#5a5a5a] dark:text-gray-400 leading-relaxed max-w-xl font-light">
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
                    <CheckCircle2 className="w-5 h-5 text-[#0E74D2] dark:text-blue-400 flex-shrink-0" />
                    <span className="text-[#3a3a3a] dark:text-gray-300 font-light">{feature}</span>
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
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-[#0E74D2] dark:text-blue-400 font-medium rounded-lg border-2 border-[#0E74D2]/20 dark:border-blue-500/30 hover:border-[#0E74D2] dark:hover:border-blue-400 hover:bg-[#0E74D2]/5 dark:hover:bg-blue-500/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Information</span>
                </a>
              </div>

            </div>

            {/* RIGHT VISUAL */}
            <div className="relative lg:pl-12">

              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <div className="relative h-[500px]">
                  <img
                    src="/happy-diverse-students-celebrating-graduation-with.jpg"
                    alt="Academic excellence"
                    className="w-full h-full object-cover"
                  />
                </div>


                {/* Bottom Info Card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-black/80 to-transparent">

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="font-semibold">Complimentary Advisory Services</div>
                    <div className="text-white/70 dark:text-white/80 text-sm">Expert guidance at no cost to families</div>
                  </div>
                </div>
              </div>


            </div>

          </div>
 <a
        href="https://wa.me/919578599785"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] hover:scale-105 transition-all duration-300 group animate-bounce-subtle"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline font-medium">Chat with us</span>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
      </a>
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