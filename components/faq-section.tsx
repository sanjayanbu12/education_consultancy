"use client"

import { useState } from "react"
import { HelpCircle, ChevronDown, Phone, MessageCircle } from "lucide-react"

const faqData = [
  {
    question: "What services does AL-HUDA Educational Consultancy provide?",
    answer:
      "We provide comprehensive educational consulting services including course and college selection assistance, admission guidance, career counseling, scholarship guidance, educational loan support, fee concession assistance, and placement support. All our consulting services are completely free of charge.",
  },
  {
    question: "Is there any fee for your consulting services?",
    answer:
      "No, all our consulting and admission assistance services are completely free. We believe in providing accessible educational guidance to all students regardless of their financial background. There are no hidden charges.",
  },
  {
    question: "What courses can you help me get admission for?",
    answer:
      "We assist with admissions across all major disciplines including Medicine (MBBS, BDS, Nursing, Pharmacy), Engineering (all branches), Arts & Science, Commerce & Management (MBA, BBA, B.Com), Law, Agriculture, Aviation & Marine courses, and many more - over 200 courses in total.",
  },
  {
    question: "Do you help with scholarship applications?",
    answer:
      "Yes, we provide comprehensive scholarship guidance. We help identify suitable scholarships based on your academic profile, assist with application preparation, and guide you through the entire scholarship process to maximize your chances of success.",
  },
  {
    question: "Which colleges are you associated with?",
    answer:
      "We have partnerships with over 5000 colleges across India, including top institutions in Coimbatore, Chennai, Bangalore, and other major cities. Our network includes engineering colleges, medical colleges, arts & science institutions, and professional schools.",
  },
  {
    question: "How do I start the consultation process?",
    answer:
      "Simply call us at +91 9578599785 or email us at alhudaeducationalconsultant@gmail.com. Our team is available 24/7 to assist you. You can also visit our office for an in-person consultation. The first step is always a free career assessment.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white dark:from-gray-950 to-[#f0f7ff] dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Header & CTA */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 lg:self-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E74D2]/10 dark:bg-blue-500/20 rounded-full mb-4">
              <HelpCircle className="w-4 h-4 text-[#0E74D2] dark:text-blue-400" />
              <span className="text-[#0E74D2] dark:text-blue-400 text-sm font-medium">FAQs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] dark:text-gray-100 mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-[#4a5568] dark:text-gray-400 leading-relaxed mb-8 text-pretty">
              Find answers to common questions about our educational consulting services. Can't find what you're looking
              for? Contact us directly.
            </p>

            {/* Quick Contact Card */}
            <div className="bg-[#1a365d] dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Still have questions?</h3>
              <p className="text-white/70 text-sm mb-6">
                Our expert counselors are available 24/7 to help you with any queries.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:9578599785"
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm font-medium">Call: 9578599785</span>
                </a>
                <a
                  href="mailto:alhudaeducationalconsultant@gmail.com"
                  className="flex items-center gap-3 px-4 py-3 bg-[#0E74D2] rounded-xl text-white hover:bg-[#0a5ba8] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Send Message</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openItems.includes(index)
                return (
                  <div
                    key={index}
                    className={`bg-white dark:bg-gray-800 rounded-2xl border transition-all ${isOpen ? "border-[#0E74D2]/30 dark:border-blue-500/30 shadow-lg" : "border-[rgba(14,116,210,0.1)] dark:border-gray-700 shadow-sm"
                      }`}
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-5 flex justify-between items-start gap-4 text-left"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${isOpen ? "bg-[#0E74D2] dark:bg-blue-600 text-white" : "bg-[#0E74D2]/10 dark:bg-blue-500/20 text-[#0E74D2] dark:text-blue-400"
                            }`}
                        >
                          <span className="text-sm font-semibold">{index + 1}</span>
                        </div>
                        <span className="text-[#1a365d] dark:text-gray-100 font-medium text-left">{item.question}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#0E74D2] dark:text-blue-400 flex-shrink-0 transition-transform duration-300 mt-1 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="px-6 pb-6 pl-[72px]">
                        <p className="text-[#4a5568] dark:text-gray-400 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
