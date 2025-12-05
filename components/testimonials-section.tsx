"use client"

import { useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight, Star, GraduationCap } from "lucide-react"

const testimonials = [
  {
    quote:
      "AL-HUDA helped me find the perfect engineering college that matched my budget and career aspirations. Their guidance throughout the admission process was invaluable.",
    name: "Rahul Kumar",
    course: "B.Tech Computer Science",
    college: "Hindusthan College of Engineering",
    rating: 5,
    year: "2024",
  },
  {
    quote:
      "The career counseling sessions helped me realize my passion for healthcare. Now I'm pursuing nursing at a top college, all thanks to AL-HUDA's expert advice.",
    name: "Priya Sharma",
    course: "B.Sc Nursing",
    college: "KMCH College of Health Sciences",
    rating: 5,
    year: "2024",
  },
  {
    quote:
      "I was confused about which MBA specialization to choose. AL-HUDA's counselors helped me understand my strengths and choose the right program.",
    name: "Mohammed Faiz",
    course: "MBA Finance",
    college: "Karpagam Academy",
    rating: 5,
    year: "2023",
  },
  {
    quote:
      "The scholarship guidance from AL-HUDA helped my family afford quality education. They truly care about students from all backgrounds.",
    name: "Anitha Selvam",
    course: "B.Com",
    college: "SNS College of Arts & Science",
    rating: 5,
    year: "2024",
  },
  {
    quote:
      "From choosing the right medical college to securing admission, AL-HUDA was with me at every step. Highly recommend their services!",
    name: "Karthik Rajan",
    course: "MBBS",
    college: "Government Medical College",
    rating: 5,
    year: "2023",
  },
  {
    quote:
      "Their 24/7 support is genuine. I called late at night with admission doubts and got immediate assistance. Outstanding service!",
    name: "Deepika Murthy",
    course: "B.Tech ECE",
    college: "SNS College of Technology",
    rating: 5,
    year: "2024",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handleNav = (direction: "prev" | "next") => {
    setActiveIndex((prev) =>
      direction === "next" ? (prev + 1) % testimonials.length : (prev - 1 + testimonials.length) % testimonials.length,
    )
  }

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E74D2]/10 rounded-full mb-4">
            <Quote className="w-4 h-4 text-[#0E74D2]" />
            <span className="text-[#0E74D2] text-sm font-medium">Student Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4 text-balance">
            Success Stories from Our Students
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto text-pretty">
            Hear from students who transformed their academic dreams into reality with AL-HUDA's guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Testimonial - Large Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#0E74D2] to-[#0a5ba8] rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Quote className="w-7 h-7 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 text-pretty">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-white/80">{testimonials[activeIndex].course}</p>
                  <p className="text-white/60 text-sm">{testimonials[activeIndex].college}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/20">
                <button
                  onClick={() => handleNav("prev")}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeIndex ? "bg-white w-6" : "bg-white/30 w-2"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => handleNav("next")}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Side Cards Stack */}
          <div className="flex flex-col gap-6">
            {/* Stats Card */}
            <div className="bg-[#f0f7ff] rounded-2xl p-6 border border-[rgba(14,116,210,0.1)]">
              <div className="text-[#0E74D2] text-4xl font-bold mb-2">10,000+</div>
              <div className="text-[#1a365d] font-semibold mb-1">Students Guided</div>
              <p className="text-[#4a5568] text-sm">Successfully placed in top institutions across India</p>
            </div>

            {/* Mini Testimonial Cards */}
            {testimonials.slice(1, 3).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 border border-[rgba(14,116,210,0.1)] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[#4a5568] text-sm leading-relaxed mb-3 line-clamp-2">"{item.quote}"</p>
                <div>
                  <p className="text-[#1a365d] font-medium text-sm">{item.name}</p>
                  <p className="text-[#4a5568] text-xs">{item.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
