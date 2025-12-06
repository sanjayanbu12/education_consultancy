import { courseInfo } from "../data"
import { ChevronRight, Menu, Sparkles } from "lucide-react"

export function generateStaticParams() {
  return Object.keys(courseInfo).map((slug) => ({ slug }))
}

export default function CourseInfoPage({ params }: any) {
  const course = courseInfo[params.slug]

  if (!course)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Course not found
      </div>
    )

  return (
    <div className="min-h-screen w-full bg-[#f5f8ff] text-[#1a2a3a]">

      {/* ------------------------------------------------ */}
      {/* HEADER (Reduced spacing) */}
      {/* ------------------------------------------------ */}
      <header className="py-14 relative overflow-hidden bg-white">

        {/* Floating Blobs */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#0E74D2]/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#0E74D2]/5 rounded-full blur-xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6edf5_1px,transparent_1px),linear-gradient(to_bottom,#e6edf5_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative max-w-5xl mx-auto px-6">

          {/* Label */}
          {/* <div className="flex items-center gap-2 text-[#0E74D2] uppercase text-[11px] font-semibold tracking-wider">
            <Sparkles className="w-4 h-4" />
            Course Details
          </div> */}

          {/* Title */}
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-[#1a365d]">
            {course.title.split("–")[0].trim()}
            <br />
            {course.title.split("–")[1] && (
              <span className="text-[#0E74D2]">
                {course.title.split("–")[1]}
              </span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-base md:text-lg text-[#4a5568] max-w-2xl leading-relaxed">
            {course.subtitle}
          </p>
        </div>
      </header>

      {/* ------------------------------------------------ */}
      {/* TABLE OF CONTENT – tighter spacing */}
      {/* ------------------------------------------------ */}
      <section className="max-w-5xl mx-auto px-6 mt-10">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-[#0E74D2]/10 relative">

          <div className="absolute left-0 top-0 w-1.5 h-full bg-[#0E74D2]/70 rounded-l-2xl" />

          <div className="flex items-center gap-2 text-lg font-semibold text-[#1a365d] mb-4">
            <Menu className="w-5 h-5 text-[#0E74D2]" />
            Key Sections
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-[#4a5568]">
            {[
              "Overview",
              "Eligibility",
              "Course Duration",
              "Syllabus",
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

      {/* ------------------------------------------------ */}
      {/* MAIN ARTICLE – Reduced vertical spacing */}
      {/* ------------------------------------------------ */}
      <article className="max-w-5xl mx-auto px-6 mt-14 space-y-20">

        {/* OVERVIEW */}
        <Section title="Overview">
          <IntroParagraph text={course.overview} />
        </Section>

        {/* ELIGIBILITY */}
        <Section title="Eligibility Criteria">
          <div className="bg-[#eef5ff] p-5 rounded-xl border border-[#0E74D2]/10">
            <ul className="space-y-2 text-[15px] text-[#1a2a3a]">
              {course.eligibility.map((el: any, i: number) => (
                <li key={i}>• {el}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* DURATION */}
        <Section title="Course Duration">
          <Card className="bg-[#eef5ff] border-[#0E74D2]/10 text-[16px]">
            {course.duration}
          </Card>
        </Section>

        {/* SYLLABUS */}
        <Section title="Syllabus Snapshot">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.syllabus.map((sy: string, i: number) => (
              <Card key={i}>{sy}</Card>
            ))}
          </div>
        </Section>

        {/* CAREER */}
        <Section title="Career Opportunities">
          <ul className="space-y-2 text-lg text-[#4a5568]">
            {course.careers.map((c: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#0E74D2]" />
                {c}
              </li>
            ))}
          </ul>
        </Section>

        {/* FUTURE */}
        <Section title="Future Scope & Trends">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.future.map((f: string, i: number) => (
              <Card key={i} className="bg-[#eef5ff] border-[#0E74D2]/20">
                {f}
              </Card>
            ))}
          </div>
        </Section>
      </article>

      {/* ------------------------------------------------ */}
      {/* CTA – Compact and clean */}
      {/* ------------------------------------------------ */}
      <div className="max-w-5xl mx-auto px-6 mt-20 mb-20">
        <div className="p-8 bg-white rounded-2xl shadow-md border border-[#0E74D2]/10 relative">

          <h2 className="text-2xl font-serif font-bold text-[#1a365d]">
            Need Personalized Guidance?
          </h2>

          <p className="mt-2 text-[#4a5568] text-[15px] leading-relaxed">
            Speak with our counselors today and discover the best pathway for your future.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="tel:9578599785"
              className="px-6 py-2.5 rounded-full bg-[#0E74D2] text-white text-sm shadow hover:bg-[#0a5ba8]"
            >
              Call Now
            </a>

            <a
              href="mailto:alhudaeducationalconsultant@gmail.com"
              className="px-6 py-2.5 rounded-full border border-[#0E74D2] text-[#0E74D2] text-sm hover:bg-[#eef5ff]"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------ */
/* COMPONENTS – tighter spacing + cleaner look     */
/* ------------------------------------------------ */

function Section({ title, children }: any) {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-serif font-bold text-[#1a365d]">
        {title}
      </h2>
      {children}
    </section>
  )
}

function IntroParagraph({ text }: any) {
  return (
    <p className="text-lg leading-relaxed text-[#4a5568]">
      <span className="float-left text-5xl mr-3 font-serif text-[#0E74D2]">
        {text.charAt(0)}
      </span>
      {text.slice(1)}
    </p>
  )
}

function Card({ children, className = "" }: any) {
  return (
    <div
      className={`p-5 bg-white border border-[#0E74D2]/10 rounded-xl shadow-sm text-[15px] text-[#1a365d] ${className}`}
    >
      {children}
    </div>
  )
}
