"use client"

import { Phone, Mail, GraduationCap, Users, Award, Clock, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen relative bg-white dark:bg-black overflow-x-hidden transition-colors duration-300">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E74D2]/4 via-[#0E74D2]/2 to-[#0E74D2]/3 dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.06)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.04)_0%,transparent_50%)]"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,116,210,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,210,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative">

        {/* Navigation Spacer */}
        <div className="h-14"></div>

        {/* Main Hero Container */}
        <div className="w-full mx-auto px-10 lg:px-20 py-16 lg:py-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-8">

              {/* Main Headline */}
              <div className="space-y-5">
                <h1 className="text-apple-display-medium lg:text-apple-display-large text-[#1a1a1a] dark:text-gray-100">
                  Navigate Your Academic Journey
                  <span className="block mt-2 bg-gradient-to-r from-[#0E74D2] to-[#0a5ba8] dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                    Expert Educational Guidance
                  </span>
                  <span className="block mt-2">That's Completely Free</span>
                </h1>

                <p className="text-apple-body text-[#5a5a5a] dark:text-gray-400">
                  AL Huda Educational Consultancy is your trusted partner in navigating the complex world of higher education.
                  With over 15 years of experience and partnerships with 5,000+ premier institutions across India,
                  we provide personalized guidance to help you discover the perfect course and institution that aligns
                  with your goals completely free of charge.
                </p>

              </div>

              {/* Key Features */}
              <div className="space-y-3">
                {[
                  { text: "Free personalized career counseling & course selection", highlight: true },
                  { text: "Expert guidance for admissions to 5,000+ top institutions", highlight: false },
                  { text: "Comprehensive scholarship & financial aid assistance", highlight: false },
                  { text: "End-to-end support from application to enrollment", highlight: false },
                  { text: "24/7 availability with zero service charges", highlight: true }
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${feature.highlight ? 'text-green-500 dark:text-green-400' : 'text-[#0E74D2] dark:text-blue-400'}`} />
                    <span className={`text-apple-body ${feature.highlight ? 'text-[#2a2a2a] dark:text-gray-200 font-semibold' : 'text-[#3a3a3a] dark:text-gray-300'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:9578599785"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0E74D2] text-white text-apple-body font-semibold rounded-lg hover:bg-[#0a5ba8] transition-all duration-300 shadow-[0_4px_20px_rgba(14,116,210,0.25)] hover:shadow-[0_8px_30px_rgba(14,116,210,0.35)] hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="mailto:alhudaeducationalconsultant@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-[#0E74D2] dark:text-blue-400 text-apple-body font-semibold rounded-lg border-2 border-[#0E74D2]/20 dark:border-blue-500/30 hover:border-[#0E74D2] dark:hover:border-blue-400 hover:bg-[#0E74D2]/5 dark:hover:bg-blue-500/10 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get Course Details</span>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <div>
                  <div className="text-apple-title-1 text-[#0E74D2] dark:text-blue-400">5,000+</div>
                  <div className="text-apple-footnote text-[#6a6a6a] dark:text-gray-500 mt-1">Partner Colleges</div>
                </div>
                <div>
                  <div className="text-apple-title-1 text-[#0E74D2] dark:text-blue-400">200+</div>
                  <div className="text-apple-footnote text-[#6a6a6a] dark:text-gray-500 mt-1">Course Options</div>
                </div>
                <div>
                  <div className="text-apple-title-1 text-[#0E74D2] dark:text-blue-400">100%</div>
                  <div className="text-apple-footnote text-[#6a6a6a] dark:text-gray-500 mt-1">Free Service</div>
                </div>
              </div>

            </div>

            {/* RIGHT VISUAL */}
            <div className="relative lg:pl-12">

              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <div className="relative h-[500px]">
                  <img
                    src="/Sanjay2.jpg"
                    alt="Professional educational consultancy - Students achieving academic success"
                    className="w-full h-full object-cover"
                  />
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
            <span className="hidden sm:inline text-apple-body font-semibold">Chat with us</span>
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
                  <div className="text-apple-display-small text-[#1a1a1a] mb-1">{stat.value}</div>
                  <div className="text-apple-callout font-semibold text-[#3a3a3a]">{stat.label}</div>
                  <div className="text-apple-footnote text-[#7a7a7a] mt-0.5">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div> */}

        </div>

      </div>

    </div>
  )
}