"use client"

import { useState } from "react"
import { Search, ChevronRight, BookOpen, Clock, Award } from "lucide-react"

const categories = ["All", "Medical", "Engineering", "Science", "Commerce", "Arts", "Law"]

const courses = [
  { name: "MBBS", category: "Medical", duration: "5.5 Years", type: "UG", popular: true },
  { name: "B.Tech Computer Science", category: "Engineering", duration: "4 Years", type: "UG", popular: true },
  { name: "BDS", category: "Medical", duration: "5 Years", type: "UG", popular: false },
  { name: "MBA", category: "Commerce", duration: "2 Years", type: "PG", popular: true },
  { name: "B.Sc Nursing", category: "Medical", duration: "4 Years", type: "UG", popular: true },
  { name: "B.Tech AI & Data Science", category: "Engineering", duration: "4 Years", type: "UG", popular: true },
  { name: "B.Com", category: "Commerce", duration: "3 Years", type: "UG", popular: false },
  { name: "BA LLB", category: "Law", duration: "5 Years", type: "UG", popular: true },
  { name: "B.Sc Physics", category: "Science", duration: "3 Years", type: "UG", popular: false },
  { name: "BBA", category: "Commerce", duration: "3 Years", type: "UG", popular: false },
  { name: "Pharm.D", category: "Medical", duration: "6 Years", type: "UG", popular: false },
  { name: "M.Tech", category: "Engineering", duration: "2 Years", type: "PG", popular: false },
  { name: "B.Sc Agriculture", category: "Science", duration: "4 Years", type: "UG", popular: false },
  { name: "MCA", category: "Commerce", duration: "2 Years", type: "PG", popular: true },
  { name: "BA", category: "Arts", duration: "3 Years", type: "UG", popular: false },
  { name: "LLM", category: "Law", duration: "2 Years", type: "PG", popular: false },
]

export default function CourseCatalogSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="courses" className="w-full py-24 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E74D2]/10 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-[#0E74D2]" />
              <span className="text-[#0E74D2] text-sm font-medium">Course Catalog</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-2">200+ Courses Available</h2>
            <p className="text-[#4a5568]">Find the perfect program for your career aspirations</p>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a5568]" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-200 focus:border-[#0E74D2] focus:ring-2 focus:ring-[#0E74D2]/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[#0E74D2] text-white shadow-lg shadow-[#0E74D2]/30"
                  : "bg-white text-[#4a5568] border border-gray-200 hover:border-[#0E74D2]/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Grid - Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#0E74D2]/30 hover:shadow-lg transition-all cursor-pointer relative overflow-hidden"
            >
              {course.popular && (
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                  Popular
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    course.category === "Medical"
                      ? "bg-red-100 text-red-600"
                      : course.category === "Engineering"
                        ? "bg-blue-100 text-blue-600"
                        : course.category === "Commerce"
                          ? "bg-amber-100 text-amber-600"
                          : course.category === "Law"
                            ? "bg-green-100 text-green-600"
                            : course.category === "Science"
                              ? "bg-purple-100 text-purple-600"
                              : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    course.type === "PG" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {course.type}
                </span>
              </div>

              <h3 className="font-semibold text-[#1a365d] mb-2 group-hover:text-[#0E74D2] transition-colors">
                {course.name}
              </h3>

              <div className="flex items-center gap-4 text-sm text-[#4a5568]">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  {course.category}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-[#4a5568]">View Details</span>
                <ChevronRight className="w-4 h-4 text-[#0E74D2] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Image Banner */}
        <div className="relative rounded-3xl overflow-hidden">
          <img src="/diverse-students-in-library-studying-together-mode.jpg" alt="Students studying" className="w-full h-[300px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E74D2]/90 to-[#0E74D2]/40"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-12 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Right Course. Right Career. Right Now.</h3>
              <p className="text-white/80 mb-6">
                Let our experts help you choose the perfect program that shapes your future.
              </p>
              <a
                href="tel:9578599785"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0E74D2] rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Counseling
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
