"use client"

import { ArrowRight, FileText, Search, CheckSquare, GraduationCap, Briefcase } from "lucide-react"

const steps = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Share Your Goals",
    description: "Tell us about your academic background, interests, and career aspirations",
    color: "bg-blue-500",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Get Recommendations",
    description: "Our experts analyze and suggest the best courses and colleges for you",
    color: "bg-purple-500",
  },
  {
    icon: <CheckSquare className="w-6 h-6" />,
    title: "Apply with Confidence",
    description: "We guide you through the entire application and admission process",
    color: "bg-green-500",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Secure Admission",
    description: "Get admitted to your dream institution with our support",
    color: "bg-amber-500",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Launch Your Career",
    description: "Continue to receive placement support and career guidance",
    color: "bg-red-500",
  },
]

export default function PathwaySection() {
  return (
    <section className="w-full py-20 bg-[#1a365d]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-apple-display-small md:text-apple-display-medium font-semibold text-white mb-4 text-balance">Your Journey with AL-HUDA</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-pretty">
            From initial consultation to career launch, we're with you every step of the way
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-white/20"></div>

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Step Circle */}
                <div
                  className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white mb-6 z-10 shadow-lg`}
                >
                  {step.icon}
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute top-[52px] left-[calc(50%+24px)] w-[calc(100%-48px)]">
                    <ArrowRight className="w-5 h-5 text-white/40 absolute right-0 -top-2.5" />
                  </div>
                )}

                {/* Content Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 h-full">
                  <div className="text-white/50 text-apple-footnote font-medium mb-2">Step {index + 1}</div>
                  <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                  <p className="text-white/70 text-apple-callout leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10"
            >
              <div
                className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
              >
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="text-white/50 text-apple-footnote font-medium mb-1">Step {index + 1}</div>
                <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                <p className="text-white/70 text-apple-callout leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && <ArrowRight className="w-5 h-5 text-white/30 flex-shrink-0 mt-3" />}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="tel:9578599785"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a365d] rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Journey Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
