import Image from "next/image"
import { SectionLabel } from "@/components/section-label"

export function SolutionSection() {
  return (
    <section className="py-16 bg-[#F3F4F6]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>Solution</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-[1.2] text-[#0F172A]">
          Real-time guidance for independent navigation
        </h2>

        <p className="mt-6 text-base leading-relaxed text-[#475569] max-w-2xl">
          Beacon features smart glasses and a mobile app companion designed for safer real-time navigation guidance to help users move around with confidence and safety.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6 items-end">
          
          <div>
            <div className="w-full max-w-[280px] mx-auto">
              <Image
                src="/images/beacon-crosswalk.png"
                alt="Beacon mobile companion app showing turn-by-turn navigation to Warren Library"
                width={724}
                height={1416}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center p-6">
              <Image
                src="/images/beacon-glasses.png"
                alt="Beacon smart glasses with embedded camera for real-time obstacle detection"
                width={922}
                height={418}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
