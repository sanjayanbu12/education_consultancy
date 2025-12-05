"use client"

import { Phone, Mail, Clock, MapPin, ArrowRight, CheckCircle } from "lucide-react"

const benefits = [
  "Free career counseling",
  "5000+ partner colleges",
  "Scholarship assistance",
  "24/7 support available",
]

export default function CTASection() {
  return (
    <section
      id="contact"
      className="w-full py-20 bg-gradient-to-br from-[#0E74D2] via-[#0a5ba8] to-[#1a365d] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-white/80 text-lg mb-8 text-pretty">
              Get expert guidance for admission to top colleges across India. Our consultants are available 24/7 to
              assist you with free career counseling and admission support.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/90 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Cards - Horizontal on Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:9578599785"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs mb-1">24/7 Helpline</p>
                    <p className="text-white font-semibold">9578599785</p>
                  </div>
                </div>
              </a>

              <a
                href="mailto:alhudaeducationalconsultant@gmail.com"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs mb-1">Email Us</p>
                    <p className="text-white font-semibold text-sm">alhuda...@gmail.com</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Inquiry Form Card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-[#1a365d] text-xl font-bold mb-2">Get Free Consultation</h3>
            <p className="text-[#4a5568] text-sm mb-6">Fill in your details and we'll call you back within 24 hours</p>

            <form className="space-y-4">
              <div>
                <label className="block text-[#1a365d] text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0E74D2] focus:ring-2 focus:ring-[#0E74D2]/20 outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-[#1a365d] text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0E74D2] focus:ring-2 focus:ring-[#0E74D2]/20 outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-[#1a365d] text-sm font-medium mb-2">Interested Course</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0E74D2] focus:ring-2 focus:ring-[#0E74D2]/20 outline-none transition-all text-sm text-[#4a5568]">
                  <option value="">Select a course category</option>
                  <option value="medical">Medical / MBBS</option>
                  <option value="engineering">Engineering</option>
                  <option value="nursing">Nursing & Paramedical</option>
                  <option value="mba">MBA / Management</option>
                  <option value="arts">Arts & Science</option>
                  <option value="law">Law</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[#1a365d] text-sm font-medium mb-2">Message (Optional)</label>
                <textarea
                  placeholder="Tell us about your requirements..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0E74D2] focus:ring-2 focus:ring-[#0E74D2]/20 outline-none transition-all text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#0E74D2] text-white rounded-xl font-semibold hover:bg-[#0a5ba8] transition-colors shadow-lg"
              >
                Request Free Callback
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <p className="text-center text-[#4a5568] text-xs mt-4">
              By submitting, you agree to receive calls from AL-HUDA Educational Consultancy
            </p>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-4 h-4" />
                <span className="text-sm">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Coimbatore, Tamil Nadu</span>
              </div>
            </div>
            <p className="text-white/60 text-sm text-center">
              Trusted by 10,000+ students | No Service Charges | 100% Free Consulting
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
