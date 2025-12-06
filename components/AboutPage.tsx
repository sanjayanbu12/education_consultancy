"use client"

import { GraduationCap, Users, Compass, Target, HeartHandshake, Award, TrendingUp, Shield, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,116,210,0.05)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(14,116,210,0.03)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,116,210,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,210,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative">

        {/* Navigation Spacer - REDUCED */}
        <div className="h-24"></div>

        {/* ------------------------------ HEADER SECTION ------------------------------ */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          

          {/* Main Heading */}
          <h1 className="text-center text-4xl lg:text-6xl font-light text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
            Empowering Students Through
            <span className="block mt-2 font-normal bg-gradient-to-r from-[#0E74D2] to-[#0a5ba8] bg-clip-text text-transparent">
              Strategic Educational Guidance
            </span>
          </h1>

          <p className="text-center text-lg text-[#5a5a5a] leading-relaxed max-w-3xl mx-auto font-light">
            Al Huda Educational Consultancy delivers comprehensive advisory services, connecting ambitious students 
            with premier academic institutions through personalized guidance and unwavering commitment to excellence.
          </p>

        </section>

        {/* ------------------------------ FEATURED STATS ------------------------------ */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "15+", label: "Years of Excellence", sublabel: "Established Leadership" },
              { value: "10,000+", label: "Students Guided", sublabel: "Successful Placements" },
              { value: "5,000+", label: "Partner Institutions", sublabel: "Nationwide Network" },
              { value: "98%", label: "Success Rate", sublabel: "Proven Results" }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
                <div className="text-4xl font-bold text-[#0E74D2] mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-[#1a1a1a] mb-1">{stat.label}</div>
                <div className="text-xs text-[#7a7a7a]">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------ MISSION & VISION ------------------------------ */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-light text-[#1a1a1a] mb-4">Our Foundation</h2>
            <p className="text-[#5a5a5a] font-light">Guided by purpose, driven by excellence</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="group relative bg-white rounded-2xl p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="absolute top-10 right-10 w-16 h-16 bg-[#0E74D2]/5 rounded-full flex items-center justify-center group-hover:bg-[#0E74D2] transition-all duration-300">
                <Compass className="text-[#0E74D2] w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-medium text-[#1a1a1a] mb-4">Our Mission</h3>
              <p className="text-[#5a5a5a] leading-relaxed font-light">
                To provide strategic guidance that aligns student aspirations with institutional excellence, 
                ensuring informed decision-making through comprehensive analysis of academic strengths, 
                career objectives, and financial considerations. We facilitate access to reputable institutions 
                that foster long-term professional success.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-white rounded-2xl p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="absolute top-10 right-10 w-16 h-16 bg-[#0E74D2]/5 rounded-full flex items-center justify-center group-hover:bg-[#0E74D2] transition-all duration-300">
                <Target className="text-[#0E74D2] w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-medium text-[#1a1a1a] mb-4">Our Vision</h3>
              <p className="text-[#5a5a5a] leading-relaxed font-light">
                To establish ourselves as the nation's premier educational consultancy, distinguished by 
                transparent practices, ethical standards, and measurable outcomes. We envision an educational 
                landscape where every student receives personalized guidance that maximizes their potential 
                and opens pathways to fulfilling careers.
              </p>
            </div>

          </div>
        </section>

        {/* ------------------------------ WHY CHOOSE US ------------------------------ */}
        <section className="bg-gradient-to-b from-[#f8fafc] to-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-light text-[#1a1a1a] mb-4">The Al Huda Advantage</h2>
              <p className="text-[#5a5a5a] font-light">Excellence in every aspect of educational consulting</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {[
                {
                  icon: <GraduationCap className="w-10 h-10" />,
                  title: "Comprehensive Advisory",
                  text: "End-to-end guidance from course selection through admission completion, with meticulous attention to institutional requirements and application procedures."
                },
                {
                  icon: <Users className="w-10 h-10" />,
                  title: "Expert Counselors",
                  text: "Seasoned professionals with extensive knowledge of academic programs, admission criteria, and institutional partnerships across the nation."
                },
                {
                  icon: <HeartHandshake className="w-10 h-10" />,
                  title: "Complimentary Services",
                  text: "Professional consultation at no cost, reflecting our commitment to making quality educational guidance accessible to all deserving students."
                },
                {
                  icon: <Shield className="w-10 h-10" />,
                  title: "Ethical Standards",
                  text: "Transparent processes, honest recommendations, and unwavering integrity in every consultation and institutional partnership."
                },
                {
                  icon: <TrendingUp className="w-10 h-10" />,
                  title: "Proven Success",
                  text: "Demonstrated track record of successful placements across Medicine, Engineering, Allied Health Sciences, Management, and Arts programs."
                },
                {
                  icon: <Award className="w-10 h-10" />,
                  title: "24/7 Support",
                  text: "Continuous availability throughout the admission cycle, ensuring students receive timely assistance at every critical juncture."
                }
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-[#0E74D2]/5 rounded-xl flex items-center justify-center text-[#0E74D2] mb-6 group-hover:bg-[#0E74D2] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">{item.title}</h3>
                  <p className="text-[#5a5a5a] leading-relaxed font-light text-sm">{item.text}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ------------------------------ JOURNEY TIMELINE ------------------------------ */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-light text-[#1a1a1a] mb-4">Our Journey</h2>
            <p className="text-[#5a5a5a] font-light">Building excellence through continuous evolution</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0E74D2] to-[#0E74D2]/20"></div>

              <div className="space-y-12">
                
                {[
                  {
                    phase: "Foundation",
                    title: "Establishment of Vision",
                    description: "Al Huda was founded with a singular commitment: to democratize access to quality educational guidance through ethical, transparent, and student-centric advisory services."
                  },
                  {
                    phase: "Expansion",
                    title: "Strategic Growth",
                    description: "Developed comprehensive partnerships with premier institutions across multiple disciplines, establishing robust frameworks for Medicine, Engineering, Allied Health Sciences, and Management programs."
                  },
                  {
                    phase: "Present Day",
                    title: "Industry Leadership",
                    description: "Operating as a trusted consultancy with 24/7 support infrastructure, scholarship facilitation, financial planning assistance, and comprehensive admission services—all provided at no cost to students."
                  }
                ].map((item, i) => (
                  <div key={i} className="relative pl-24">
                    
                    {/* Timeline Node */}
                    <div className="absolute left-4 top-0 w-9 h-9 bg-white border-4 border-[#0E74D2] rounded-full"></div>
                    
                    {/* Content */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                      <div className="text-xs font-medium text-[#0E74D2] tracking-wider mb-2">{item.phase}</div>
                      <h3 className="text-2xl font-medium text-[#1a1a1a] mb-3">{item.title}</h3>
                      <p className="text-[#5a5a5a] leading-relaxed font-light">{item.description}</p>
                    </div>

                  </div>
                ))}

              </div>
            </div>
          </div>

        </section>

        {/* ------------------------------ CLOSING CTA ------------------------------ */}
        <section className="bg-gradient-to-br from-[#0E74D2] to-[#0a5ba8] py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-5xl font-light text-white mb-6">
              Begin Your Academic Journey With Confidence
            </h2>
            <p className="text-white/80 text-lg mb-10 font-light">
              Schedule a complimentary consultation with our expert advisors and discover 
              the optimal pathway to your educational goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9578599785"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0E74D2] font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                Schedule Consultation
              </a>
              <a 
                href="mailto:alhudaeducationalconsultant@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-300"
              >
                Request Information
              </a>
            </div>
          </div>
        </section>

      </div>

    </div>
  )
}