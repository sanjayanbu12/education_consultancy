"use client"

import {
  CheckCircle,
  Award,
  BookOpen,
  CreditCard,
  Building2,
  Users,
  Briefcase,
  GraduationCap,
  ArrowRight,
} from "lucide-react"

const facilities = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Course & College Selection",
    description: "Expert assistance to choose the right course and institution based on your academic profile",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Admission Process Guidance",
    description: "Complete guidance on all aspects of college admission from application to enrollment",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Free Career Counseling",
    description: "Personalized sessions to help you make informed decisions about your future",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "College Fees Details",
    description: "Access comprehensive fee structures and budget-friendly recommendations",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Scholarship Guidance",
    description: "Help identifying and applying for scholarships and fee concessions",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Finance Assistance",
    description: "Support with educational loan applications and financing options",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Fee Concession Support",
    description: "Assistance in obtaining fee concessions for deserving students",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Placement Support",
    description: "Career guidance and placement assistance for your professional journey",
  },
]

export default function FacilitiesSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#f0f7ff] to-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E74D2]/10 rounded-full mb-4">
            <Award className="w-4 h-4 text-[#0E74D2]" />
            <span className="text-[#0E74D2] text-sm font-medium">Our Facilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4 text-balance">
            Comprehensive Support for Your Success
          </h2>
          <p className="text-[#4a5568] max-w-3xl mx-auto text-lg italic text-pretty">
            "We help students choose the course and institution that matches their personal circumstances such as
            academic, employment and financial background."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Quote/Image Card */}
          <div className="lg:row-span-2 rounded-3xl overflow-hidden relative">
            <img
              src="/images/1.jpeg"
              alt="AL-HUDA Educational Consultancy Facilities"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>

          {/* Facilities Cards */}
          {facilities.slice(0, 4).map((facility, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-[rgba(14,116,210,0.1)] shadow-sm hover:shadow-lg hover:border-[#0E74D2]/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0E74D2]/10 flex items-center justify-center text-[#0E74D2] flex-shrink-0 group-hover:bg-[#0E74D2] group-hover:text-white transition-colors">
                  {facility.icon}
                </div>
                <div>
                  <h3 className="text-[#1a365d] font-semibold mb-1">{facility.title}</h3>
                  <p className="text-[#4a5568] text-sm leading-relaxed">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.slice(4).map((facility, index) => (
            <div
              key={index}
              className="p-5 bg-white rounded-xl border border-[rgba(14,116,210,0.1)] shadow-sm hover:shadow-md hover:border-[#0E74D2]/30 transition-all group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0E74D2]/10 flex items-center justify-center text-[#0E74D2] mb-3 group-hover:bg-[#0E74D2] group-hover:text-white transition-colors">
                {facility.icon}
              </div>
              <h3 className="text-[#1a365d] font-semibold text-sm mb-1">{facility.title}</h3>
              <p className="text-[#4a5568] text-xs leading-relaxed">{facility.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="tel:9578599785"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0E74D2] text-white rounded-full font-semibold hover:bg-[#0a5ba8] transition-colors shadow-lg"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
