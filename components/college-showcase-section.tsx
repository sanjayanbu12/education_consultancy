"use client"

import { useState } from "react"
import { Building, MapPin, Star, ChevronRight, Cog, GraduationCap, FlaskConical } from "lucide-react"

const collegeData = {
  engineering: {
    title: "Engineering Colleges",
    icon: <Cog className="w-5 h-5" />,
    color: "bg-blue-500",
    colleges: [
      { name: "Hindusthan College of Engineering & Technology", rating: 4.5 },
      { name: "Karunya Institute of Technology & Sciences", rating: 4.7 },
      { name: "SNS College of Technology", rating: 4.3 },
      { name: "Karpagam Institute of Technology", rating: 4.2 },
      { name: "Sri Shakthi Institute of Engineering & Technology", rating: 4.1 },
      { name: "Nehru Institute of Engineering & Technology", rating: 4.0 },
      { name: "Park College of Engineering & Technology", rating: 4.2 },
      { name: "Dr. NGP Institute of Technology", rating: 4.4 },
      { name: "Rathinam College of Engineering", rating: 4.1 },
      { name: "RVS College of Engineering & Technology", rating: 4.3 },
    ],
  },
  arts: {
    title: "Arts & Science Colleges",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-purple-500",
    colleges: [
      { name: "SNS College of Arts & Science", rating: 4.4 },
      { name: "Karpagam Arts & Science College", rating: 4.5 },
      { name: "Hindusthan College of Arts & Science", rating: 4.3 },
      { name: "Rathinam College of Arts & Science", rating: 4.2 },
      { name: "Nehru Arts & Science", rating: 4.1 },
      { name: "RVS College of Arts & Science", rating: 4.3 },
      { name: "GRD College of Arts & Science", rating: 4.0 },
      { name: "Avinashilingam University for Women", rating: 4.6 },
      { name: "CMS College of Arts & Science", rating: 4.2 },
      { name: "Kongunadu Arts & Science College", rating: 4.4 },
    ],
  },
  health: {
    title: "Allied Health Sciences",
    icon: <FlaskConical className="w-5 h-5" />,
    color: "bg-green-500",
    colleges: [
      { name: "Kongunadu Institute of Allied Health Sciences", rating: 4.5 },
      { name: "Karpagam Faculty of Medical Sciences & Research", rating: 4.7 },
      { name: "SNS College of Allied Health Sciences", rating: 4.3 },
      { name: "Hindusthan College of Allied Health Sciences", rating: 4.2 },
      { name: "Ganga College of Allied Health Sciences", rating: 4.4 },
      { name: "Abhirami College of Allied Health Sciences", rating: 4.1 },
      { name: "VG Institute of Paramedical Sciences", rating: 4.0 },
      { name: "RVS College of Allied Health Sciences", rating: 4.3 },
      { name: "KMCH College of Allied Health Sciences", rating: 4.6 },
    ],
  },
}

export default function CollegeShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"engineering" | "arts" | "health">("engineering")

  return (
    <section id="colleges" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E74D2]/10 rounded-full mb-4">
            <Building className="w-4 h-4 text-[#0E74D2]" />
            <span className="text-[#0E74D2] text-sm font-medium">Partner Institutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">Top Colleges in Coimbatore</h2>
          <p className="text-[#4a5568] text-lg">
            Best Career Guidance for Better Future - Partnered with leading institutions across Tamil Nadu
          </p>
        </div>

        {/* Split Layout - Image + Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left - Featured Image Stack */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/modern-college-campus-entrance-gate-with-students-.jpg" alt="College Campus" className="w-full h-[350px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-white/80 text-sm">Coimbatore, Tamil Nadu</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Premier Educational Hub</h3>
              </div>
            </div>

            {/* Mini Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-xs text-blue-600/80">Engineering</div>
              </div>
              <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
                <div className="text-2xl font-bold text-purple-600">40+</div>
                <div className="text-xs text-purple-600/80">Arts & Science</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
                <div className="text-2xl font-bold text-green-600">20+</div>
                <div className="text-xs text-green-600/80">Medical</div>
              </div>
            </div>
          </div>

          {/* Right - Tabbed College List */}
          <div className="bg-[#f8fafc] rounded-3xl p-6 border border-gray-100">
            {/* Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {Object.entries(collegeData).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as "engineering" | "arts" | "health")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === key
                      ? `${data.color} text-white shadow-lg`
                      : "bg-white text-[#4a5568] border border-gray-200"
                  }`}
                >
                  {data.icon}
                  {data.title}
                </button>
              ))}
            </div>

            {/* College List */}
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {collegeData[activeTab].colleges.map((college, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-gray-100 hover:border-[#0E74D2]/30 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 ${collegeData[activeTab].color} rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1a365d] group-hover:text-[#0E74D2] transition-colors text-sm">
                          {college.name}
                        </h4>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <span className="text-xs text-[#4a5568]">{college.rating}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#4a5568] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0E74D2] to-[#0a5ba8] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">For Admission Assistance</h3>
              <p className="text-blue-200">Contact us for expert guidance on college selection</p>
            </div>
          </div>
          <a
            href="tel:9578599785"
            className="flex items-center gap-2 px-8 py-4 bg-white text-[#0E74D2] rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
          >
            Call: 9578599785
          </a>
        </div>
      </div>
    </section>
  )
}
