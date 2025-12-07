"use client"

import { useState } from "react"
import { Building, MapPin, Star, ChevronRight, Cog, GraduationCap, FlaskConical } from "lucide-react"

// ========================================================================================
// ⭐ UPDATED ENGINEERING COLLEGES (ALL REGIONS ADDED AS PER YOUR DATA)
// ========================================================================================

const engineeringColleges = [
  // --------------------- SALEM ---------------------
  { name: "Sona College of Technology, Salem", rating: 4.6 },
  { name: "Vinayaka Mission's Kirupanada Variyar Engineering College, Salem", rating: 4.3 },
  { name: "Indian Institute of Handloom Technology, Salem", rating: 4.1 },
  { name: "A.V.S. Engineering College, Salem", rating: 4.0 },
  { name: "Annaporna Engineering College, Salem", rating: 4.1 },
  { name: "AVS Technical Campus, Salem", rating: 4.0 },
  { name: "Bharathiyar Institute of Engineering for Women, Attur", rating: 4.2 },
  { name: "Dhirajlal Gandhi College of Technology, Salem", rating: 4.3 },
  { name: "Ganesh College of Engineering, Salem", rating: 4.1 },
  { name: "Greentech College of Engineering for Women, Attur", rating: 4.0 },
  { name: "Knowledge Institute of Technology, Salem", rating: 4.4 },
  { name: "Mahendra College of Engineering, Valapadi", rating: 4.2 },
  { name: "Narasu's Sarathy Institute of Technology, Omalur", rating: 4.0 },
  { name: "Rabidhranath Tagore College of Engineering for Women, Sankari", rating: 4.1 },
  { name: "S.R.S. College of Engineering & Technology, Salem", rating: 4.0 },
  { name: "Salem College of Engineering and Technology, Salem", rating: 4.0 },
  { name: "Shree Sathyam College of Engineering and Technology, Salem", rating: 4.2 },
  { name: "Spectrum College of Technology, Mettur", rating: 4.0 },
  { name: "Sri Shanmugha College of Engineering and Technology, Salem", rating: 4.1 },
  { name: "Tagore Institute of Engineering and Technology, Attur", rating: 4.0 },
  { name: "The Kavery College of Engineering, Mettur", rating: 4.0 },
  { name: "The Kavery Engineering College, Mettur", rating: 4.1 },
  { name: "V.S.A. Group of Institutions, Salem", rating: 4.2 },
  { name: "Vivekanandha College of Technology for Women, Namakkal", rating: 4.5 },

  // --------------------- CHENNAI ---------------------
  { name: "Aalim Muhammed Salegh College of Engineering, Chennai", rating: 4.2 },
  { name: "Aarupadai Veedu Institute of Technology, Kanchipuram", rating: 4.3 },
  { name: "Agni College of Technology, Chennai", rating: 4.2 },
  { name: "B.S. Abdur Rahman Crescent Institute, Chennai", rating: 4.4 },
  { name: "Bharath University, Chennai", rating: 4.3 },
  { name: "Chennai Institute of Technology, Chennai", rating: 4.5 },
  { name: "Dhanalakshmi College of Engineering, Chennai", rating: 4.1 },
  { name: "Dr. MGR University, Chennai", rating: 4.3 },
  { name: "Easwari Engineering College, Chennai", rating: 4.4 },
  { name: "GKM College of Engineering and Technology, Chennai", rating: 4.0 },
  { name: "Hindustan University, Chennai", rating: 4.5 },
  { name: "Jerusalem College of Engineering, Chennai", rating: 4.1 },
  { name: "KCG College of Technology, Chennai", rating: 4.4 },
  { name: "Meenakshi Sundararajan Engineering College, Chennai", rating: 4.6 },
  { name: "PERI Institute of Technology, Chennai", rating: 4.0 },
  { name: "Rajalakshmi Engineering College, Chennai", rating: 4.5 },
  { name: "S.A. Engineering College, Thiruverkadu", rating: 4.2 },
  { name: "S.K.R. Engineering College, Thiruvallur", rating: 4.1 },
  { name: "Sri Sai Ram Institute of Technology, Chennai", rating: 4.5 },
  { name: "Sri Sairam Engineering College, Chennai", rating: 4.6 },
  { name: "St. Peter's University, Chennai", rating: 4.0 },
  { name: "T.J. Institute of Technology, Chennai", rating: 4.0 },
  { name: "Tagore Engineering College, Chennai", rating: 4.0 },
  { name: "Thangavelu Engineering College, Chennai", rating: 4.0 },
  { name: "Alpha College of Engineering, Chennai", rating: 4.0 },
  { name: "Anand Institute of Higher Technology, Chengalpattu", rating: 4.1 },
  { name: "Davinci School of Design and Architecture, Chennai", rating: 4.3 },
  { name: "Dhaanish Ahmed College of Engineering, Chennai", rating: 4.0 },
  { name: "Gojan School of Business & Technology, Chennai", rating: 4.0 },
  { name: "Gopal Ramalingam Memorial College, Chennai", rating: 4.0 },
  { name: "Jawahar Engineering College, Chennai", rating: 4.1 },
  { name: "Jeppiaar Engineering College, Chennai", rating: 4.4 },
  { name: "Loyola-ICAM College of Engineering & Technology, Chennai", rating: 4.6 },
  { name: "Madha Engineering College, Chennai", rating: 4.0 },
  { name: "Magna College of Engineering, Chennai", rating: 4.0 },
  { name: "Measi Academy of Architecture, Chennai", rating: 4.2 },
  { name: "Mohamed Sathak A.J. College of Engineering, Chennai", rating: 4.0 },
  { name: "Panimalar Engineering College, Chennai", rating: 4.5 },
  { name: "Panimalar Institute of Technology, Chennai", rating: 4.4 },
  { name: "Sathyabama University, Chennai", rating: 4.6 },
  { name: "Sri Krishna Engineering College, Sriperumbudur", rating: 4.0 },
  { name: "Sri Muthukumaran Institute of Technology, Chennai", rating: 4.1 },
  { name: "SSN College of Engineering, Chennai", rating: 4.7 },
  { name: "Srinivasa Institute of Engineering, Chennai", rating: 4.0 },
  { name: "St. Joseph's College of Engineering, Chennai", rating: 4.5 },
  { name: "Vel Tech University, Chennai", rating: 4.4 },
  { name: "Velammal Engineering College, Chennai", rating: 4.4 },

  // --------------------- TRICHY ---------------------
  { name: "C.A.R.E. School of Engineering, Trichy", rating: 4.3 },
  { name: "Cauvery College of Engineering & Tech, Perur", rating: 4.1 },
  { name: "Dhanalakshmi Srinivasan Institute of Technology, Trichy", rating: 4.2 },
  { name: "Imayam College of Engineering, Trichy", rating: 4.0 },
  { name: "Indra Ganesan College of Engineering, Trichy", rating: 4.0 },
  { name: "JJ College of Engineering & Technology, Trichy", rating: 4.2 },
  { name: "Jayaram College of Engineering & Tech, Thuraiyur", rating: 4.0 },
  { name: "K. Ramakrishnan College of Engineering, Trichy", rating: 4.3 },
  { name: "K. Ramakrishnan College of Technology, Trichy", rating: 4.3 },
  { name: "Kongunadu College of Engineering & Tech, Trichy", rating: 4.2 },
  { name: "Kurinji College of Engineering & Tech, Manapparai", rating: 4.0 },
  { name: "MAM Groups (All Colleges), Trichy", rating: 4.2 },
  { name: "MIET Engineering College, Trichy", rating: 4.1 },
  { name: "Mahalakshmi Engineering College, Trichy", rating: 4.0 },
  { name: "Oxford Engineering College, Trichy", rating: 4.1 },
  { name: "Pavendar Bharathidasan Institute of IT, Trichy", rating: 4.0 },
  { name: "Shivani Engineering College, Trichy", rating: 4.0 },
  { name: "Shivani Institute of Technology, Trichy", rating: 4.0 },
  { name: "Saranathan College of Engineering, Trichy", rating: 4.5 },

  // --------------------- OOTY ---------------------
  { name: "CSI College of Engineering, Ooty", rating: 4.2 },
  { name: "McGan's Ooty School of Architecture, Ooty", rating: 4.3 },

  // --------------------- MADURAI ---------------------
  { name: "KLN College of Engineering, Madurai", rating: 4.2 },
  { name: "Sethu Institute of Technology, Kariapatti", rating: 4.3 },
  { name: "Thiagarajar College of Engineering, Madurai", rating: 4.6 },
  { name: "Velammal College of Engineering & Technology, Madurai", rating: 4.4 },
  { name: "Fatima Michael College of Engineering, Madurai", rating: 4.1 },
  { name: "Raja College of Engineering, Madurai", rating: 4.0 },
  { name: "Ultra College of Engineering & Tech for Women, Madurai", rating: 4.2 },
  { name: "Vaigai College of Engineering, Madurai", rating: 4.0 },

  // --------------------- NAMAKKAL ---------------------
  { name: "KSR College of Engineering, Namakkal", rating: 4.3 },
  { name: "KSR College of Technology, Namakkal", rating: 4.4 },
  { name: "Mahendra Engineering College, Namakkal", rating: 4.3 },
  { name: "Mahendra Institute of Technology, Namakkal", rating: 4.2 },
  { name: "Paavai College of Engineering, Namakkal", rating: 4.2 },
  { name: "Paavai Engineering College, Namakkal", rating: 4.3 },
  { name: "PGP College of Engineering & Technology, Namakkal", rating: 4.0 },
  { name: "Selvam College of Technology, Namakkal", rating: 4.0 },
  { name: "Sengunthar Engineering College, Namakkal", rating: 4.2 },
  { name: "Vidhya Vikkas College of Engineering, Namakkal", rating: 4.1 },

  // --------------------- HOSUR ---------------------
  { name: "Adhiyamaan College of Engineering, Hosur", rating: 4.4 },
  { name: "Hosur Institute of Technology & Science, Hosur", rating: 4.1 },
  { name: "PSV College of Engineering & Technology, Krishnagiri", rating: 4.0 },

  // --------------------- VELLORE ---------------------
  { name: "VIT University (Vellore Institute of Technology)", rating: 4.8 },
  { name: "C. Abdul Hakeem College of Engineering, Vellore", rating: 4.2 },
  { name: "Kingston Engineering College, Vellore", rating: 4.1 },
  { name: "Priyadarshini Engineering College, Vellore", rating: 4.0 },
  { name: "Ranippettai Engineering College, Vellore", rating: 4.0 },
  { name: "Sri Nandhanam College of Engineering, Vellore", rating: 4.0 },

  // --------------------- PUDUKKOTTAI ---------------------
  { name: "C.A.R.E. School of Engineering, Pudukkottai", rating: 4.1 },
  { name: "Chendhuran College of Engineering, Pudukkottai", rating: 4.0 },
  { name: "Mahath Amma Institute of Engineering, Pudukkottai", rating: 4.0 },
  { name: "Mount Zion College of Engineering & Technology, Pudukkottai", rating: 4.2 },
  { name: "Shanmuganathan Engineering College, Pudukkottai", rating: 4.0 },
]

const collegeData = {
  engineering: {
    title: "Engineering Colleges",
    icon: <Cog className="w-5 h-5" />,
    color: "bg-blue-500",
    colleges: engineeringColleges,
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
  medical: {
    title: "Medical Colleges (MBBS)",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-red-500",
    colleges: [
      { name: "Coimbatore Medical College, Coimbatore", rating: 4.6 },
      { name: "Stanley Medical College, Chennai", rating: 4.8 },
      { name: "Madras Medical College, Chennai", rating: 4.9 },
      { name: "Kilpauk Medical College, Chennai", rating: 4.7 },
      { name: "K.A.P. Viswanatham Government Medical College, Trichy", rating: 4.5 },
      { name: "Thanjavur Medical College, Thanjavur", rating: 4.6 },
      { name: "Government Mohan Kumaramangalam Medical College, Salem", rating: 4.5 },
      { name: "PSG Institute of Medical Sciences & Research, Coimbatore", rating: 4.8 },
      { name: "Karpagam Faculty of Medical Sciences & Research", rating: 4.3 },
      { name: "SRM Medical College Hospital & Research Centre, Chennai", rating: 4.7 },
      { name: "Saveetha Medical College, Chennai", rating: 4.6 },
      { name: "Meenakshi Medical College Hospital & Research Institute, Kanchipuram", rating: 4.4 },
      { name: "Chettinad Hospital & Research Institute, Kelambakkam", rating: 4.6 },
      { name: "Sree Balaji Medical College & Hospital, Chennai", rating: 4.3 },
      { name: "Sri Ramachandra Institute of Higher Education & Research, Chennai", rating: 4.9 },
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

// ========================================================================================
// ⭐ COMPONENT
// ========================================================================================

export default function CollegeShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"engineering" | "arts" | "health">("engineering")

  return (
    <section id="colleges" className="w-full py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ---------- SECTION HEADER ---------- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E74D2]/10 dark:bg-blue-500/20 rounded-full mb-4">
            <Building className="w-4 h-4 text-[#0E74D2] dark:text-blue-400" />
            <span className="text-[#0E74D2] dark:text-blue-400 text-sm font-medium">Partner Institutions</span>
          </div> */}

          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] dark:text-gray-100 mb-4">
            Top Colleges in Tamil Nadu
          </h2>

          <p className="text-[#4a5568] dark:text-gray-400 text-lg">
            Best Career Guidance for a Better Future – Partnered with Top Institutions
          </p>
        </div>

        {/* ---------- MAIN CONTENT GRID ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ---------- LEFT: IMAGE STACK ---------- */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/modern-college-campus-entrance-gate-with-students-.jpg"
                alt="College Campus"
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-white/80 text-sm">Tamil Nadu, India</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Premier Educational Hub</h3>
              </div>
            </div>

            {/* Quick Stats */}

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-xs text-blue-600/80">Engineering</div>
              </div>
              <div className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
                <div className="text-2xl font-bold text-purple-600">20+</div>
                <div className="text-xs text-purple-600/80">Arts & Science</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-100">
                <div className="text-2xl font-bold text-green-600">10+</div>
                <div className="text-xs text-green-600/80">Medical</div>
              </div>
            </div>
          </div>

          {/* ---------- RIGHT: TAB LIST ---------- */}
          <div className="bg-[#f8fafc] dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800">

            {/* Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {Object.entries(collegeData).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${activeTab === key
                    ? `${data.color} text-white shadow-lg`
                    : "bg-white dark:bg-gray-800 text-[#4a5568] dark:text-gray-300 border border-gray-200 dark:border-gray-700"
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
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-[#0E74D2]/30 dark:hover:border-blue-500/30 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">

                      <div
                        className={`w-8 h-8 ${collegeData[activeTab].color} rounded-lg flex items-center justify-center text-white text-sm font-bold`}
                      >
                        {index + 1}
                      </div>

                      <div>
                        <h4 className="font-medium text-[#1a365d] dark:text-gray-200 group-hover:text-[#0E74D2] dark:group-hover:text-blue-400 transition-colors text-sm">
                          {college.name}
                        </h4>

                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <span className="text-xs text-[#4a5568] dark:text-gray-400">{college.rating}</span>
                        </div>
                      </div>
                    </div>

                    <ChevronRight className="w-4 h-4 text-[#4a5568] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- CTA Banner ---------- */}
        {/* <div className="mt-12 bg-gradient-to-r from-[#0E74D2] to-[#0a5ba8] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">For Admission Assistance</h3>
              <p className="text-blue-200">Contact us for expert guidance on choosing the right college</p>
            </div>
          </div>

          <a
            href="tel:9578599785"
            title="Call: 9578599785"
            className="flex items-center gap-2 px-8 py-4 bg-white text-[#0E74D2] rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Call Now
          </a>
        </div> */}

      </div>
    </section>
  )
}
