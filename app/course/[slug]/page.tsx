import { ChevronRight, Menu, Sparkles } from "lucide-react"
import { articleData } from "../content"

export function generateStaticParams() {
  return [
    { slug: "medical" },
    { slug: "paramedical" },
    { slug: "engineering" },
    { slug: "commerce" },
    { slug: "law" },
    { slug: "management" },
  ]
}

export default function ExtraordinaryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug.toLowerCase()
  const title = slug.charAt(0).toUpperCase() + slug.slice(1)
  const data = articleData[slug]

  return (
    <div className="min-h-screen w-full bg-[#f5f8ff] text-[#1a2a3a]">

      {/* ----------------------------------------------- */}
      {/* 🔥 UNIQUE HEADER – SPLIT TYPOGRAPHY + SUBTLE GRID */}
      {/* ----------------------------------------------- */}
      <header className="py-20 relative overflow-hidden bg-white">

        {/* Floating gradient dots */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-[#0E74D2]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#0E74D2]/5 rounded-full blur-2xl" />

        {/* subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6edf5_1px,transparent_1px),linear-gradient(to_bottom,#e6edf5_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative max-w-6xl mx-auto px-6">

          {/* Pre-heading */}
          <div className="flex items-center gap-2 text-[#0E74D2] uppercase text-xs tracking-widest font-semibold">
            <Sparkles className="w-4 h-4" />
            AL-HUDA INSIGHTS
          </div>

          {/* Split heading */}
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] text-[#1a365d]">
            Exploring the <span className="text-[#0E74D2]">{title}</span>  
            <br /> Education Landscape
          </h1>

          <p className="mt-6 text-lg text-[#4a5568] max-w-2xl">
            In-depth, industry-level analysis and guidance for students aspiring to build
            a successful future in the {title} domain.
          </p>
        </div>
      </header>

      {/* ----------------------------------------------- */}
      {/* 🔥 FLOATING INDEX (FEATURED TABLE OF CONTENTS) */}
      {/* ----------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#0E74D2]/10 relative overflow-hidden">

          {/* Highlight strip */}
          <div className="absolute left-0 top-0 w-2 h-full bg-[#0E74D2]/70 rounded-l-3xl" />

          <div className="flex items-center gap-2 text-xl font-semibold text-[#1a365d] mb-6">
            <Menu className="w-5 h-5 text-[#0E74D2]" />
            Key Sections
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-[#4a5568]">
            {[
              "Overview",
              "Why Choose This Field?",
              "Eligibility",
              "Top Courses",
              "Career Opportunities",
              "Future Scope",
            ].map((section, i) => (
              <div
                key={i}
                className="flex items-center gap-2 hover:text-[#0E74D2] cursor-pointer transition-all"
              >
                <ChevronRight className="w-4 h-4 text-[#0E74D2]" />
                {section}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* 🔥 MAIN ARTICLE – UNIQUE LAYOUT SECTIONS */}
      {/* ----------------------------------------------- */}
      <article className="max-w-6xl mx-auto px-6 mt-20 space-y-32">

        {/* ---------------- OVERVIEW ---------------- */}
        <Section title="Overview">
          <IntroParagraph text={data.overview} />
        </Section>

        {/* ---------------- WHY CHOOSE ---------------- */}
        <Section title={`Why Choose ${title}?`}>
          <ul className="space-y-4 text-lg text-[#4a5568]">
            {data.why.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#0E74D2]" />
                {point}
              </li>
            ))}
          </ul>
        </Section>

        {/* ---------------- ELIGIBILITY ---------------- */}
        <Section title="Eligibility & Academic Pathway">
          <div className="bg-[#eef5ff] p-6 rounded-2xl border border-[#0E74D2]/10">
            <ul className="space-y-3 text-[#1a2a3a]">
              {data.eligibility.map((el, i) => (
                <li key={i}>• {el}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* ---------------- TOP COURSES ---------------- */}
        <Section title={`Top Courses in ${title}`}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.topCourses.map((course, i) => (
              <Card key={i}>{course}</Card>
            ))}
          </div>
        </Section>

        {/* ---------------- CAREER OPPORTUNITIES ---------------- */}
        <Section title="Career Opportunities">
          <ul className="space-y-3 text-lg text-[#4a5568]">
            {data.careers.map((c, i) => (
              <li key={i}>• {c}</li>
            ))}
          </ul>
        </Section>

        {/* ---------------- FUTURE TRENDS ---------------- */}
        <Section title="Future Scope & Trends">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.trends.map((t, i) => (
              <Card key={i} className="bg-[#eef5ff] border-[#0E74D2]/20">
                {t}
              </Card>
            ))}
          </div>
        </Section>
      </article>

      {/* ----------------------------------------------- */}
      {/* 🔥 CTA SECTION – MODERN STRIPE STYLE CARD */}
      {/* ----------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 mt-32 mb-24">
        <div className="p-12 bg-white rounded-3xl shadow-xl border border-[#0E74D2]/10 relative">

          {/* Glow */}
          <div className="absolute -top-8 right-10 w-20 h-20 bg-[#0E74D2]/20 blur-3xl rounded-full" />

          <h2 className="text-3xl font-serif font-bold text-[#1a365d]">
            Need Personalized Career Guidance?
          </h2>
          <p className="mt-3 text-[#4a5568] text-lg">
            Our experts provide tailored recommendations based on your strengths and goals.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-8 py-3 rounded-full bg-[#0E74D2] text-white text-sm shadow-md hover:bg-[#0a5ba8] transition">
              Call Now
            </button>
            <button className="px-8 py-3 rounded-full border border-[#0E74D2] text-[#0E74D2] text-sm hover:bg-[#eef5ff] transition">
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ----------------------------------------------- */
/* COMPONENTS */
/* ----------------------------------------------- */

function Section({ title, children }: { title: string; children: any }) {
  return (
    <section className="space-y-8">
      <h2 className="text-4xl font-serif font-bold text-[#1a365d]">
        {title}
      </h2>
      {children}
    </section>
  )
}

function IntroParagraph({ text }: { text: string }) {
  return (
    <p className="text-xl leading-relaxed text-[#4a5568]">
      <span className="float-left text-6xl mr-4 font-serif text-[#0E74D2]">
        {text.charAt(0)}
      </span>
      {text.slice(1)}
    </p>
  )
}

function Card({ children, className = "" }: any) {
  return (
    <div
      className={`p-6 bg-white border border-[#0E74D2]/10 rounded-2xl shadow-sm text-[#1a365d] text-lg ${className}`}
    >
      {children}
    </div>
  )
}
