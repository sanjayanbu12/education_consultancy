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
  ArrowUpRight,
  Laptop,
  Scale,
} from "lucide-react"

const mainServices = [
  {
    icon: <Stethoscope className="w-7 h-7" />,
    title: "Medicine & Healthcare",
    description: "MBBS, BDS, Nursing, Pharmacy, Physiotherapy, Veterinary, Homeopathy, Ayurveda, Siddha, Naturopathy",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    courses: ["MBBS", "BDS", "Pharm.D", "B.Sc Nursing"],
  },
  {
    icon: <Cog className="w-7 h-7" />,
    title: "Engineering & Technology",
    description: "BE/B.Tech in Computer Science, AI, Cyber Security, Robotics, Aerospace, Civil, Mechanical, ECE, EEE",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    courses: ["B.Tech CS", "B.Tech AI", "B.Tech Mech", "B.Tech ECE"],
  },
  {
    icon: <FlaskConical className="w-7 h-7" />,
    title: "Arts & Science",
    description: "B.Sc, B.Com, BBA, BA, B.Ed, Psychology, Political Science, Visual Communication, Fashion Technology",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    courses: ["B.Sc", "B.Com", "BBA", "BA"],
  },
  {
    icon: <Sprout className="w-7 h-7" />,
    title: "Agriculture Sciences",
    description: "B.Sc Agriculture, Horticulture, Sericulture, Forestry, B.Tech Agriculture, Diploma in Agriculture",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    courses: ["B.Sc Agri", "B.Sc Horti", "B.Tech Agri"],
  },
  {
    icon: <Plane className="w-7 h-7" />,
    title: "Aviation & Marine",
    description: "Aircraft Maintenance Engineering, Aeronautical Science, Marine Engineering, Naval Architecture",
    color: "from-cyan-500 to-teal-600",
    bgColor: "bg-cyan-50",
    courses: ["AME", "B.Sc Aero", "Marine Eng"],
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Master Degrees",
    description: "MBA, MCA, M.Tech, M.Com, M.Sc, M.A, MSW, M.Phil, Ph.D programs in various specializations",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    courses: ["MBA", "MCA", "M.Tech", "Ph.D"],
  },
]

const additionalServices = [
  { icon: <Briefcase className="w-5 h-5" />, name: "Part Time Business & Jobs" },
  { icon: <CreditCard className="w-5 h-5" />, name: "Education Sponsorship" },
  { icon: <Building2 className="w-5 h-5" />, name: "College Transfer" },
  { icon: <Laptop className="w-5 h-5" />, name: "Distance Education" },
  { icon: <GraduationCap className="w-5 h-5" />, name: "Open Schooling" },
  { icon: <Scale className="w-5 h-5" />, name: "University Migration" },
  { icon: <Briefcase className="w-5 h-5" />, name: "HR & Placement" },
  { icon: <Building2 className="w-5 h-5" />, name: "School Consulting" },
]

export default function ServicesGridSection() {
  return (
    <section id="services" className="w-full py-24 bg-[#f8fafc] dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E74D2]/10 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-[#0E74D2] rounded-full"></span>
            <span className="text-[#0E74D2] text-sm font-medium">Our Services</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] dark:text-gray-100 mb-4">Comprehensive Educational Guidance</h2>
          <p className="text-[#4a5568] dark:text-gray-400 text-lg">
            From course selection to career placement, we guide students through every step of their educational journey
            with expert advice and personalized support.
          </p>
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`group relative ${service.bgColor} dark:bg-black rounded-3xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 ${index === 0 ? "lg:row-span-2" : ""
                }`}
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${service.color} rounded-full`}></div>

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1a365d] dark:text-gray-100 mb-3 group-hover:text-[#0E74D2] dark:group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-[#4a5568] dark:text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>

              {/* Course Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.courses.map((course, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white dark:bg-zinc-900 rounded-full text-xs font-medium text-[#4a5568] dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {course}
                  </span>
                ))}
              </div>

              {/* Explore Link */}
              <div className="flex items-center gap-2 text-[#0E74D2] dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Explore Courses <ArrowUpRight className="w-4 h-4" />
              </div>

              {index === 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <img
                    src="/medical-students-in-white-coats-studying-together.jpg"
                    alt="Medical Students"
                    className="w-full h-40 object-cover rounded-2xl"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Services - Horizontal Scroll on Mobile */}
        <div className="bg-gradient-to-br from-[#1a365d] to-[#0E74D2] dark:from-gray-800 dark:to-black rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Additional Services</h3>
              <p className="text-blue-200">Beyond admissions - complete educational support</p>
            </div>
            <div className="px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
              All Services Free
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/20 transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-[#0E74D2] transition-colors">
                  {service.icon}
                </div>
                <div className="text-white font-medium text-sm">{service.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
