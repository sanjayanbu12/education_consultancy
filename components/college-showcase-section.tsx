"use client"

import { useState } from "react"
import { Building, MapPin, Star, ChevronRight, Cog, GraduationCap, FlaskConical, Filter, Search, Heart, Pill, Stethoscope, Briefcase, Leaf } from "lucide-react"
import { allColleges, getCitiesByState, getStates, type College } from "@/data/colleges-data"

// ========================================================================================
// ⭐ TYPE CONFIGURATION
// ========================================================================================

const typeConfig = {
  "All Types": { label: "All Types", icon: <Building className="w-4 h-4" />, color: "bg-gray-500" },
  "engineering": { label: "Engineering", icon: <Cog className="w-4 h-4" />, color: "bg-blue-500" },
  "medical": { label: "Medical (MBBS)", icon: <Stethoscope className="w-4 h-4" />, color: "bg-red-500" },
  "dental": { label: "Dental (BDS)", icon: <Heart className="w-4 h-4" />, color: "bg-pink-500" },
  "nursing": { label: "Nursing", icon: <Heart className="w-4 h-4" />, color: "bg-teal-500" },
  "pharmacy": { label: "Pharmacy", icon: <Pill className="w-4 h-4" />, color: "bg-indigo-500" },
  "physiotherapy": { label: "Physiotherapy", icon: <FlaskConical className="w-4 h-4" />, color: "bg-cyan-500" },
  "mba": { label: "MBA", icon: <Briefcase className="w-4 h-4" />, color: "bg-orange-500" },
  "homoeopathy": { label: "Homoeopathy", icon: <Leaf className="w-4 h-4" />, color: "bg-green-500" },
  "ayurveda": { label: "Ayurveda", icon: <Leaf className="w-4 h-4" />, color: "bg-lime-500" },
  "arts": { label: "Arts & Science", icon: <GraduationCap className="w-4 h-4" />, color: "bg-purple-500" },
  "health": { label: "Allied Health", icon: <FlaskConical className="w-4 h-4" />, color: "bg-emerald-500" },
}

// ========================================================================================
// ⭐ COMPONENT
// ========================================================================================

export default function CollegeShowcaseSection() {
  const [selectedState, setSelectedState] = useState<string>("Tamil Nadu")
  const [selectedCity, setSelectedCity] = useState<string>("All Cities")
  const [selectedType, setSelectedType] = useState<string>("All Types")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Get unique states and cities
  const states = getStates()
  const cities = selectedState === "All States"
    ? ["All Cities"]
    : ["All Cities", ...getCitiesByState(selectedState)]

  const types = Object.entries(typeConfig)

  // Filter colleges
  const filteredColleges = allColleges.filter(college => {
    const stateMatch = selectedState === "All States" || college.state === selectedState
    const cityMatch = selectedCity === "All Cities" || college.city === selectedCity
    const typeMatch = selectedType === "All Types" || college.type === selectedType
    const searchMatch = searchQuery === "" ||
      college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      college.city.toLowerCase().includes(searchQuery.toLowerCase())

    return stateMatch && cityMatch && typeMatch && searchMatch
  })

  // Get current type info
  const currentTypeInfo = typeConfig[selectedType as keyof typeof typeConfig] || typeConfig["All Types"]

  // Get stats for selected state
  const getTypeCount = (type: string) => {
    return allColleges.filter(c => c.type === type && c.state === selectedState).length
  }

  return (
    <section id="colleges" className="w-full py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ---------- SECTION HEADER ---------- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* <h2 className="text-4xl md:text-5xl font-light text-[#1a365d] dark:text-gray-100 mb-4">
            Top Colleges Across India
          </h2> */}

          <h2 className="text-5xl lg:text-6xl font-light text-[#1a1a1a] dark:text-gray-100 mb-6">
            Top Colleges
            <span className="block mt-2 font-medium bg-gradient-to-r from-[#0E74D2] to-[#0a5ba8] bg-clip-text text-transparent">
              Across India
            </span>
          </h2>

          <p className="text-[#4a5568] dark:text-gray-400 text-lg">
            Comprehensive database of 400+ colleges from Tamil Nadu, Karnataka, and Kerala
          </p>
        </div>

        {/* ---------- FILTERS ---------- */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search colleges by name or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0E74D2] dark:focus:ring-blue-500"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-zinc-900 rounded-lg">
              <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filters:</span>
            </div>

            {/* State Filter */}
            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value)
                setSelectedCity("All Cities")
              }}
              className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-gray-100 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0E74D2] dark:focus:ring-blue-500 cursor-pointer"
            >
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>

            {/* City Filter */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-gray-100 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0E74D2] dark:focus:ring-blue-500 cursor-pointer"
              disabled={selectedState === "All States"}
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Type Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {types.map(([key, type]) => (
              <button
                key={key}
                onClick={() => setSelectedType(key)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedType === key
                  ? `${type.color} text-white shadow-lg`
                  : "bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#0E74D2] dark:hover:border-blue-500"
                  }`}
              >
                {type.icon}
                {type.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing <span className="font-semibold text-[#0E74D2] dark:text-blue-400">{filteredColleges.length}</span> colleges
              {selectedState !== "All States" && ` in ${selectedState}`}
              {selectedCity !== "All Cities" && ` - ${selectedCity}`}
            </p>
          </div>
        </div>

        {/* ---------- MAIN CONTENT GRID ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* ---------- LEFT: STATS & IMAGE ---------- */}
          <div className="lg:col-span-1 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/modern-college-campus-entrance-gate-with-students-.jpg"
                alt="College Campus"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-white/80 text-sm">{selectedState}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Premier Educational Hub</h3>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-3 text-center border border-blue-100 dark:border-blue-800">
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {getTypeCount("engineering")}
                </div>
                <div className="text-xs text-blue-600/80 dark:text-blue-400/80">Engineering</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-3 text-center border border-red-100 dark:border-red-800">
                <div className="text-xl font-bold text-red-600 dark:text-red-400">
                  {getTypeCount("medical")}
                </div>
                <div className="text-xs text-red-600/80 dark:text-red-400/80">Medical</div>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-3 text-center border border-teal-100 dark:border-teal-800">
                <div className="text-xl font-bold text-teal-600 dark:text-teal-400">
                  {getTypeCount("nursing")}
                </div>
                <div className="text-xs text-teal-600/80 dark:text-teal-400/80">Nursing</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-3 text-center border border-orange-100 dark:border-orange-800">
                <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
                  {getTypeCount("mba")}
                </div>
                <div className="text-xs text-orange-600/80 dark:text-orange-400/80">MBA</div>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-2xl p-3 text-center border border-pink-100 dark:border-pink-800">
                <div className="text-xl font-bold text-pink-600 dark:text-pink-400">
                  {getTypeCount("dental")}
                </div>
                <div className="text-xs text-pink-600/80 dark:text-pink-400/80">Dental</div>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-3 text-center border border-indigo-100 dark:border-indigo-800">
                <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                  {getTypeCount("pharmacy")}
                </div>
                <div className="text-xs text-indigo-600/80 dark:text-indigo-400/80">Pharmacy</div>
              </div>
            </div>
          </div>

          {/* ---------- RIGHT: COLLEGE LIST ---------- */}
          <div className="lg:col-span-2 bg-[#f8fafc] dark:bg-black rounded-3xl p-6 border border-gray-100 dark:border-gray-800">

            {filteredColleges.length === 0 ? (
              <div className="text-center py-12">
                <Building className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">No colleges found</h3>
                <p className="text-gray-500 dark:text-gray-500">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {filteredColleges.map((college, index) => {
                  const typeInfo = typeConfig[college.type as keyof typeof typeConfig] || typeConfig["All Types"]

                  return (
                    <div
                      key={index}
                      className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-[#0E74D2]/30 dark:hover:border-blue-500/30 hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <div
                            className={`w-10 h-10 ${typeInfo.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}
                          >
                            {typeInfo.icon}
                          </div>

                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-[#1a365d] dark:text-gray-200 group-hover:text-[#0E74D2] dark:group-hover:text-blue-400 transition-colors text-sm mb-1">
                              {college.name}
                            </h4>

                            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{college.city}, {college.state}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                <span className="font-medium">{college.rating}</span>
                              </div>
                              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${typeInfo.color} text-white`}>
                                {typeInfo.label}
                              </span>
                            </div>
                          </div>
                        </div>

                        <ChevronRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
