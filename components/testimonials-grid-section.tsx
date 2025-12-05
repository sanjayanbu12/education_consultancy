"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    course: "MBBS Student",
    college: "Government Medical College",
    text: "AL-HUDA helped me navigate the complex medical admission process. Their free counseling was invaluable!",
    rating: 5,
    featured: true,
  },
  {
    name: "Mohammed Farhan",
    course: "B.Tech CS",
    college: "SNS College of Technology",
    text: "The team guided me to choose the perfect engineering college. Forever grateful for their support.",
    rating: 5,
    featured: false,
  },
  {
    name: "Anitha Krishnan",
    course: "MBA",
    college: "Karunya University",
    text: "From course selection to scholarship guidance, they were with me at every step. Highly recommend!",
    rating: 5,
    featured: false,
  },
  {
    name: "Rajesh Kumar",
    course: "B.Sc Nursing",
    college: "KMCH College",
    text: "I was confused about my career path. The counselors helped me discover my passion for healthcare.",
    rating: 5,
    featured: false,
  },
  {
    name: "Sneha Patel",
    course: "BBA Aviation",
    college: "Hindusthan College",
    text: "Their knowledge about aviation courses is exceptional. I'm now pursuing my dream career!",
    rating: 5,
    featured: false,
  },
  {
    name: "Arun Balaji",
    course: "M.Tech",
    college: "PSG Tech",
    text: "The scholarship guidance saved me lakhs. Can't thank AL-HUDA enough for their free services.",
    rating: 5,
    featured: false,
  },
]

export default function TestimonialsGridSection() {
  return (
    <section className="w-full py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E74D2]/10 rounded-full mb-4">
            <Star className="w-4 h-4 text-[#0E74D2]" />
            <span className="text-[#0E74D2] text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">What Our Students Say</h2>
          <p className="text-[#4a5568] text-lg">
            Join thousands of students who found their perfect educational path with our guidance
          </p>
        </div>

        {/* Bento Grid Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all ${
                testimonial.featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-[#0E74D2]/10" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className={`text-[#4a5568] leading-relaxed mb-6 ${testimonial.featured ? "text-lg" : ""}`}>
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0E74D2] to-[#0a5ba8] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[#1a365d]">{testimonial.name}</div>
                  <div className="text-sm text-[#4a5568]">{testimonial.course}</div>
                  <div className="text-xs text-[#0E74D2]">{testimonial.college}</div>
                </div>
              </div>

              {testimonial.featured && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <img
                    src="/happy-student-with-graduation-cap-celebrating-succ.jpg"
                    alt="Success Story"
                    className="w-full h-40 object-cover rounded-2xl"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10,000+", label: "Students Guided" },
            { value: "5,000+", label: "Partner Colleges" },
            { value: "200+", label: "Courses Offered" },
            { value: "100%", label: "Free Services" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl border border-gray-100">
              <div className="text-3xl font-bold text-[#0E74D2] mb-1">{stat.value}</div>
              <div className="text-sm text-[#4a5568]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
