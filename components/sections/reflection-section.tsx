import { SectionLabel } from "@/components/section-label"

export function ReflectionSection() {
  return (
    <section className="py-16 bg-[#0A1628] border-y border-[#5D8AA8]/10">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>Reflection</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-[1.2] text-[#F8FAFC]">
          What did I learn from this work?
        </h2>

        <p className="mt-6 text-base leading-relaxed text-[#94A3B8] max-w-2xl">
          Working on Beacon taught me design lessons that are still valuable in my work today.
        </p>

        <div className="mt-12 space-y-8 max-w-2xl">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5D8AA8]/20 flex items-center justify-center">
              <span className="text-lg font-bold text-[#5D8AA8]">1</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#F8FAFC]">Validate early and often</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                  Each iteration revealed gaps in our assumptions—what seemed obvious to us wasn't always what users needed.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#5D8AA8]/20 flex items-center justify-center">
              <span className="text-lg font-bold text-[#5D8AA8]">2</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#F8FAFC]">Partner with users from day one</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                  If I were to do this again, I'd partner with actual blind users right from the beginning. Blindfolded proxies can't represent lived daily experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
