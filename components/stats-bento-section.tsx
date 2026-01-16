"use client"

import { Building, BookOpen, Users, Trophy, TrendingUp, Target } from "lucide-react"

export default function StatsBentoSection() {
  return (
    <section className="w-full py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[140px]">
          {/* Large Card - Spans 2x2 */}
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-[#0E74D2] to-[#0a5ba8] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
            <div>
              <Building className="w-10 h-10 text-white/80 mb-4" />
              <div className="text-5xl font-bold text-white">5000+</div>
            </div>
            <div>
              <div className="text-xl font-semibold text-white">Partner Colleges</div>
              <div className="text-blue-200">Across India</div>
            </div>
          </div>

          {/* Medium Card */}
          <div className="col-span-2 bg-[#f0f7ff] dark:bg-black rounded-3xl p-6 flex flex-col justify-between border dark:border-gray-800">
            <BookOpen className="w-8 h-8 text-[#0E74D2] dark:text-blue-400" />
            <div>
              <div className="text-3xl font-bold text-[#1a365d] dark:text-gray-100">200+</div>
              <div className="text-[#4a5568] dark:text-gray-400">Courses Offered</div>
            </div>
          </div>

          {/* Image Card - Updated placeholder query */}
          <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative">
            <img src="/modern-university-campus-building-with-students-wa.jpg" alt="University Campus" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <div className="text-white font-semibold">Premium Institutions</div>
              <div className="text-white/70 text-sm">Top-rated colleges nationwide</div>
            </div>
          </div>

          {/* Small Cards Row */}
          <div className="bg-green-50 rounded-3xl p-4 flex flex-col justify-between border border-green-100">
            <Users className="w-6 h-6 text-green-600" />
            <div>
              <div className="text-2xl font-bold text-green-700">10K+</div>
              <div className="text-green-600 text-xs">Students Guided</div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-3xl p-4 flex flex-col justify-between border border-amber-100">
            <Trophy className="w-6 h-6 text-amber-600" />
            <div>
              <div className="text-2xl font-bold text-amber-700">15+</div>
              <div className="text-amber-600 text-xs">Years Experience</div>
            </div>
          </div>

          {/* Wide Card */}
          <div className="col-span-2 md:col-span-4 bg-gradient-to-r from-[#1a365d] to-[#2d4a6f] dark:from-gray-800 dark:to-black rounded-3xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-lg">MBA College Rankings</div>
                <div className="text-blue-200 text-sm">Find top-ranked institutions for your MBA journey</div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
              <Target className="w-4 h-4" />
              Apply Online
            </div>
          </div>

          {/* Admission Procedure Card */}
          <div className="col-span-2 bg-[#0E74D2]/5 dark:bg-blue-500/10 rounded-3xl p-6 flex flex-col justify-between border border-[#0E74D2]/10 dark:border-blue-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0E74D2] dark:bg-blue-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-[#1a365d] dark:text-gray-200">Admission Procedure</span>
            </div>
            <p className="text-[#4a5568] dark:text-gray-400 text-sm">Step-by-step guidance for smooth admissions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
