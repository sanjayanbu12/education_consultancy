"use client"

import { Shield, Clock, Award, Users, Target, Sparkles } from "lucide-react"

const reasons = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "100% Free Services",
    description: "No hidden charges or service fees. All our consultation and guidance services are completely free.",
    stat: "0",
    statLabel: "Service Charges",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your educational queries and admission concerns.",
    stat: "24/7",
    statLabel: "Availability",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Expert Counselors",
    description: "Experienced professionals who understand the education landscape and career opportunities.",
    stat: "15+",
    statLabel: "Years Experience",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Personalized Guidance",
    description: "Tailored advice based on your academic profile, interests, and financial circumstances.",
    stat: "10K+",
    statLabel: "Students Helped",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Career-Focused",
    description: "We consider your career objectives while helping you choose the right course and institution.",
    stat: "200+",
    statLabel: "Career Paths",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "End-to-End Support",
    description: "From course selection to admission to placement - we're with you at every step.",
    stat: "100%",
    statLabel: "Support",
  },
]

export default function WhyUsSection() {
  return (
    <section id="about" className="w-full py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E74D2]/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#0E74D2]" />
              <span className="text-[#0E74D2] text-apple-callout font-medium">Why Choose Us</span>
            </div> */}
            <h2 className="text-apple-display-medium md:text-apple-display font-semibold text-[#1a365d] dark:text-gray-100">Your Success is Our Mission</h2>
          </div>
          <div>
            <p className="text-[#4a5568] dark:text-gray-400 text-apple-body">
              We go beyond traditional consulting to provide comprehensive support that considers your academic
              background, career aspirations, and financial situation.
            </p>
          </div>
        </div>

        {/* Offset Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative bg-[#f8fafc] dark:bg-black rounded-3xl p-8 border border-gray-100 dark:border-gray-800 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-xl hover:border-[#0E74D2]/20 dark:hover:border-blue-500/30 transition-all duration-300 ${index === 1 || index === 4 ? "lg:translate-y-8" : ""
                }`}
            >
              {/* Top Stats */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#0E74D2]/10 dark:bg-blue-500/20 flex items-center justify-center text-[#0E74D2] dark:text-blue-400 group-hover:bg-[#0E74D2] dark:group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {reason.icon}
                </div>
                <div className="text-right">
                  <div className="text-apple-title-1 font-semibold text-[#0E74D2] dark:text-blue-400">{reason.stat}</div>
                  <div className="text-apple-footnote text-[#4a5568] dark:text-gray-400">{reason.statLabel}</div>
                </div>
              </div>

              <h3 className="text-apple-title-2 font-semibold text-[#1a365d] dark:text-gray-100 mb-3 group-hover:text-[#0E74D2] dark:group-hover:text-blue-400 transition-colors">
                {reason.title}
              </h3>
              <p className="text-[#4a5568] dark:text-gray-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Feature Image */}
        <div className="mt-16 relative rounded-3xl overflow-hidden">
          <img
            src="/professional-education-counselor-helping-student-w.jpg"
            alt="Education Counseling Session"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-12 max-w-xl">
              <h3 className="text-apple-display-small md:text-apple-display-medium font-semibold text-white mb-4">Expert Guidance Every Step of the Way</h3>
              <p className="text-white/80 mb-6 text-apple-body">
                Our experienced counselors provide personalized support to help you make the right educational
                decisions.
              </p>
              <a
                href="tel:9578599785"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0E74D2] rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
