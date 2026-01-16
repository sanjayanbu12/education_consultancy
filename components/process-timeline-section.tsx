"use client"

import { Phone, Users, FileText, CheckCircle, GraduationCap, Briefcase } from "lucide-react"

const steps = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Contact Us",
    description: "Reach out via phone, email, or visit our office for initial consultation",
    color: "bg-blue-500",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Free Counseling",
    description: "Meet our expert counselors for personalized career and course guidance",
    color: "bg-purple-500",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Course Selection",
    description: "Choose the right course based on your interests, skills, and career goals",
    color: "bg-amber-500",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "College Selection",
    description: "Select from our partner institutions based on your preferences and budget",
    color: "bg-green-500",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Admission Process",
    description: "Complete documentation and secure your admission with our guidance",
    color: "bg-red-500",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Career Launch",
    description: "Graduate and start your career with our placement assistance support",
    color: "bg-cyan-500",
  },
]

export default function ProcessTimelineSection() {
  return (
    <section id="process-timeline" className="w-full py-24 bg-gradient-to-b from-white dark:from-black to-[#f8fafc] dark:to-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E74D2]/10 rounded-full mb-4">
            <CheckCircle className="w-4 h-4 text-[#0E74D2]" />
            <span className="text-[#0E74D2] text-sm font-medium">How It Works</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] dark:text-gray-100 mb-4">Your Path to Success</h2>
          <p className="text-[#4a5568] dark:text-gray-400 text-lg">
            A simple, streamlined process designed to guide you from initial inquiry to successful career launch
          </p>
        </div>

        {/* Timeline - Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#0E74D2]/20 dark:from-zinc-700/20 via-[#0E74D2] dark:via-zinc-600 to-[#0E74D2]/20 dark:to-zinc-700/20"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile Connector Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#0E74D2] dark:from-zinc-700 to-[#0E74D2]/20 dark:to-zinc-700/20 -mb-8"></div>
                )}

                {/* Step Card */}
                <div className="relative z-10 flex flex-col items-center lg:items-center text-center">
                  {/* Number Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#0E74D2] dark:bg-blue-600 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon Circle */}
                  <div
                    className={`w-12 h-12 ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 mt-4`}
                  >
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-[#1a365d] dark:text-gray-100 mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4a5568] dark:text-gray-400 leading-relaxed max-w-[200px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#4a5568] dark:text-gray-400 mb-6">Ready to begin your educational journey?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9578599785"
              title="Call: 9578599785"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0E74D2] text-white rounded-full font-semibold hover:bg-[#0a5ba8] transition-colors shadow-lg shadow-[#0E74D2]/30"
            >
              <Phone className="w-5 h-5" />
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
