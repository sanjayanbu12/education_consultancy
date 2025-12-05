"use client"

import { useState } from "react"
import {
  BookOpen,
  ChevronRight,
  Stethoscope,
  FlaskConical,
  Cog,
  Scale,
  Calculator,
  Brain,
  Sparkles,
} from "lucide-react"

const courseCategories = [
  {
    id: "medical",
    name: "Medical",
    icon: <Stethoscope className="w-5 h-5" />,
    duration: "5 Years",
    color: "bg-red-500",
    courses: [
      "MBBS",
      "BDS / MDS",
      "BAMS - Ayurveda",
      "BHMS - Homeopathy",
      "BSMS - Siddha",
      "BNYS - Naturopathy",
      "BVSc - Veterinary",
      "Pharm.D",
      "NRI / MBBS / MS",
    ],
  },
  {
    id: "paramedical",
    name: "Paramedical",
    icon: <FlaskConical className="w-5 h-5" />,
    duration: "2-4 Years",
    color: "bg-pink-500",
    courses: [
      "B.Sc Nursing",
      "GNM Nursing",
      "ANM Nursing",
      "Pharmacy",
      "Physiotherapy",
      "Medical Lab Technology",
      "Radiology",
      "Operation Theatre Tech",
      "Cardiac Care Tech",
      "Dental Hygiene",
      "Optometry",
      "Anaesthesia Tech",
    ],
  },
  {
    id: "engineering",
    name: "Engineering",
    icon: <Cog className="w-5 h-5" />,
    duration: "4 Years",
    color: "bg-blue-500",
    courses: [
      "BE/B.Tech Computer Science",
      "BE/B.Tech AI & Data Science",
      "BE/B.Tech Cyber Security",
      "BE/B.Tech Robotics & AI",
      "BE/B.Tech Aerospace",
      "BE/B.Tech Civil",
      "BE/B.Tech Mechanical",
      "BE/B.Tech ECE",
      "BE/B.Tech EEE",
      "BE/B.Tech Bio Medical",
      "BE/B.Tech Food Technology",
    ],
  },
  {
    id: "science",
    name: "Science",
    icon: <Brain className="w-5 h-5" />,
    duration: "3 Years",
    color: "bg-purple-500",
    courses: [
      "B.Sc Physics",
      "B.Sc Chemistry",
      "B.Sc Mathematics",
      "B.Sc Computer Science",
      "B.Sc Botany",
      "B.Sc Zoology",
      "B.Sc Biotechnology",
      "B.Sc Microbiology",
      "B.Sc Agriculture",
      "B.Sc Horticulture",
      "B.Sc Food Technology",
    ],
  },
  {
    id: "commerce",
    name: "Commerce",
    icon: <Calculator className="w-5 h-5" />,
    duration: "3 Years",
    color: "bg-amber-500",
    courses: [
      "B.Com",
      "B.Com (Hons)",
      "BBA",
      "BBA Aviation",
      "BBA Logistics",
      "MBA (Full Time)",
      "MBA (Part Time)",
      "MIB",
      "MCA",
      "M.Com",
    ],
  },
  {
    id: "law",
    name: "Law",
    icon: <Scale className="w-5 h-5" />,
    duration: "3-5 Years",
    color: "bg-green-500",
    courses: ["BA LLB (5 Years)", "BBA LLB (5 Years)", "B.Com LLB (5 Years)", "LLB (3 Years)", "LLM", "Diploma in Law"],
  },
]

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("medical")

  const activeData = courseCategories.find((cat) => cat.id === activeCategory)

  return (
    <section id="courses" className="w-full py-20 bg-gradient-to-b from-white to-[#f0f7ff]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E74D2]/10 rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-[#0E74D2]" />
            <span className="text-[#0E74D2] text-sm font-medium">Courses Offered</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4 text-balance">
            Right Course. Right Career. Right Now.
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto text-pretty">
            Choose from 200+ courses across multiple disciplines. We help you find the perfect program that matches your
            interests and career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl relative group">
            <img
              src="/images/3.jpeg"
              alt="Right Course Right Career Right Now - AL-HUDA Educational Consultancy"
              className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">Featured Programs</span>
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Find Your Path</h3>
              <p className="text-white/80 text-sm">Expert guidance to choose the course that shapes your future</p>
            </div>
          </div>

          {/* Category Selection - Vertical Tabs */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-[rgba(14,116,210,0.1)]">
            <h3 className="text-[#1a365d] text-lg font-semibold mb-4">Select a Category</h3>
            <div className="space-y-3">
              {courseCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                    activeCategory === category.id
                      ? "bg-[#0E74D2] text-white shadow-lg"
                      : "bg-[#f8fafc] text-[#1a365d] hover:bg-[#0E74D2]/5 border border-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activeCategory === category.id ? "bg-white/20" : category.color + "/10"
                      }`}
                    >
                      <span className={activeCategory === category.id ? "text-white" : ""}>{category.icon}</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{category.name}</div>
                      <div className={`text-xs ${activeCategory === category.id ? "text-white/70" : "text-[#4a5568]"}`}>
                        {category.courses.length} courses • {category.duration}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 ${activeCategory === category.id ? "text-white" : "text-[#4a5568]"}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeData && (
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[rgba(14,116,210,0.1)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${activeData.color} rounded-xl flex items-center justify-center text-white`}>
                  {activeData.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1a365d]">{activeData.name} Courses</h3>
                  <p className="text-[#4a5568] text-sm">Duration: {activeData.duration}</p>
                </div>
              </div>
              <div className="text-sm text-[#4a5568] bg-[#f8fafc] px-4 py-2 rounded-full">
                {activeData.courses.length} programs available
              </div>
            </div>

            {/* Course Pills */}
            <div className="flex flex-wrap gap-3">
              {activeData.courses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-3 bg-[#f8fafc] rounded-xl hover:bg-[#0E74D2]/5 hover:border-[#0E74D2]/20 transition-colors cursor-pointer border border-gray-100 group"
                >
                  <div className={`w-2 h-2 rounded-full ${activeData.color}`}></div>
                  <span className="text-[#1a365d] text-sm font-medium group-hover:text-[#0E74D2] transition-colors">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
