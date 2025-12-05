"use client"

import { ArrowRight, Stethoscope, Cog, FlaskConical, Calculator, Scale, Briefcase } from "lucide-react"

const pathways = [
  {
    category: "Medical",
    duration: "5 Years",
    icon: <Stethoscope className="w-6 h-6" />,
    color: "bg-red-500",
    lightColor: "bg-red-50",
    textColor: "text-red-600",
    courses: ["MBBS", "BUMS", "BHMS", "BAMS", "BSMS", "BNYS", "BDS", "BVSc"],
  },
  {
    category: "Paramedical",
    duration: "2-3 Years",
    icon: <FlaskConical className="w-6 h-6" />,
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
    textColor: "text-pink-600",
    courses: ["Nursing", "Pharmacy", "Physiotherapy", "Medical Lab Tech", "Radiology", "Cardiac Care"],
  },
  {
    category: "Engineering",
    duration: "4 Years",
    icon: <Cog className="w-6 h-6" />,
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    courses: ["Aeronautical", "Aerospace", "Computer Science", "AI & Robotics", "Civil", "Mechanical"],
  },
  {
    category: "Commerce",
    duration: "3 Years",
    icon: <Calculator className="w-6 h-6" />,
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    textColor: "text-amber-600",
    courses: ["B.Com", "BBA", "Bank Management", "CA", "CMA", "Chartered Accountancy"],
  },
  {
    category: "Law",
    duration: "3-5 Years",
    icon: <Scale className="w-6 h-6" />,
    color: "bg-green-500",
    lightColor: "bg-green-50",
    textColor: "text-green-600",
    courses: ["LLB", "BA + LLB", "B.Com + LLB", "LLM", "IPCC"],
  },
  {
    category: "Management",
    duration: "2 Years",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600",
    courses: ["MBA", "MIB", "MCA", "M.Tech", "M.Com", "Ph.D"],
  },
]

export default function CoursePathwaySection() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">Your Educational Pathway</h2>
          <p className="text-[#4a5568] text-lg">
            From school graduation to professional success - we guide you through every educational milestone
          </p>
        </div>

        {/* Timeline Flow Layout */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0E74D2]/20 via-[#0E74D2] to-[#0E74D2]/20 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative z-10">
            {pathways.map((pathway, index) => (
              <div key={index} className="group">
                {/* Card */}
                <div
                  className={`${pathway.lightColor} rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 relative`}
                >
                  {/* Index Badge */}
                  <div
                    className={`absolute -top-3 -left-3 w-8 h-8 ${pathway.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}
                  >
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${pathway.color} rounded-2xl flex items-center justify-center text-white mb-4`}
                  >
                    {pathway.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-[#1a365d] mb-1">{pathway.category}</h3>
                  <div className={`text-xs font-medium ${pathway.textColor} mb-4`}>{pathway.duration}</div>

                  {/* Courses */}
                  <div className="space-y-1.5">
                    {pathway.courses.slice(0, 4).map((course, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#4a5568]">
                        <div className={`w-1.5 h-1.5 rounded-full ${pathway.color}`}></div>
                        {course}
                      </div>
                    ))}
                    {pathway.courses.length > 4 && (
                      <div className="text-xs text-[#0E74D2] font-medium mt-2">
                        +{pathway.courses.length - 4} more courses
                      </div>
                    )}
                  </div>
                </div>

                {/* Arrow (hidden on last item) */}
                {index < pathways.length - 1 && (
                  <div className="hidden xl:flex justify-center mt-4">
                    <ArrowRight className="w-5 h-5 text-[#0E74D2]/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-[#0E74D2]/5 rounded-full border border-[#0E74D2]/20">
            <span className="text-[#1a365d] font-medium">Need help choosing your path?</span>
            <a
              href="tel:9578599785"
              className="px-5 py-2 bg-[#0E74D2] text-white rounded-full text-sm font-medium hover:bg-[#0a5ba8] transition-colors"
            >
              Get Free Counseling
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
