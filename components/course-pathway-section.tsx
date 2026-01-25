"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowRight,
  Stethoscope,
  Cog,
  FlaskConical,
  Calculator,
  Scale,
  Briefcase,
  Heart,
  Wrench,
} from "lucide-react"
import { getCoursesByCategory } from "@/data/courses-data"

const pathways = [
  {
    category: "Medical",
    duration: "3-6 Years",
    icon: <Stethoscope className="w-6 h-6" />,
    color: "bg-red-500",
    lightColor: "bg-red-50",
    textColor: "text-red-600",
    courses: getCoursesByCategory("Medical").filter(c => c.type === "UG" && !c.name.includes("Nursing")).slice(0, 12).map(c => c.name),
  },
  {
    category: "Nursing",
    duration: "2-4 Years",
    icon: <Heart className="w-6 h-6" />,
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
    textColor: "text-pink-600",
    courses: getCoursesByCategory("Medical").filter(c => c.name.includes("Nursing") || c.name.includes("ANM") || c.name.includes("DGNM")).slice(0, 8).map(c => c.name),
  },
  {
    category: "Engineering",
    duration: "4 Years",
    icon: <Cog className="w-6 h-6" />,
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    courses: getCoursesByCategory("Engineering").filter(c => c.type === "UG").slice(0, 12).map(c => c.name.replace("B.Tech ", "")),
  },
  {
    category: "Polytechnic",
    duration: "3 Years",
    icon: <Wrench className="w-6 h-6" />,
    color: "bg-teal-500",
    lightColor: "bg-teal-50",
    textColor: "text-teal-600",
    courses: ["Civil", "Mechanical", "ECE", "EEE", "CSE", "Automobile", "Architecture", "Chemical", "Bio-Medical", "Food Technology", "Fashion Technology", "Interior Design"],
  },
  {
    category: "Commerce",
    duration: "2-3 Years",
    icon: <Calculator className="w-6 h-6" />,
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    textColor: "text-amber-600",
    courses: getCoursesByCategory("Commerce").slice(0, 10).map(c => c.name),
  },
  {
    category: "Law",
    duration: "3-5 Years",
    icon: <Scale className="w-6 h-6" />,
    color: "bg-green-500",
    lightColor: "bg-green-50",
    textColor: "text-green-600",
    courses: getCoursesByCategory("Law").map(c => c.name),
  },
  {
    category: "Management",
    duration: "2 Years",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600",
    courses: getCoursesByCategory("Engineering").filter(c => c.type === "PG").slice(0, 10).map(c => c.name.replace("M.Tech ", "")),
  },
  {
    category: "Science",
    duration: "3-4 Years",
    icon: <FlaskConical className="w-6 h-6" />,
    color: "bg-indigo-500",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    courses: getCoursesByCategory("Science").map(c => c.name),
  },
]

export default function CoursePathwaySection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const router = useRouter()

  const toggleCourses = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="w-full py-24 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-apple-display-medium md:text-apple-display font-semibold text-[#1a365d] dark:text-gray-100 mb-4">
            Your Educational Pathway
          </h2>
          <p className="text-[#4a5568] dark:text-gray-400 text-apple-body">
            From school to professional success — we guide you every step
          </p>
        </div>

        <div className="relative">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
            {pathways.map((path, index) => {
              const expanded = expandedIndex === index
              const shown = expanded ? path.courses : path.courses.slice(0, 4)

              return (
                <div key={index} className="group">

                  <div className={`${path.lightColor} dark:bg-black rounded-3xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all relative`}>

                    {/* Badge */}
                    <div className={`absolute -top-3 -left-3 w-8 h-8 ${path.color} rounded-full flex justify-center items-center text-white font-semibold`}>
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 ${path.color} text-white rounded-2xl flex justify-center items-center mb-4`}>
                      {path.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-[#1a365d] dark:text-gray-100">{path.category}</h3>
                    <p className={`text-apple-footnote ${path.textColor} dark:text-gray-400 mb-4`}>{path.duration}</p>

                    {/* Course list */}
                    <div className="space-y-1.5">
                      {shown.map((course, i) => (
                        <div key={i} className="flex gap-2 text-apple-callout text-[#4a5568] dark:text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full ${path.color}`} />
                          {course}
                        </div>
                      ))}

                      {path.courses.length > 4 && (
                        <button
                          onClick={() => toggleCourses(index)}
                          className="text-apple-footnote text-[#0E74D2] dark:text-blue-400 font-semibold hover:underline mt-1"
                        >
                          {expanded ? "Show Less" : `+${path.courses.length - 4} more courses`}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Navigation Arrow */}
                  <div className="hidden xl:flex justify-center mt-4">
                    <button
                      onClick={() =>
                        router.push(`/course/${path.category.toLowerCase()}`)
                      }
                      className="p-2 rounded-full bg-[#0E74D2]/10 dark:bg-blue-500/20 hover:bg-[#0E74D2] dark:hover:bg-blue-600 transition"
                    >
                      <ArrowRight className="w-5 h-5 text-[#0E74D2] dark:text-blue-400 group-hover:text-white" />
                    </button>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
