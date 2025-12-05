"use client"

import HeroSection from "@/components/hero-section"
import StatsBentoSection from "@/components/stats-bento-section"
import ServicesGridSection from "@/components/services-grid-section"
import CoursePathwaySection from "@/components/course-pathway-section"
import CourseCatalogSection from "@/components/course-catalog-section"
import CollegeShowcaseSection from "@/components/college-showcase-section"
import FacilitiesMarqueeSection from "@/components/facilities-marquee-section"
import WhyUsSection from "@/components/why-us-section"
import ProcessTimelineSection from "@/components/process-timeline-section"
import TestimonialsGridSection from "@/components/testimonials-grid-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import FooterSection from "@/components/footer-section"

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <StatsBentoSection />
      <ServicesGridSection />
      <CoursePathwaySection />
      <CourseCatalogSection />
      <CollegeShowcaseSection />
      <FacilitiesMarqueeSection />
      <WhyUsSection />
      <ProcessTimelineSection />
      <TestimonialsGridSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
