"use client"

import {
  BookOpen,
  CheckCircle,
  Users,
  CreditCard,
  Award,
  Building2,
  GraduationCap,
  Briefcase,
  Heart,
  FileText,
  Banknote,
  Headphones,
} from "lucide-react"

const facilities = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Course & College Selection",
    description: "Expert guidance to find your perfect fit",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Admission Process Guidance",
    description: "Complete support from application to enrollment",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Free Career Counseling",
    description: "Personalized sessions for informed decisions",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "College Fee Details",
    description: "Transparent fee structures and comparisons",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Scholarship Guidance",
    description: "Help finding and applying for financial aid",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Finance Assistance",
    description: "Educational loan application support",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Fee Concession Support",
    description: "Assistance for deserving students",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Placement Support",
    description: "Career guidance and job placement help",
  },
  { icon: <Heart className="w-6 h-6" />, title: "Personalized Attention", description: "One-on-one dedicated support" },
  { icon: <FileText className="w-6 h-6" />, title: "Documentation Help", description: "Complete paperwork assistance" },
  { icon: <Banknote className="w-6 h-6" />, title: "No Service Charges", description: "All services completely free" },
  { icon: <Headphones className="w-6 h-6" />, title: "24/7 Support", description: "Round the clock assistance" },
]

export default function FacilitiesMarqueeSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#f0f7ff] dark:from-black to-white dark:to-black overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E74D2]/10 dark:bg-blue-500/20 rounded-full mb-4">
            <Award className="w-4 h-4 text-[#0E74D2] dark:text-blue-400" />
            <span className="text-[#0E74D2] dark:text-blue-400 text-sm font-medium">Our Facilities</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] dark:text-gray-100 mb-4">Everything You Need to Succeed</h2>
          <p className="text-[#4a5568] dark:text-gray-400 text-lg italic">
            "We help students choose the course and institution that matches their personal circumstances - academic,
            employment, and financial background."
          </p>
        </div>
      </div>

      {/* Marquee Row 1 - Left to Right */}
      <div className="relative mb-6">
        <div className="flex gap-6 animate-marquee">
          {[...facilities, ...facilities].map((facility, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] bg-white dark:bg-black rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0E74D2]/10 dark:bg-blue-500/20 flex items-center justify-center text-[#0E74D2] dark:text-blue-400 mb-4">
                {facility.icon}
              </div>
              <h3 className="font-semibold text-[#1a365d] dark:text-gray-100 mb-1">{facility.title}</h3>
              <p className="text-sm text-[#4a5568] dark:text-gray-400">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right to Left */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee-reverse">
          {[...facilities.slice(6), ...facilities.slice(0, 6), ...facilities.slice(6), ...facilities.slice(0, 6)].map(
            (facility, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] bg-gradient-to-br from-[#0E74D2] to-[#0a5ba8] rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                  {facility.icon}
                </div>
                <h3 className="font-semibold text-white mb-1">{facility.title}</h3>
                <p className="text-sm text-blue-100">{facility.description}</p>
              </div>
            ),
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#1a365d] dark:bg-zinc-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0E74D2]/30 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              Get free personalized guidance from our expert counselors. No hidden charges, no obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9578599785"
                title="Call: 9578599785"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0E74D2] rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact
              </a>
              <a
                href="mailto:alhudaeducationalconsultant@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold border border-white/30 hover:bg-white/20 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
