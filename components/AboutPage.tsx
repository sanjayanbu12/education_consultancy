"use client"

import { GraduationCap, Users, Compass, Target, HeartHandshake } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f0f7ff] to-white px-4 sm:px-6 md:px-12 lg:px-20 py-16">

      {/* ------------------------------ HEADER SECTION ------------------------------ */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-[#1a365d] leading-tight">
          About <span className="text-[#0E74D2]">AL-HUDA</span>
        </h1>

        <p className="text-[#4a5568] text-base sm:text-lg mt-6 leading-relaxed max-w-3xl mx-auto">
          AL-HUDA Educational Consultancy is committed to guiding students toward academic excellence
          with clarity, confidence, and compassion. We specialize in helping students choose the course
          and institution that aligns with their personal goals, financial background, and long-term career vision.
        </p>
      </section>

      {/* ------------------------------ HIGHLIGHT BOX ------------------------------ */}
      {/* <section className="max-w-6xl mx-auto bg-white shadow-xl border border-[#0E74D2]/10 rounded-3xl p-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div className="space-y-6">
            <div className="text-xs font-medium bg-[#0E74D2]/10 text-[#0E74D2] px-4 py-2 rounded-full inline-block">
              Who We Are
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#1a365d]">
              A Trusted Partner in Your Academic Journey
            </h2>

            <p className="text-[#4a5568] text-base sm:text-lg leading-relaxed">
              Since our inception, AL-HUDA has helped thousands of students secure admissions across
              Engineering, Medical, Allied Health Sciences, Paramedical, Arts & Science, Agriculture,
              Management, and more. We operate with a mission to make quality education accessible
              and stress-free, offering **free consulting**, **career counseling**, **scholarship guidance**,
              and **24/7 admission support**.
            </p>

            <p className="text-[#0E74D2] font-medium">
              We believe every student deserves the right direction — and we provide it without charging any service fee.
            </p>
          </div>

        </div>
      </section> */}

      {/* ------------------------------ MISSION / VISION ------------------------------ */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-center text-3xl sm:text-4xl font-serif text-[#1a365d] mb-14">
          Our Mission & Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Mission */}
          <div className="bg-white rounded-3xl shadow-lg border border-[#0E74D2]/10 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="text-[#0E74D2] w-7 h-7" />
              <h3 className="text-2xl font-serif text-[#1a365d]">Our Mission</h3>
            </div>

            <p className="text-[#4a5568] leading-relaxed text-base">
              Our mission is to guide students toward the right academic pathway by understanding their
              strengths, interests, financial capabilities, and career aspirations. We strive to bring clarity
              to their decision-making process and ensure they gain admission to reputable and recognized
              institutions that support their long-term success.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl shadow-lg border border-[#0E74D2]/10 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-[#0E74D2] w-7 h-7" />
              <h3 className="text-2xl font-serif text-[#1a365d]">Our Vision</h3>
            </div>

            <p className="text-[#4a5568] leading-relaxed text-base">
              We envision a future where every student receives transparent, reliable, and ethical guidance
              that leads them to fulfilling careers. AL-HUDA aims to be a national leader in educational
              support services by making higher education more accessible and by empowering students to
              reach their highest potential.
            </p>
          </div>

        </div>
      </section>

      {/* ------------------------------ WHY AL-HUDA SECTION ------------------------------ */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-center text-3xl sm:text-4xl font-serif text-[#1a365d] mb-14">
          Why Students Trust AL-HUDA
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Card */}
          {[
            {
              icon: <GraduationCap className="w-8 h-8 text-[#0E74D2]" />,
              title: "End-to-End Admission Guidance",
              text: "From course selection to application support, we handle every step with care and precision."
            },
            {
              icon: <Users className="w-8 h-8 text-[#0E74D2]" />,
              title: "Experienced Counselors",
              text: "Our expert team has guided thousands of students into top-tier colleges across India."
            },
            {
              icon: <HeartHandshake className="w-8 h-8 text-[#0E74D2]" />,
              title: "Zero Service Charges",
              text: "We provide free consulting because we believe every student deserves a fair chance."
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl border border-[#0E74D2]/10 shadow-lg p-8 hover:shadow-xl transition-all">
              {item.icon}
              <h3 className="font-serif text-xl mt-4 mb-2 text-[#1a365d]">{item.title}</h3>
              <p className="text-[#4a5568] text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ------------------------------ STORY TIMELINE ------------------------------ */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-center text-3xl sm:text-4xl font-serif text-[#1a365d] mb-14">
          Our Story — Your Success
        </h2>

        <div className="border-l-4 border-[#0E74D2]/30 pl-8 space-y-10">
          
          <div>
            <h3 className="text-xl font-serif text-[#0E74D2]">The Beginning</h3>
            <p className="text-[#4a5568] mt-1">
              AL-HUDA was founded with a single vision — to simplify the admission journey for students
              and provide ethical, transparent, and reliable educational guidance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif text-[#0E74D2]">Growing With Students</h3>
            <p className="text-[#4a5568] mt-1">
              Over the years, we partnered with top colleges and helped thousands secure seats
              in Medicine, Engineering, Allied Health, Management, and Arts & Science programs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif text-[#0E74D2]">Today</h3>
            <p className="text-[#4a5568] mt-1">
              AL-HUDA stands as a trusted consultancy offering 24/7 support, scholarship guidance,
              financial planning assistance, and end-to-end admission consulting with no service charges.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}
