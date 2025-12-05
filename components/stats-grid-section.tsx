"use client"

import { Building, BookOpen, Users, Award, TrendingUp, Globe } from "lucide-react"

export default function StatsGridSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[120px]">
          {/* Large Featured Card - Spans 2x2 */}
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-[#0E74D2] to-[#0a5ba8] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div>
              <Building className="w-10 h-10 text-white/80 mb-2" />
              <h3 className="text-white/80 text-sm font-medium">Partner Institutions</h3>
            </div>
            <div>
              <div className="text-white text-5xl md:text-6xl font-bold mb-1">5000+</div>
              <p className="text-white/70 text-sm">Leading colleges & universities across India</p>
            </div>
          </div>

          {/* Courses Card */}
          <div className="col-span-1 row-span-1 bg-[#f0f7ff] rounded-2xl p-5 flex flex-col justify-between border border-[rgba(14,116,210,0.1)]">
            <BookOpen className="w-6 h-6 text-[#0E74D2]" />
            <div>
              <div className="text-[#1a365d] text-2xl font-bold">200+</div>
              <div className="text-[#4a5568] text-xs">Courses Offered</div>
            </div>
          </div>

          {/* Students Card */}
          <div className="col-span-1 row-span-1 bg-[#1a365d] rounded-2xl p-5 flex flex-col justify-between">
            <Users className="w-6 h-6 text-[#60a5fa]" />
            <div>
              <div className="text-white text-2xl font-bold">10K+</div>
              <div className="text-white/70 text-xs">Students Guided</div>
            </div>
          </div>

          {/* Wide Image Card - Spans 2 columns */}
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
            <img
              src="/images/3.jpeg"
              alt="Right Course Right Career"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-white text-lg font-semibold">Right Course. Right Career.</div>
              <div className="text-white/80 text-sm">Right Now.</div>
            </div>
          </div>

          {/* Success Rate Card */}
          <div className="col-span-1 row-span-1 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-5 flex flex-col justify-between">
            <TrendingUp className="w-6 h-6 text-white/80" />
            <div>
              <div className="text-white text-2xl font-bold">98%</div>
              <div className="text-white/80 text-xs">Success Rate</div>
            </div>
          </div>

          {/* Awards Card */}
          <div className="col-span-1 row-span-1 bg-amber-50 rounded-2xl p-5 flex flex-col justify-between border border-amber-100">
            <Award className="w-6 h-6 text-amber-600" />
            <div>
              <div className="text-[#1a365d] text-2xl font-bold">15+</div>
              <div className="text-[#4a5568] text-xs">Years Experience</div>
            </div>
          </div>

          {/* Locations Card - Hidden on mobile */}
          <div className="hidden lg:flex col-span-2 row-span-1 bg-[#f8fafc] rounded-2xl p-5 items-center gap-4 border border-[rgba(14,116,210,0.1)]">
            <Globe className="w-8 h-8 text-[#0E74D2]" />
            <div>
              <div className="text-[#1a365d] text-xl font-bold">Pan-India Network</div>
              <div className="text-[#4a5568] text-sm">Partnerships with top institutions across all states</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
