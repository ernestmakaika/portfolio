import { SectionLabel } from "@/components/section-label"

export function ClosingSection() {
  return (
    <section className="py-20 bg-[#0A1628] hidden">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>Closing</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-[1.2] text-[#F8FAFC]">
          From concept to lasting principles
        </h2>

        <div className="mt-8 max-w-2xl space-y-4">
          <p className="text-base leading-relaxed text-[#94A3B8]">
            Beacon started as a class project but became a foundation for how I think about assistive technology design.
            The core insight—that effective accessibility requires understanding lived experiences, not just imagining
            limitations—has shaped every project since.
          </p>
          <p className="text-base leading-relaxed text-[#94A3B8]">
            While Beacon remains a concept, the principles it uncovered are already influencing real products. As AI and
            wearables continue to advance, the vision of truly independent navigation for visually impaired users feels
            closer than ever.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1E3A5F]">
          <p className="text-sm text-[#5D8AA8]">Thank you for reading</p>
          <p className="mt-2 text-sm text-[#64748B]">
            This project was completed as part of the Human-Computer Interaction course at Ashesi University in December
            2021.
          </p>
        </div>
      </div>
    </section>
  )
}
