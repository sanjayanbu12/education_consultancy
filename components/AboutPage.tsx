"use client"

import { useState } from "react"
import { GraduationCap, Users, Compass, Target, HeartHandshake, Award, TrendingUp, Shield, Sparkles, ArrowRight, CheckCircle2, Zap, Globe, BookOpen, Lightbulb } from "lucide-react"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission")

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,116,210,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(14,116,210,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,116,210,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,210,0.02)_1px,transparent_1px)] bg-[size:64px_64px] animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      <div className="relative">
        <div className="h-0"></div>

        {/* ------------------------------ HERO WITH PARALLAX EFFECT ------------------------------ */}
        <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          
          {/* Floating Decorative Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#0E74D2]/10 to-transparent rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-[#0a5ba8]/10 to-transparent rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>

          <div className="relative z-10 text-center">

            <h1 className="text-5xl lg:text-7xl font-light text-[#1a1a1a] tracking-tight leading-[1.05] mb-8">
              Where <span className="relative inline-block">
                <span className="relative z-10 font-medium bg-gradient-to-r from-[#0E74D2] via-[#0a5ba8] to-[#0E74D2] bg-clip-text text-transparent animate-[pulse_3s_ease-in-out_infinite]">Excellence</span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#0E74D2]/20 via-[#0a5ba8]/20 to-[#0E74D2]/20 blur-sm"></div>
              </span>
              <br className="hidden lg:block" />
              <span className="block mt-2">Meets Opportunity</span>
            </h1>

            <p className="text-xl text-[#5a5a5a] leading-relaxed max-w-3xl mx-auto font-light mb-12">
              For over 15 years, Al Huda has been the bridge between ambitious students and world-class institutions. 
              We don't just guide—we transform educational journeys into success stories.
            </p>

            {/* Quick Stats Inline */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { icon: <Users className="w-5 h-5" />, value: "10,000+", label: "Lives Changed" },
                { icon: <Globe className="w-5 h-5" />, value: "5,000+", label: "Partner Colleges" },
                { icon: <Award className="w-5 h-5" />, value: "98%", label: "Success Rate" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-[#0E74D2]">{stat.icon}</div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-[#1a1a1a]">{stat.value}</div>
                    <div className="text-xs text-[#7a7a7a]">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------ INTERACTIVE TABS SECTION ------------------------------ */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-2xl p-2 gap-2">
              {[
                { id: "mission", icon: <Compass className="w-5 h-5" />, label: "Mission" },
                { id: "vision", icon: <Target className="w-5 h-5" />, label: "Vision" },
                { id: "values", icon: <HeartHandshake className="w-5 h-5" />, label: "Values" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-white text-[#0E74D2] shadow-lg"
                      : "text-[#5a5a5a] hover:text-[#1a1a1a]"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="relative min-h-[400px]"> 
            {activeTab === "mission" && (
              <div className="animate-[fadeIn_0.5s_ease-in-out] grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E74D2]/10 rounded-full">
                    <Compass className="w-5 h-5 text-[#0E74D2]" />
                    <span className="text-sm font-medium text-[#0E74D2]">Our Mission</span>
                  </div> */}
                  <h2 className="text-4xl font-light text-[#1a1a1a]">Guiding Your Path to Success</h2>
                  <p className="text-lg text-[#5a5a5a] leading-relaxed">
                    We exist to democratize access to quality education. Through personalized counseling, 
                    strategic planning, and unwavering support, we ensure every student finds their perfect 
                    institutional match—regardless of their background or circumstances.
                  </p>
                  <div className="space-y-3 pt-4">
                    {[
                      "100% free consultation services",
                      "Personalized career pathway mapping",
                      "End-to-end admission support",
                      "Scholarship and financial guidance"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0E74D2] flex-shrink-0" />
                        <span className="text-[#3a3a3a]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800" alt="Students studying" className="w-full h-[500px] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E74D2]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <div className="text-2xl font-medium mb-2">Empowering 10,000+ Students</div>
                      <div className="text-white/80">Since 2009</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="animate-[fadeIn_0.5s_ease-in-out] grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative lg:order-2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" alt="Future vision" className="w-full h-[500px] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a5ba8]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <div className="text-2xl font-medium mb-2">Shaping Tomorrow's Leaders</div>
                      <div className="text-white/80">One Student at a Time</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 lg:order-1">
                  {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E74D2]/10 rounded-full">
                    <Target className="w-5 h-5 text-[#0E74D2]" />
                    <span className="text-sm font-medium text-[#0E74D2]">Our Vision</span>
                  </div> */}
                  <h2 className="text-4xl font-light text-[#1a1a1a]">Building India's Educational Future</h2>
                  <p className="text-lg text-[#5a5a5a] leading-relaxed">
                    To become India's most trusted educational consultancy—where transparency meets excellence, 
                    and every student discovers their true potential. We envision a future where quality 
                    education is accessible to all, barriers are dismantled, and dreams become degrees.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {[
                      { icon: <Globe className="w-6 h-6" />, text: "Pan-India Reach" },
                      { icon: <Shield className="w-6 h-6" />, text: "Ethical Practices" },
                      { icon: <Zap className="w-6 h-6" />, text: "Innovation First" },
                      { icon: <Award className="w-6 h-6" />, text: "Student Success" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-[#0E74D2]/5 rounded-xl">
                        <div className="text-[#0E74D2]">{item.icon}</div>
                        <span className="text-sm font-medium text-[#1a1a1a]">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "values" && (
              <div className="animate-[fadeIn_0.5s_ease-in-out]">
                <div className="text-center mb-12">
                  {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E74D2]/10 rounded-full mb-4">
                    <HeartHandshake className="w-5 h-5 text-[#0E74D2]" />
                    <span className="text-sm font-medium text-[#0E74D2]">Our Core Values</span>
                  </div> */}
                  <h2 className="text-4xl font-light text-[#1a1a1a] mb-4">What Drives Us Every Day</h2>
                  <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto">
                    Our values aren't just words on a page—they're the foundation of every interaction, 
                    every decision, and every success story we create.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Shield className="w-8 h-8" />,
                      title: "Integrity First",
                      desc: "Honest guidance, transparent processes, zero hidden agendas"
                    },
                    {
                      icon: <Users className="w-8 h-8" />,
                      title: "Student-Centric",
                      desc: "Your goals are our mission, your success is our measure"
                    },
                    {
                      icon: <TrendingUp className="w-8 h-8" />,
                      title: "Excellence",
                      desc: "Settling for anything less than the best isn't in our DNA"
                    },
                    {
                      icon: <HeartHandshake className="w-8 h-8" />,
                      title: "Accessibility",
                      desc: "Premium guidance at zero cost—quality education for all"
                    },
                    {
                      icon: <Lightbulb className="w-8 h-8" />,
                      title: "Innovation",
                      desc: "Constantly evolving to serve you better with cutting-edge solutions"
                    },
                    {
                      icon: <BookOpen className="w-8 h-8" />,
                      title: "Empowerment",
                      desc: "We don't just guide—we equip you to make informed decisions"
                    }
                  ].map((value, i) => (
                    <div key={i} className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0E74D2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      <div className="relative">
                        <div className="w-16 h-16 bg-[#0E74D2]/10 rounded-2xl flex items-center justify-center text-[#0E74D2] mb-6 group-hover:bg-[#0E74D2] group-hover:text-white group-hover:scale-110 transition-all duration-500">
                          {value.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">{value.title}</h3>
                        <p className="text-[#5a5a5a] text-sm leading-relaxed">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ------------------------------ JOURNEY TIMELINE WITH ANIMATIONS ------------------------------ */}
        <section className="relative bg-gradient-to-b from-[#f8fafc] to-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,116,210,0.03)_0%,transparent_70%)]"></div>
          
          <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-4">Our Growth Story</h2>
              <p className="text-[#5a5a5a] text-lg">15+ years of transforming educational dreams into reality</p>
            </div>

            <div className="relative">
              {/* Animated Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0E74D2] via-[#0a5ba8] to-[#0E74D2]/20 -translate-x-1/2 hidden lg:block"></div>

              <div className="space-y-16">
                {[
                  {
                    year: "2009",
                    title: "The Beginning",
                    desc: "Founded with a vision to make quality education accessible to every student",
                    icon: <Sparkles className="w-6 h-6" />,
                    align: "left"
                  },
                  {
                    year: "2015",
                    title: "Rapid Expansion",
                    desc: "Crossed 5,000 successful placements with 1,000+ partner institutions nationwide",
                    icon: <TrendingUp className="w-6 h-6" />,
                    align: "right"
                  },
                  {
                    year: "2020",
                    title: "Digital Transformation",
                    desc: "Launched 24/7 online counseling and virtual campus tours during pandemic",
                    icon: <Globe className="w-6 h-6" />,
                    align: "left"
                  },
                  {
                    year: "2024",
                    title: "Industry Leadership",
                    desc: "10,000+ students guided, 98% success rate, India's most trusted consultancy",
                    icon: <Award className="w-6 h-6" />,
                    align: "right"
                  }
                ].map((milestone, i) => (
                  <div key={i} className={`relative flex items-center ${milestone.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-[#0E74D2] rounded-full flex items-center justify-center shadow-lg hidden lg:flex z-10">
                      <div className="text-[#0E74D2]">{milestone.icon}</div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full lg:w-[calc(50%-60px)] ${milestone.align === 'right' ? 'lg:ml-[60px]' : 'lg:mr-[60px]'}`}>
                      <div className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="px-4 py-2 bg-[#0E74D2] text-white text-sm font-bold rounded-full">{milestone.year}</div>
                          <div className="flex-1 h-px bg-gradient-to-r from-[#0E74D2] to-transparent"></div>
                        </div>
                        <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-3">{milestone.title}</h3>
                        <p className="text-[#5a5a5a] leading-relaxed">{milestone.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------ PREMIUM CTA ------------------------------ */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E74D2] via-[#0a5ba8] to-[#0E74D2]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
          
          <div className="relative max-w-5xl mx-auto px-6 text-center">

            <h2 className="text-4xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Your Dream College
              <span className="block mt-2 font-medium">Is Just a Call Away</span>
            </h2>

            <p className="text-white/90 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Join 10,000+ students who trusted Al Huda to turn their educational aspirations into reality. 
              Free expert counseling, 24/7 support, 98% success rate.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:9578599785"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#0E74D2] font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-16 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>100% Free Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>15+ Years Trusted</span>
              </div>
            </div>
          </div>
        </section>

      </div>

    </div>
  )
}