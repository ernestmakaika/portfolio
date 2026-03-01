import Image from "next/image"
import { SectionLabel } from "@/components/section-label"

export function FeaturesSection() {
  return (
    <section className="py-16 bg-[#F3F4F6]">
      <div className="max-w-4xl mx-auto px-6"> 
        <SectionLabel>Features</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-[1.2] text-[#0F172A]">
          Here's a closer look at the key features
        </h2>

        {/* Row 1: GIF left, caption right — same size as clear-directions phone (Row 3) */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/images/beacon-voice.gif"
              alt="Beacon voice interface asking where the user would like to go"
              className="w-full max-w-[440px] h-auto"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#5D8AA8] font-mono">01</span>
            <h3 className="mt-2 text-xl font-semibold text-[#0F172A]">Fully accessible audio interface</h3>
            <p className="mt-3 text-base leading-relaxed text-[#475569]">
              The fully accessible audio interface enables seamless interaction for users through simple voice commands
            </p>
          </div>
        </div>

        {/* Row 2: Caption left, glasses right */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="md:text-center">
            <span className="text-sm font-semibold text-[#5D8AA8] font-mono text-justify">02</span>
            <h3 className="mt-2 text-xl font-semibold text-[#0F172A] text-right">Alerts help avoid obstacles</h3>
            <p className="mt-3 text-base leading-relaxed text-[#475569] text-right">
              Beacon detects obstacles and provides alerts ahead of time to help users <span className="font-bold text-[#0F172A] decoration-[#5D8AA8] decoration-2 underline-offset-4">avoid collisions</span>
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/beacon-glasses.png"
              alt="Beacon smart glasses with embedded cameras for obstacle detection"
              width={922}
              height={418}
              className="w-full max-w-[380px] h-auto"
            />
          </div>
        </div>

        {/* Row 3: Phone left, caption right */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/beacon-crosswalk.png"
              alt="Beacon app showing crosswalk alert and turn-by-turn navigation"
              width={724}
              height={1416}
              className="w-[300px] max-w-full h-auto object-contain"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#5D8AA8] font-mono">03</span>
            <h3 className="mt-2 text-xl font-semibold text-[#0F172A]">Clear directions along the way</h3>
            <p className="mt-3 text-base leading-relaxed text-[#475569]">
              Beacon provides users with clear audio directions along every step of the way
            </p>
          </div>
        </div>

        {/* Row 4: Caption left, two phones right (staggered) */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="md:text-center">
            <span className="text-sm font-semibold text-[#5D8AA8] font-mono">04</span>
            <h3 className="mt-2 text-xl font-semibold text-[#0F172A] text-right">Haptic feedback for safer navigation</h3>
            <p className="mt-3 text-base leading-relaxed text-[#475569] text-right">
              Haptic feedback (vibration) provides an additional layer for safety and awareness of surroundings
            </p>
          </div>
          <div className="flex justify-center items-start gap-3">
            <Image
              src="/images/beacon-cafeteria.png"
              alt="Beacon app showing passing the cafeteria landmark notification"
              width={724}
              height={1416}
              className="w-[45%] h-auto mt-10"
            />
            <Image
              src="/images/beacon-sidewalk.png"
              alt="Beacon app showing uneven sidewalk warning alert"
              width={724}
              height={1416}
              className="w-[45%] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
