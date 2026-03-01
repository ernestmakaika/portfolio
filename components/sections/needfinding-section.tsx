import { SectionLabel } from "@/components/section-label"

export function NeedfindingSection() {
  return (
    <section className="py-16 bg-white border-y border-[#5D8AA8]/10">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>Need-finding</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight text-[#0F172A] max-w-3xl">
          Understanding the challenges users face
        </h2>

        <p className="mt-6 text-base leading-relaxed text-[#475569] max-w-4xl">
          {'We started with a broad question: "How might we use technology to empower blind and low vision individuals?" Research helped us narrow down the problem space.'}
        </p>

        {/* Desk Research & Observational Study side by side */}
        <div className="mt-14 grid md:grid-cols-2 gap-12">
          <div className="border-l-4 border-[#5D8AA8] pl-6">
            <h3 className="text-xl font-semibold text-[#0F172A]">Desk Research</h3>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              We found a staggering reality: 80% of our perception relies on sight. For people living with vision loss, moving around can be very difficult, affecting their independence and social life.
            </p>
          </div>
          <div className="border-l-4 border-[#5D8AA8] pl-6">
            <h3 className="text-xl font-semibold text-[#0F172A]">Observational study*</h3>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              {"We conducted an observational study with six participants navigating while blindfolded. We saw quickly how mobility quickly became a problem for participants."}
            </p>
          </div>
        </div>

        {/* Insight callout */}
        <div className="mt-14 bg-[#D6E8F0] rounded-xl p-6">
          <p className="text-base leading-relaxed text-[#475569]">
            <span className="font-semibold text-[#0F172A]">Key insight:</span> Navigation emerged as the most critical challenge. Narrowing down our scope, the question then became: <span className="font-bold text-[#0F172A]">How might we empower visually impaired users to navigate independently?</span>
          </p>
        </div>
      </div>
    </section>
  )
}
