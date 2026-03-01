import { SectionLabel } from "@/components/section-label"

export function OverviewSection() {
  return (
     <section id="overview" className="bg-[#FFFFFF] py-16 border-y border-[#5D8AA8]/10">
      <div className="max-w-4xl mx-auto px-6">
      <SectionLabel>Overview</SectionLabel>

      <p className="mt-4 text-base leading-relaxed text-[#0F172A] max-w-3xl md:text-base">
        Beacon was a Human-Computer Interaction class project that reimagines how blind and low vision individuals navigate their surroundings. Through a pair of smart glasses and a navigation companion app, Beacon provides intuitive, real-time guidance needed for safer and independent mobility.
      </p>
      </div>
    </section>
  )
}
