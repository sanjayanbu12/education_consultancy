"use client"

import { Building2, MapPin, Star, Award, CheckCircle, GraduationCap, TrendingUp, ArrowRight, Calendar, Users, Sparkles, Trophy, Target } from "lucide-react"
import Link from "next/link"

const topColleges = [
    {
        name: "AMS College",
        location: "Namakkal, Tamil Nadu",
        fullName: "Annai Mathammal Sheela Engineering College",
        rating: 4.8,
        type: "Engineering",
        established: "2008",
        students: "2000+",
        placement: "100%",
        highlights: ["100% Placement", "Modern Infrastructure", "Industry Partnerships", "Research Center"],
        courses: ["B.E/B.Tech", "M.E/M.Tech", "MBA"],
        color: "from-blue-600 to-blue-800",
        accentColor: "blue",
        slug: "ams-namakkal"
    },
    {
        name: "Gnanamani College",
        location: "Salem, Tamil Nadu",
        fullName: "Gnanamani College of Technology",
        rating: 4.7,
        type: "Engineering & Technology",
        established: "1998",
        students: "1800+",
        placement: "95%",
        highlights: ["Expert Faculty", "Modern Labs", "Industry Curriculum", "Active Placements"],
        courses: ["B.E/B.Tech", "M.E/M.Tech", "MCA"],
        color: "from-purple-600 to-purple-800",
        accentColor: "purple",
        slug: "gnanamani-salem"
    },
    {
        name: "Vivekanandha College",
        location: "Erode, Tamil Nadu",
        fullName: "Vivekanandha College of Engineering for Women",
        rating: 4.6,
        type: "Women's Engineering",
        established: "2001",
        students: "1500+",
        placement: "92%",
        highlights: ["Women Empowerment", "Safe Campus", "Skill Development", "Strong Alumni"],
        courses: ["B.E/B.Tech", "M.E/M.Tech"],
        color: "from-pink-600 to-pink-800",
        accentColor: "pink",
        slug: "vivekanandha-erode"
    },
    {
        name: "IMA College",
        location: "Chennai, Tamil Nadu",
        fullName: "Institute of Management and Administration",
        rating: 4.9,
        type: "Management & Business",
        established: "1995",
        students: "800+",
        placement: "98%",
        highlights: ["Top MBA Program", "Corporate Tie-ups", "International Exposure", "Entrepreneurship"],
        courses: ["MBA", "PGDM", "Executive Programs"],
        color: "from-orange-600 to-orange-800",
        accentColor: "orange",
        slug: "ima-chennai"
    },
    {
        name: "Dhanalakshmi College",
        location: "Coimbatore, Tamil Nadu",
        fullName: "Dhanalakshmi College of Engineering",
        rating: 4.7,
        type: "Engineering",
        established: "2002",
        students: "2200+",
        placement: "96%",
        highlights: ["Industry Training", "Research Excellence", "Smart Classrooms", "Global Collaborations"],
        courses: ["B.E/B.Tech", "M.E/M.Tech", "MBA"],
        color: "from-teal-600 to-teal-800",
        accentColor: "teal",
        slug: "dhanalakshmi-coimbatore"
    },
    {
        name: "EASA College",
        location: "Walayar, Kerala",
        fullName: "EASA College of Engineering and Technology",
        rating: 4.5,
        type: "Engineering & Technology",
        established: "2010",
        students: "1600+",
        placement: "90%",
        highlights: ["Scenic Campus", "Industry Internships", "Innovation Lab", "Sports & Cultural"],
        courses: ["B.Tech", "M.Tech"],
        color: "from-green-600 to-green-800",
        accentColor: "green",
        slug: "easa-walayar"
    }
]

export default function TopCollegesSection() {
    return (
        <section id="top-colleges" className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Premier Educational Institutions</span>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-light text-[#1a1a1a] dark:text-gray-100 mb-6">
                        Top Colleges in
                        <span className="block mt-2 font-medium bg-gradient-to-r from-[#0E74D2] to-[#0a5ba8] bg-clip-text text-transparent">
                            India
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Handpicked premier institutions for excellence in academics, infrastructure, and placements
                    </p>
                </div>

                {/* Colleges Grid - Unique Staggered Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {topColleges.map((college, index) => (
                        <div
                            key={index}
                            className="group relative"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Main Card */}
                            <div className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-[#0E74D2] dark:hover:border-[#0E74D2] transition-all duration-300 hover:shadow-lg">

                                {/* Gradient Accent Bar */}
                                <div className={`h-1.5 bg-gradient-to-r ${college.color}`} />

                                {/* Card Content */}
                                <div className="p-6">

                                    {/* Header Section */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className={`p-2 bg-gradient-to-br ${college.color} rounded-xl`}>
                                                    <Building2 className="w-5 h-5 text-white" />
                                                </div>
                                                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                                                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                                    <span className="text-xs font-bold text-amber-700 dark:text-amber-300">{college.rating}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-[#0E74D2] transition-colors">
                                                {college.name}
                                            </h3>

                                            <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 mb-3">
                                                <MapPin className="w-3.5 h-3.5" />
                                                <span className="text-xs">{college.location}</span>
                                            </div>

                                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                                                {college.fullName}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-3 gap-2 mb-4">
                                        <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-xl border border-blue-100 dark:border-blue-800">
                                            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                                            <div className="text-xs font-bold text-blue-700 dark:text-blue-300">{college.established}</div>
                                            <div className="text-[10px] text-blue-600/70 dark:text-blue-400/70">Est.</div>
                                        </div>
                                        <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10 rounded-xl border border-purple-100 dark:border-purple-800">
                                            <Users className="w-4 h-4 text-purple-600 dark:text-purple-400 mx-auto mb-1" />
                                            <div className="text-xs font-bold text-purple-700 dark:text-purple-300">{college.students}</div>
                                            <div className="text-[10px] text-purple-600/70 dark:text-purple-400/70">Students</div>
                                        </div>
                                        <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/10 rounded-xl border border-green-100 dark:border-green-800">
                                            <Trophy className="w-4 h-4 text-green-600 dark:text-green-400 mx-auto mb-1" />
                                            <div className="text-xs font-bold text-green-700 dark:text-green-300">{college.placement}</div>
                                            <div className="text-[10px] text-green-600/70 dark:text-green-400/70">Placed</div>
                                        </div>
                                    </div>

                                    {/* Type Badge */}
                                    <div className="mb-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#0E74D2] to-[#0a5ba8] text-white rounded-lg text-xs font-semibold shadow-lg shadow-blue-500/30">
                                            <Target className="w-3 h-3" />
                                            {college.type}
                                        </span>
                                    </div>

                                    {/* Highlights */}
                                    <div className="mb-4">
                                        <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-2.5 flex items-center gap-1.5">
                                            <TrendingUp className="w-3.5 h-3.5 text-[#0E74D2]" />
                                            Key Highlights
                                        </h4>
                                        <div className="space-y-1.5">
                                            {college.highlights.slice(0, 3).map((highlight, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <div className="mt-0.5">
                                                        <CheckCircle className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                                                    </div>
                                                    <span className="text-xs text-gray-600 dark:text-gray-400">
                                                        {highlight}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Courses */}
                                    <div className="mb-5">
                                        <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-1.5">
                                            <GraduationCap className="w-3.5 h-3.5 text-[#0E74D2]" />
                                            Courses Offered
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {college.courses.map((course, idx) => (
                                                <span key={idx} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-[11px] font-medium border border-gray-200 dark:border-gray-700">
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Button - Compact, Right Aligned */}
                                    <div className="flex justify-end">
                                        <Link
                                            href={`/college/${college.slug}`}
                                            className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0E74D2] text-white text-sm font-semibold hover:bg-[#0a5ba8] transition-all duration-300"
                                        >
                                            <span>View Details</span>
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button with Enhanced Design */}
                <div className="text-center">
                    <a
                        href="#colleges"
                        className="group/cta inline-flex items-center gap-3 px-10 py-5 bg-[#0E74D2] text-white rounded-2xl font-bold text-lg hover:bg-[#0a5ba8] transition-all duration-300 hover:scale-105"
                    >
                        <span className="flex items-center gap-3">
                            <Sparkles className="w-5 h-5" />
                            Explore All Colleges
                            <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-2 transition-transform" />
                        </span>
                    </a>
                </div>

            </div>
        </section>
    )
}
