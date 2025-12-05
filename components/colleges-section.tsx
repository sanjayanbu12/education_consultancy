"use client"

import { useState } from "react"
import { Building, MapPin, Phone, ChevronDown, ChevronUp, GraduationCap, FlaskConical, Cog } from "lucide-react"

const collegeCategories = [
  {
    id: "engineering",
    title: "Engineering Colleges",
    icon: <Cog className="w-5 h-5" />,
    color: "bg-blue-500",
    colleges: [
      "Hindusthan College of Engineering & Technology",
      "Karunya Institute of Technology & Sciences",
      "SNS College of Technology",
      "Karpagam Institute of Technology",
      "Sri Shakthi Institute of Engineering & Technology",
      "Nehru Institute of Engineering & Technology",
      "Park College of Engineering & Technology",
      "JCT College of Engineering & Technology",
      "Dr. NGP Institute of Technology",
      "Rathinam College of Engineering",
      "RVS College of Engineering & Technology",
      "CMS College of Engineering & Technology",
    ],
  },
  {
    id: "arts",
    title: "Arts & Science Colleges",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-purple-500",
    colleges: [
      "SNS College of Arts & Science",
      "Karpagam Arts & Science College",
      "Hindusthan College of Arts & Science",
      "Rathinam College of Arts & Science",
      "Nehru Arts & Science",
      "RVS College of Arts & Science",
      "GRD College of Arts & Science",
      "Avinashilingam University for Women",
      "CMS College of Arts & Science",
      "Kongunadu Arts & Science College",
      "VLB Janakiammal College of Arts & Science",
      "Sri Ramakrishna College of Arts & Science for Women",
    ],
  },
  {
    id: "health",
    title: "Allied Health Science Colleges",
    icon: <FlaskConical className="w-5 h-5" />,
    color: "bg-green-500",
    colleges: [
      "Kongunadu Institute of Allied Health Sciences",
      "Karpagam Faculty of Medical Sciences & Research",
      "SNS College of Allied Health Sciences",
      "Hindusthan College of Allied Health Sciences",
      "Ganga College of Allied Health Sciences",
      "Abhirami College of Allied Health Sciences",
      "VG Institute of Paramedical Sciences",
      "RVS College of Allied Health Sciences",
      "KMCH College of Allied Health Sciences",
    ],
  },
]

export default function CollegesSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("engineering")

  return (
    <section id="colleges" className="w-full py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E74D2]/10 rounded-full mb-4">
            <Building className="w-4 h-4 text-[#0E74D2]" />
            <span className="text-[#0E74D2] text-sm font-medium">Partner Colleges</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4 text-balance">
            Top Colleges in Coimbatore
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto text-pretty">
            Best Career Guidance for Better Future - We have partnerships with leading institutions across Tamil Nadu
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Featured Image - Takes 2 columns */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl relative">
            <img
              src="/images/4.jpeg"
              alt="Top Colleges in Coimbatore - AL-HUDA Educational Consultancy"
              className="w-full h-full object-cover min-h-[500px]"
            />
          </div>

          {/* Accordion - Takes 3 columns */}
          <div className="lg:col-span-3 space-y-4">
            {collegeCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl border border-[rgba(14,116,210,0.1)] shadow-sm overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full flex items-center justify-between p-5 hover:bg-[#f8fafc] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center text-white`}
                    >
                      {category.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-[#1a365d] font-semibold">{category.title}</h3>
                      <p className="text-[#4a5568] text-sm">{category.colleges.length} institutions</p>
                    </div>
                  </div>
                  {expandedCategory === category.id ? (
                    <ChevronUp className="w-5 h-5 text-[#4a5568]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#4a5568]" />
                  )}
                </button>

                {/* Accordion Content */}
                {expandedCategory === category.id && (
                  <div className="px-5 pb-5">
                    <div className="pt-4 border-t border-gray-100">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {category.colleges.map((college, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-3 bg-[#f8fafc] rounded-lg hover:bg-[#0E74D2]/5 transition-colors"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full ${category.color} mt-2 flex-shrink-0`}></div>
                            <span className="text-[#1a365d] text-sm">{college}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Banner */}
        <div className="bg-gradient-to-r from-[#0E74D2] to-[#0a5ba8] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold">Need Admission Assistance?</h3>
              <p className="text-white/80">Contact us for expert guidance on college selection</p>
            </div>
          </div>
          <a
            href="tel:9578599785"
            className="flex items-center gap-2 px-8 py-4 bg-white text-[#0E74D2] rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call: 9578599785
          </a>
        </div>
      </div>
    </section>
  )
}
