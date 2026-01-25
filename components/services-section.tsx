"use client"

import {
  Stethoscope,
  FlaskConical,
  Sprout,
  Cog,
  Plane,
  GraduationCap,
  Briefcase,
  Building2,
  CreditCard,
  ArrowRight,
  ChevronRight,
} from "lucide-react"

const services = [
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Medicine & Allied Health",
    description: "MBBS, BDS, Nursing, Pharmacy, Physiotherapy, Veterinary, Homeopathy, Ayurveda, and more",
    color: "bg-red-50 text-red-600 border-red-100",
    accent: "bg-red-500",
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Arts & Science",
    description: "B.Sc, B.Com, BBA, BA, B.Ed, Psychology, Political Science, Visual Communication",
    color: "bg-purple-50 text-purple-600 border-purple-100",
    accent: "bg-purple-500",
  },
  {
    icon: <Sprout className="w-6 h-6" />,
    title: "Agriculture",
    description: "B.Sc Agriculture, Horticulture, Sericulture, Forestry, B.Tech Agriculture",
    color: "bg-green-50 text-green-600 border-green-100",
    accent: "bg-green-500",
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: "Engineering",
    description: "BE/B.Tech in CS, AI, Cyber Security, Robotics, Aerospace, Civil, Mechanical, ECE, EEE",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    accent: "bg-blue-500",
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: "Aviation & Marine",
    description: "Aircraft Maintenance, Aeronautical Science, Marine Engineering, Naval Architecture",
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    accent: "bg-cyan-500",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Master Degrees",
    description: "MBA, MCA, M.Tech, M.Com, M.Sc, M.A, MSW, M.Phil, Ph.D programs",
    color: "bg-amber-50 text-amber-600 border-amber-100",
    accent: "bg-amber-500",
  },
]

const additionalServices = [
  { name: "Part Time Business & Jobs", icon: <Briefcase className="w-4 h-4" /> },
  { name: "Education Sponsorship", icon: <CreditCard className="w-4 h-4" /> },
  { name: "College Transfer", icon: <Building2 className="w-4 h-4" /> },
  { name: "University Migration", icon: <ArrowRight className="w-4 h-4" /> },
  { name: "Distance Education", icon: <GraduationCap className="w-4 h-4" /> },
  { name: "Open Schooling", icon: <FlaskConical className="w-4 h-4" /> },
  { name: "HR & Placement", icon: <Briefcase className="w-4 h-4" /> },
  { name: "School Consulting", icon: <Building2 className="w-4 h-4" /> },
]

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E74D2]/10 rounded-full mb-4">
            <Briefcase className="w-4 h-4 text-[#0E74D2]" />
            <span className="text-[#0E74D2] text-apple-callout font-medium">Our Services</span>
          </div>
          <h2 className="text-apple-display-small md:text-apple-display-medium font-semibold text-[#1a365d] mb-4 text-balance">
            Comprehensive Educational Services
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto text-pretty">
            We guide students through every step of their educational journey, from course selection to successful
            career placement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border ${service.color} hover:shadow-xl transition-all group cursor-pointer ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              {/* Accent Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${service.accent}`}></div>

              <div className={`p-6 ${index === 0 ? "md:p-8" : ""}`}>
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                  {service.icon}
                </div>
                <h3 className={`font-semibold text-[#1a365d] mb-2 ${index === 0 ? "text-apple-title-2" : "text-apple-body"}`}>
                  {service.title}
                </h3>
                <p className={`text-[#4a5568] leading-relaxed ${index === 0 ? "text-base" : "text-apple-callout"}`}>
                  {service.description}
                </p>

                {index === 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-[#1a365d] text-apple-callout font-medium mb-3">Popular Courses:</div>
                    <div className="flex flex-wrap gap-2">
                      {["MBBS", "BDS", "Nursing", "Pharmacy"].map((course) => (
                        <span key={course} className="px-3 py-1 bg-white text-[#4a5568] text-apple-footnote rounded-full border">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 flex items-center gap-2 text-[#0E74D2] text-apple-callout font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore courses <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#0E74D2] to-[#0a5ba8] rounded-3xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-white text-apple-title-2 font-semibold mb-2">Additional Services</h3>
              <p className="text-white/70 text-apple-callout">Beyond admissions, we support your complete educational journey</p>
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-full text-white text-apple-callout font-medium">All Services Free</div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white mb-3 group-hover:bg-white group-hover:text-[#0E74D2] transition-colors">
                  {service.icon}
                </div>
                <div className="text-white text-apple-callout font-medium">{service.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* No Service Charges Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 rounded-full border border-green-200">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-green-700 font-semibold">
              No Service Charges - Free Consulting & Admission Assistance
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
