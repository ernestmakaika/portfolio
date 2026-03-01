import { SectionLabel } from "@/components/section-label"

const principles = [
  {
    title: "Use multiple forms of feedback",
    description:
      "Provide audio, spatial, and tactile feedback for more accessibility.",
  },
  {
    title: "Let users hear surrounding noise",
    description:
      "Allow users to hear surrounding noise for additional safety.",
  },
  {
    title: "Give users advance warning",
    description:
      "Alert about obstacles in advance for timely and safe response.",
  },
]

export function ImpactSection() {
  return (
    <section className="py-16 bg-[#0A1628] border-y border-[#5D8AA8]/10">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>Impact</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-[1.2] text-[#F8FAFC]">
          Design principles for assistive navigation
        </h2>

        <p className="mt-6 text-base leading-relaxed text-[#94A3B8] max-w-4xl">
          Our design work defined principles for designing assistive navigation that prioritize safety and independence.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-24">
          {principles.map((principle, index) => (
            <div key={principle.title}>
              <span className="text-5xl font-bold text-[#5D8AA8]/20">0{index + 1}</span>
              <h3 className="mt-6 text-lg font-semibold text-[#F8FAFC]">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
