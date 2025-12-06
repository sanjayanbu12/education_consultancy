"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, ChevronRight, BookOpen, Clock, Award } from "lucide-react"

const categories = ["All", "Medical", "Engineering", "Science", "Commerce", "Arts", "Law"]

const courses = [
  { slug: "mbbs", name: "MBBS", category: "Medical", duration: "5.5 Years", type: "UG", popular: true },
  { slug: "bds", name: "BDS", category: "Medical", duration: "5 Years", type: "UG", popular: false },
  { slug: "bsc-nursing", name: "B.Sc Nursing", category: "Medical", duration: "4 Years", type: "UG", popular: true },
  { slug: "pharm-d", name: "Pharm.D", category: "Medical", duration: "6 Years", type: "UG", popular: false },

  { slug: "btech-cse", name: "B.Tech Computer Science", category: "Engineering", duration: "4 Years", type: "UG", popular: true },
  { slug: "btech-ai", name: "B.Tech AI & Data Science", category: "Engineering", duration: "4 Years", type: "UG", popular: true },
  { slug: "mtech", name: "M.Tech", category: "Engineering", duration: "2 Years", type: "PG", popular: false },

  { slug: "bcom", name: "B.Com", category: "Commerce", duration: "3 Years", type: "UG", popular: false },
  { slug: "mba", name: "MBA", category: "Commerce", duration: "2 Years", type: "PG", popular: true },
  { slug: "mca", name: "MCA", category: "Commerce", duration: "2 Years", type: "PG", popular: true },

  { slug: "ba-llb", name: "BA LLB", category: "Law", duration: "5 Years", type: "UG", popular: true },
  { slug: "llm", name: "LLM", category: "Law", duration: "2 Years", type: "PG", popular: false },

  { slug: "ba", name: "BA", category: "Arts", duration: "3 Years", type: "UG", popular: false },
  { slug: "bsc-physics", name: "B.Sc Physics", category: "Science", duration: "3 Years", type: "UG", popular: false },
]

export default function CourseCatalogSection() {
  const router = useRouter()
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

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E74D2]/10 rounded-full mb-4">
              <BookOpen className="w-4 h-4 text-[#0E74D2]" />
              <span className="text-[#0E74D2] text-sm font-medium">Course Catalog</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-2">
              200+ Courses Available
            </h2>

            <p className="text-[#4a5568]">
              Find the perfect program for your career aspirations
            </p>
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

        {/* CATEGORY PILLS */}
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

        {/* COURSE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">

          {filteredCourses.length === 0 && (
            <p className="col-span-full text-center text-[#4a5568]">No courses found.</p>
          )}

          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#0E74D2]/30 hover:shadow-lg transition-all cursor-pointer relative"
            >
              {/* POPULAR BADGE */}
              {course.popular && (
                <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full shadow-sm border border-amber-200">
                  Popular
                </div>
              )}

              {/* Category Icon + Course Type */}
              <div className="flex items-start justify-between mb-4 mt-1">
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
                    course.type === "PG"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {course.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[#1a365d] mb-2 group-hover:text-[#0E74D2] transition-colors">
                {course.name}
              </h3>

              {/* Duration + Category */}
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

              {/* VIEW DETAILS */}
              <div
                onClick={() => router.push(`/course-info/${course.slug}`)}
                className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between hover:opacity-70 transition cursor-pointer"
              >
                <span className="text-xs text-[#4a5568]">View Details</span>
                <ChevronRight className="w-4 h-4 text-[#0E74D2]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
