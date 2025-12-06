"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, ChevronRight, BookOpen, Clock, Award, TrendingUp, Users, Star, Grid3x3, List, ArrowRight, X, Zap } from "lucide-react"

const categories = ["All", "Medical", "Engineering", "Science", "Commerce", "Arts", "Law"]

const courses = [
  { slug: "mbbs", name: "MBBS", category: "Medical", duration: "5.5 Years", type: "UG", popular: true, students: "2,500+", rating: 4.9 },
  { slug: "bds", name: "BDS", category: "Medical", duration: "5 Years", type: "UG", popular: false, students: "1,200+", rating: 4.7 },
  { slug: "bsc-nursing", name: "B.Sc Nursing", category: "Medical", duration: "4 Years", type: "UG", popular: true, students: "3,000+", rating: 4.8 },
  { slug: "pharm-d", name: "Pharm.D", category: "Medical", duration: "6 Years", type: "UG", popular: false, students: "800+", rating: 4.6 },

  { slug: "btech-cse", name: "B.Tech Computer Science", category: "Engineering", duration: "4 Years", type: "UG", popular: true, students: "4,200+", rating: 4.9 },
  { slug: "btech-ai", name: "B.Tech AI & Data Science", category: "Engineering", duration: "4 Years", type: "UG", popular: true, students: "1,800+", rating: 4.8 },
  { slug: "mtech", name: "M.Tech", category: "Engineering", duration: "2 Years", type: "PG", popular: false, students: "950+", rating: 4.7 },

  { slug: "bcom", name: "B.Com", category: "Commerce", duration: "3 Years", type: "UG", popular: false, students: "2,100+", rating: 4.5 },
  { slug: "mba", name: "MBA", category: "Commerce", duration: "2 Years", type: "PG", popular: true, students: "3,500+", rating: 4.9 },
  { slug: "mca", name: "MCA", category: "Commerce", duration: "2 Years", type: "PG", popular: true, students: "1,600+", rating: 4.7 },

  { slug: "ba-llb", name: "BA LLB", category: "Law", duration: "5 Years", type: "UG", popular: true, students: "1,400+", rating: 4.8 },
  { slug: "llm", name: "LLM", category: "Law", duration: "2 Years", type: "PG", popular: false, students: "600+", rating: 4.6 },

  { slug: "ba", name: "BA", category: "Arts", duration: "3 Years", type: "UG", popular: false, students: "1,800+", rating: 4.4 },
  { slug: "bsc-physics", name: "B.Sc Physics", category: "Science", duration: "3 Years", type: "UG", popular: false, students: "900+", rating: 4.5 },
]

export default function CourseCatalogSection() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="courses" className="w-full py-20 bg-gradient-to-b from-[#f8fafc] dark:from-gray-900 to-white dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">


          <h2 className="text-5xl lg:text-6xl font-light text-[#1a1a1a] dark:text-gray-100 mb-6">
            Find Your Perfect
            <span className="block mt-2 font-medium bg-gradient-to-r from-[#0E74D2] to-[#0a5ba8] bg-clip-text text-transparent">
              Academic Path
            </span>
          </h2>

          <p className="text-xl text-[#5a5a5a] dark:text-gray-400 max-w-2xl mx-auto font-light">
            Discover programs tailored to your aspirations across Medicine, Engineering, Commerce, and more
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: <BookOpen className="w-5 h-5" />, label: "200+ Courses" },
              { icon: <Users className="w-5 h-5" />, label: "5000+ Colleges" },
              { icon: <Award className="w-5 h-5" />, label: "100% Support" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-full shadow-md border border-gray-100 dark:border-gray-800">
                <div className="text-[#0E74D2] dark:text-blue-400">{stat.icon}</div>
                <span className="text-sm font-medium text-[#1a1a1a] dark:text-gray-200">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COMPACT SEARCH & FILTERS */}
        <div className="mb-8">
          {/* Search Bar with View Toggle */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a5a5a]" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-[#0E74D2] dark:focus:border-blue-500 focus:ring-2 focus:ring-[#0E74D2]/20 dark:focus:ring-blue-500/20 outline-none text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* View Toggle - Compact */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-lg ${viewMode === "grid"
                    ? "bg-[#0E74D2] text-white"
                    : "bg-white dark:bg-gray-900 text-[#5a5a5a] dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-[#0E74D2]/30"
                  }`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-lg ${viewMode === "list"
                    ? "bg-[#0E74D2] text-white"
                    : "bg-white dark:bg-gray-900 text-[#5a5a5a] dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-[#0E74D2]/30"
                  }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Category Pills - Compact */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${activeCategory === category
                    ? "bg-[#0E74D2] text-white"
                    : "bg-white dark:bg-gray-900 text-[#5a5a5a] dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-[#0E74D2]/30"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-[#5a5a5a] dark:text-gray-400">
            <span className="font-semibold text-[#1a1a1a] dark:text-gray-200">{filteredCourses.length}</span> programs found
          </p>
        </div>

        {/* COURSE CARDS - GRID VIEW */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCourses.length === 0 && (
              <div className="col-span-full text-center py-16">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-[#5a5a5a]">No courses found</p>
              </div>
            )}

            {filteredCourses.map((course, index) => (
              <div
                key={index}
                onClick={() => router.push(`/course-info/${course.slug}`)}
                className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:border-[#0E74D2]/30 dark:hover:border-blue-500/30 hover:shadow-lg cursor-pointer relative"
              >
                {course.popular && (
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-amber-400 text-white text-xs font-semibold rounded-full shadow">
                    Popular
                  </div>
                )}

                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${course.category === "Medical"
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
                  <span className={`text-xs font-medium px-2 py-1 rounded ${course.type === "PG" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
                    }`}>
                    {course.type}
                  </span>
                </div>

                <h3 className="font-semibold text-[#1a1a1a] dark:text-gray-100 mb-3 text-sm leading-tight">
                  {course.name}
                </h3>

                <div className="space-y-1.5 mb-3 text-xs text-[#5a5a5a] dark:text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-[#0E74D2] dark:text-blue-400 text-xs font-medium">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* LIST VIEW */}
        {viewMode === "list" && (
          <div className="space-y-3">
            {filteredCourses.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-[#5a5a5a]">No courses found</p>
              </div>
            )}

            {filteredCourses.map((course, index) => (
              <div
                key={index}
                onClick={() => router.push(`/course-info/${course.slug}`)}
                className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 hover:border-[#0E74D2]/30 dark:hover:border-blue-500/30 hover:shadow-md cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">

                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${course.category === "Medical"
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
                    <BookOpen className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-[#1a1a1a] dark:text-gray-100 text-base">
                        {course.name}
                      </h3>
                      {course.popular && (
                        <span className="px-2 py-0.5 bg-amber-400 text-white text-xs font-semibold rounded whitespace-nowrap">
                          Popular
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#5a5a5a] dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>{course.category}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${course.type === "PG" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
                        }`}>
                        {course.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#0E74D2] dark:text-blue-400 text-xs font-medium sm:flex-shrink-0">
                    <span className="hidden sm:inline">Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#0E74D2] to-[#0a5ba8] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-white mb-3">Need Guidance?</h3>
          <p className="text-white/90 mb-6">
            Our experts can help you find the perfect course
          </p>
          <a
            href="tel:9578599785"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0E74D2] font-semibold rounded-lg hover:bg-gray-50"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}