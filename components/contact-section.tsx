"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    // Validation
    if (!formState.name || !formState.email || !formState.phone) {
      setError("Please fill in all required fields")
      setTimeout(() => setError(""), 3000)
      return
    }

    setLoading(true)
    setError("")

    try {
      // Using Web3Forms - a free form submission service
      const formData = new FormData()

      // Web3Forms access key (you can get your own free key from https://web3forms.com)
      formData.append("access_key", "a369de97-2ddd-4edd-96b9-977b8e8707de")

      // Form fields
      formData.append("name", formState.name)
      formData.append("email", formState.email)
      formData.append("phone", formState.phone)
      formData.append("course", formState.course || "Not specified")
      formData.append("message", formState.message || "No message provided")

      // Additional settings
      formData.append("subject", `New Inquiry from ${formState.name}`)
      formData.append("from_name", "AL-HUDA Educational Consultant Website")
      formData.append("redirect", "false")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setFormState({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        throw new Error(data.message || "Failed to send message")
      }
    } catch (err) {
      console.error("Form submission error:", err)
      setError("Failed to send message. Please try calling us directly at +91 9578599785")
      setTimeout(() => setError(""), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="w-full py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E74D2]/10 dark:bg-blue-500/20 rounded-full mb-4">
            <Phone className="w-4 h-4 text-[#0E74D2] dark:text-blue-400" />
            <span className="text-[#0E74D2] dark:text-blue-400 text-sm font-medium">Get In Touch</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] dark:text-gray-100 mb-4">Start Your Journey Today</h2>
          <p className="text-[#4a5568] dark:text-gray-400 text-lg">
            Ready to take the first step? Contact us for free consultation and personalized guidance.
          </p>
        </div>

        {/* Contact Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left - Contact Cards (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone Card */}
            <a
              href="tel:9578599785"
              className="block bg-gradient-to-br from-[#0E74D2] to-[#0a5ba8] rounded-3xl p-8 text-white hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#0E74D2] transition-colors">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us Anytime</h3>
              <p className="text-blue-100 mb-4">24/7 Admission Helpline</p>
              <div className="text-3xl font-bold">+91 9578599785</div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:alhudaeducationalconsultant@gmail.com"
              className="block bg-[#1a365d] dark:bg-zinc-900 rounded-3xl p-8 text-white hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#1a365d] transition-colors">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-200 text-sm break-all">alhudaeducationalconsultant@gmail.com</p>
            </a>

            {/* Info Cards Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f8fafc] dark:bg-black rounded-2xl p-5 border border-gray-100 dark:border-gray-800">
                <MapPin className="w-6 h-6 text-[#0E74D2] dark:text-blue-400 mb-3" />
                <h4 className="font-semibold text-[#1a365d] dark:text-gray-100 text-sm mb-1">Location</h4>
                <p className="text-[#4a5568] dark:text-gray-400 text-xs">Coimbatore, Tamil Nadu</p>
              </div>
              <div className="bg-[#f8fafc] dark:bg-black rounded-2xl p-5 border border-gray-100 dark:border-gray-800">
                <Clock className="w-6 h-6 text-[#0E74D2] dark:text-blue-400 mb-3" />
                <h4 className="font-semibold text-[#1a365d] dark:text-gray-100 text-sm mb-1">Available</h4>
                <p className="text-[#4a5568] dark:text-gray-400 text-xs">24 Hours / 7 Days</p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form (3 columns) */}
          <div className="lg:col-span-3">
            <div className="bg-[#f8fafc] dark:bg-black rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-[#1a365d] dark:text-gray-100 mb-2">Send Us a Message</h3>
              <p className="text-[#4a5568] dark:text-gray-400 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1a365d] dark:text-gray-100 mb-2">Message Sent!</h4>
                  <p className="text-[#4a5568]">We'll get back to you shortly.</p>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <AlertCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1a365d] dark:text-gray-100 mb-2">Oops!</h4>
                  <p className="text-[#4a5568] mb-4">{error}</p>
                  <button
                    onClick={() => setError("")}
                    className="px-6 py-2 bg-[#0E74D2] text-white rounded-lg font-medium hover:bg-[#0a5ba8] transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1a365d] dark:text-gray-100 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-[#0E74D2] dark:focus:border-blue-500 focus:ring-2 focus:ring-[#0E74D2]/20 dark:focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                        placeholder="Your name"
                        disabled={loading}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a365d] dark:text-gray-100 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-[#0E74D2] dark:focus:border-blue-500 focus:ring-2 focus:ring-[#0E74D2]/20 dark:focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                        placeholder="Your phone"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a365d] dark:text-gray-100 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-[#0E74D2] dark:focus:border-blue-500 focus:ring-2 focus:ring-[#0E74D2]/20 dark:focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                      placeholder="your@email.com"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a365d] dark:text-gray-100 mb-2">Interested Course</label>
                    <select
                      value={formState.course}
                      onChange={(e) => setFormState({ ...formState, course: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-[#0E74D2] dark:focus:border-blue-500 focus:ring-2 focus:ring-[#0E74D2]/20 dark:focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-gray-100"
                      disabled={loading}
                    >
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
                    <label className="block text-sm font-medium text-[#1a365d] dark:text-gray-100 mb-2">Your Message</label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-[#0E74D2] dark:focus:border-blue-500 focus:ring-2 focus:ring-[#0E74D2]/20 dark:focus:ring-blue-500/20 outline-none transition-all resize-none text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                      placeholder="Tell us about your educational goals..."
                      disabled={loading}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#0E74D2] text-white rounded-xl font-semibold hover:bg-[#0a5ba8] transition-colors shadow-lg shadow-[#0E74D2]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}