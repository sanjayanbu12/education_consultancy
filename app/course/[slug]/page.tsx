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
    <div className="min-h-screen w-full bg-[#f5f8ff] dark:bg-gray-950 text-[#1a2a3a] dark:text-gray-100 transition-colors duration-300">

      {/* ----------------------------------------------- */}
      {/* HEADER – Compact + Premium */}
      {/* ----------------------------------------------- */}
      <header className="py-14 relative overflow-hidden bg-white dark:bg-gray-950">

        {/* Background Pattern - Same as Hero Section */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,116,210,0.05)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(14,116,210,0.03)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1)_0%,transparent_50%)]"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,116,210,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,210,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative max-w-5xl mx-auto px-6">

          {/* Pre-heading */}
          {/* <div className="flex items-center gap-2 text-[#0E74D2] uppercase text-xs tracking-wider font-semibold">
            <Sparkles className="w-4 h-4" />
            AL-HUDA INSIGHTS
          </div> */}

          {/* Title */}
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-[#1a365d] dark:text-gray-100">
            Exploring the <span className="text-[#0E74D2]">{title}</span>
            <br /> Education Landscape
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-base md:text-lg text-[#4a5568] dark:text-gray-400 max-w-2xl leading-relaxed">
            In-depth, research-backed insights for students aspiring to succeed in the {title} domain.
          </p>
        </div>
      </header>

      {/* ----------------------------------------------- */}
      {/* TABLE OF CONTENTS – Compact Premium */}
      {/* ----------------------------------------------- */}
      <section className="max-w-5xl mx-auto px-6 mt-10">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-[#0E74D2]/10 dark:border-gray-800 relative">

          {/* Highlight Strip */}
          <div className="absolute left-0 top-0 w-1.5 h-full bg-[#0E74D2]/70 rounded-l-xl" />

          <div className="flex items-center gap-2 text-lg font-semibold text-[#1a365d] dark:text-gray-100 mb-4">
            <Menu className="w-5 h-5 text-[#0E74D2]" />
            Key Sections
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-[#4a5568] dark:text-gray-400">
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
                className="flex items-center gap-2 hover:text-[#0E74D2] cursor-pointer transition"
              >
                <ChevronRight className="w-4 h-4 text-[#0E74D2]" />
                {section}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- */}
      {/* MAIN ARTICLE – Reduced Spacing + Premium Look */}
      {/* ----------------------------------------------- */}
      <article className="max-w-5xl mx-auto px-6 mt-14 space-y-20">

        {/* OVERVIEW */}
        <Section title="Overview">
          <IntroParagraph text={data.overview} />
        </Section>

        {/* WHY CHOOSE */}
        <Section title={`Why Choose ${title}?`}>
          <ul className="space-y-3 text-lg text-[#4a5568] dark:text-gray-400">
            {data.why.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#0E74D2]" />
                {point}
              </li>
            ))}
          </ul>
        </Section>

        {/* ELIGIBILITY */}
        <Section title="Eligibility & Academic Pathway">
          <div className="bg-[#eef5ff] dark:bg-gray-800 p-5 rounded-xl border border-[#0E74D2]/10 dark:border-gray-700">
            <ul className="space-y-2 text-[#1a2a3a] dark:text-gray-300 text-[15px]">
              {data.eligibility.map((el, i) => (
                <li key={i}>• {el}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* TOP COURSES */}
        <Section title={`Top Courses in ${title}`}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.topCourses.map((course, i) => (
              <Card key={i}>{course}</Card>
            ))}
          </div>
        </Section>

        {/* CAREERS */}
        <Section title="Career Opportunities">
          <ul className="space-y-2 text-lg text-[#4a5568] dark:text-gray-400">
            {data.careers.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#0E74D2]" />
                {c}
              </li>
            ))}
          </ul>
        </Section>

        {/* FUTURE TRENDS */}
        <Section title="Future Scope & Trends">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.trends.map((t, i) => (
              <Card key={i} className="bg-[#eef5ff] dark:bg-gray-800 border-[#0E74D2]/20 dark:border-gray-700">
                {t}
              </Card>
            ))}
          </div>
        </Section>
      </article>

      {/* ----------------------------------------------- */}
      {/* CTA – Compact + Professional */}
      {/* ----------------------------------------------- */}
      <div className="max-w-5xl mx-auto px-6 mt-20 mb-20">
        <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-[#0E74D2]/10 dark:border-gray-800 relative">

          <h2 className="text-2xl font-serif font-bold text-[#1a365d] dark:text-gray-100">
            Need Personalized Career Guidance?
          </h2>

          <p className="mt-2 text-[#4a5568] dark:text-gray-400 text-[15px] leading-relaxed">
            Our counselors offer guidance tailored to your strengths and goals.
          </p>

          <div className="mt-6 flex gap-3">
            <button className="px-6 py-2.5 rounded-full bg-[#0E74D2] text-white text-sm shadow hover:bg-[#0a5ba8]">
              Call Now
            </button>
            <button className="px-6 py-2.5 rounded-full border border-[#0E74D2] text-[#0E74D2] text-sm hover:bg-[#eef5ff]">
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ----------------------------------------------- */
/* COMPONENTS – Reduced Spacing + Dropcap FIX */
/* ----------------------------------------------- */

function Section({ title, children }: any) {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-serif font-bold text-[#1a365d] dark:text-gray-100">{title}</h2>
      {children}
    </section>
  )
}

function IntroParagraph({ text }: any) {
  const cleaned = text.trim()
  const first = cleaned.charAt(0)
  const rest = cleaned.slice(1)

  return (
    <p className="text-lg leading-relaxed text-[#4a5568] dark:text-gray-400">
      <span className="float-left text-5xl mr-3 font-serif font-bold text-[#0E74D2] leading-none">
        {first}
      </span>
      {rest}
    </p>
  )
}

function Card({ children, className = "" }: any) {
  return (
    <div
      className={`p-5 bg-white dark:bg-gray-900 border border-[#0E74D2]/10 dark:border-gray-800 rounded-xl shadow-sm text-[15px] text-[#1a365d] dark:text-gray-200 ${className}`}
    >
      {children}
    </div>
  )
}
