import Image from "next/image"
import { SectionLabel } from "@/components/section-label"

export function FinalDesignsSection() {
  return (
    <section className="py-16 bg-[#F3F4F6]"> 
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>Final Designs</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-[1.2] text-[#0F172A]">
          Real-time navigation guidance for blind and low vision users
        </h2>

        <p className="mt-6 text-base leading-relaxed text-[#475569] max-w-3xl">
          Through further design evaluation, we learned clear audio navigation guidance isn{"'"}t enough.
          Our final design has audio and haptics feedback working together to enhance safety.
        </p>

        {/* Glasses with Speaker and Camera annotations */}
        <div className="mt-14 flex justify-center">
          <div className="relative">
            <Image
              src="/images/beacon-glasses.png"
              alt="Final design smart glasses with embedded speaker and front-facing camera"
              width={922}
              height={418}
              className="w-full max-w-[400px] h-auto"
            />
            {/* Speaker label 
            <div className="absolute top-[15%] right-[-60px] md:right-[-80px] flex items-center gap-2">
              <span className="w-16 md:w-20 border-t border-dashed border-[#5D8AA8]" />
              <span className="text-sm text-[#0F172A]">Speaker</span>
            </div>
            */}
            {/* Camera label 
            <div className="absolute top-[45%] right-[-60px] md:right-[-80px] flex items-center gap-2">
              <span className="w-16 md:w-20 border-t border-dashed border-[#5D8AA8]" />
              <span className="text-sm text-[#0F172A]">Camera</span>
            </div>
            */}
          </div>
        </div>

        <p className="mt-6 text-sm text-[#475569] text-center max-w-md mx-auto">
          Smart glasses detect obstacles and deliver all direction guidance.
        </p>

        {/* Two phone screens with side annotations */}
        <div className="mt-16 relative">
          <div className="flex justify-center items-start gap-6">
            {/* Left annotation 
            <div className="hidden lg:flex flex-col items-end justify-center self-center max-w-[200px] text-right">
              <p className="text-sm text-[#475569]">
                Alerts for spatial cues like buildings and landmarks
              </p>
              <span className="mt-2 w-20 border-t border-dashed border-[#5D8AA8]" />
            </div>
            */}

            {/* Crosswalk phone */}
            <Image
              src="/images/beacon-crosswalk.png"
              alt="Navigation screen showing crosswalk alerts and spatial cues for buildings and landmarks"
              width={724}
              height={1416}
              className="w-full max-w-[240px] h-auto"
            />

            {/* Sidewalk/obstacles phone */}
            <Image
              src="/images/beacon-sidewalk.png"
              alt="Navigation screen showing obstacle warnings like uneven sidewalk"
              width={724}
              height={1416}
              className="w-full max-w-[240px] h-auto"
            />

            {/* Right annotation 
            <div className="hidden lg:flex flex-col items-start justify-center self-center max-w-[200px]">
              <span className="mb-2 w-20 border-t border-dashed border-[#5D8AA8]" />
              <p className="text-sm text-[#475569]">
                Warnings for obstacles
              </p>
            </div>*/}
          </div>

          {/* Mobile annotations for small screens
          <div className="lg:hidden mt-6 flex justify-between px-4">
            <p className="text-sm text-[#475569] max-w-[45%]">
              Alerts for spatial cues like buildings and landmarks
            </p>
            <p className="text-sm text-[#475569] max-w-[45%] text-right">
              Warnings for obstacles
            </p>
          </div>*/}
        </div>

        {/* Bottom caption */}
        <p className="mt-10 text-sm text-[#475569] text-center max-w-2xl mx-auto leading-relaxed">
          Audio, haptic, and spatial feedback all work together to help users move around safely.

        </p>
      </div>
    </section>
  )
}
