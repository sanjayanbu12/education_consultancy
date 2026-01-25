"use client"

import { Shield, Clock, Wallet, HeartHandshake, Target, Lightbulb, CheckCircle2, Phone } from "lucide-react"

const reasons = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Trusted Expertise",
    description: "Over 15 years of dedicated service in educational consulting with proven track record",
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Zero Service Charges",
    description: "All our consulting and admission assistance services are completely free",
    color: "bg-green-50 text-green-600 border-green-100",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Availability",
    description: "Round-the-clock support ensures you never miss an admission deadline",
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Personalized Guidance",
    description: "Tailored recommendations based on your unique academic and career goals",
    color: "bg-amber-50 text-amber-600 border-amber-100",
  },
]

const highlights = [
  "Comprehensive college database with 5000+ institutions",
  "Direct partnerships with top universities",
  "Expert career counselors with industry experience",
  "Scholarship and financial aid assistance",
  "End-to-end admission support",
  "Post-admission placement guidance",
]

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-[#f0f7ff]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E74D2]/10 rounded-full mb-4">
            <Target className="w-4 h-4 text-[#0E74D2]" />
            <span className="text-[#0E74D2] text-apple-callout font-medium">Why AL-HUDA?</span>
          </div>
          <h2 className="text-apple-display-small md:text-apple-display-medium font-semibold text-[#1a365d] mb-4 text-balance">
            Your Success is Our Mission
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto text-pretty">
            We go beyond traditional consulting to provide comprehensive support that transforms educational dreams into
            reality
          </p>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feature Card - Left Side */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#1a365d] to-[#2d4a6f] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-[#60a5fa]" />
              </div>
              <h3 className="text-white text-apple-title-1 md:text-apple-display-small font-semibold mb-4 text-balance">
                Guiding Students to Their Perfect Academic Path
              </h3>
              <p className="text-white/70 leading-relaxed mb-6 text-pretty">
                We understand that choosing the right educational path is one of the most important decisions in a
                student's life. Our expert counselors take time to understand your aspirations, strengths, and
                constraints to recommend the best-fit courses and institutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#60a5fa] flex-shrink-0" />
                    <span className="text-white/80 text-apple-callout">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Stack */}
          <div className="flex flex-col gap-6">
            {/* CTA Card */}
            <div className="bg-[#0E74D2] rounded-3xl p-6 text-center">
              <h4 className="text-white font-semibold mb-2">Ready to Start?</h4>
              <p className="text-white/80 text-apple-callout mb-4">Get free counseling today</p>
              <a
                href="tel:9578599785"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0E74D2] rounded-full font-medium text-apple-callout hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                9578599785
              </a>
            </div>

            {/* Quote Card */}
            <div className="flex-1 bg-white rounded-3xl p-6 border border-[rgba(14,116,210,0.1)] shadow-sm">
              <div className="text-apple-display-medium text-[#0E74D2] mb-3">"</div>
              <p className="text-[#1a365d] italic leading-relaxed text-pretty">
                We help students choose the course and institution that matches their personal circumstances, while
                taking their career objectives into consideration.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-[#1a365d] font-semibold">AL-HUDA Team</div>
                <div className="text-[#4a5568] text-apple-callout">Educational Consultants</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reason Cards - Horizontal Scroll on Mobile */}
        <div className="mt-10 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-4 min-w-max md:min-w-0 md:grid md:grid-cols-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`w-[280px] md:w-auto p-6 rounded-2xl border ${reason.color} hover:shadow-md transition-shadow`}
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                  {reason.icon}
                </div>
                <h4 className="text-[#1a365d] font-semibold mb-2">{reason.title}</h4>
                <p className="text-[#4a5568] text-apple-callout leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
