import Image from "next/image"
import { SectionLabel } from "@/components/section-label"

export function PrototypingSection() {
  return (
    <section className="py-16 bg-white border-y border-[#5D8AA8]/10">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>Design Exploration</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-[1.2] text-[#0F172A]">
          What interaction pattern works best for users?
        </h2>

        <p className="mt-6 text-base leading-relaxed text-[#475569] max-w-3xl">
          With smart glasses selected, we prototyped to figure out the interaction pattern and form factors that would
          be best for users. Drawing from the patterns we were already familiar with, we designed the first iteration.
          But design critique revealed three key issues
        </p>

        {/* ===== First Iteration ===== */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-[#0F172A]">First iteration</h3>

          {/* Glasses with sensors and earbuds */}
          <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/glasses-first-iteration.png"
                alt="First iteration glasses design with earbuds extending from the temples and a front-facing camera"
                width={854}
                height={628}
                className="w-full max-w-[400px] h-auto"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#0F172A]">Glasses with sensors and earbuds</h4>
              <p className="mt-3 text-base leading-relaxed text-[#475569]">
                Our initial design of the glasses featured earbuds that extended from the temples. Design critique
                revealed earbuds blocked ambient noise, which is actually useful for safer navigation
              </p>
            </div>
          </div>

          {/* Issue callout */}
          <div className="mt-8">
            <p className="text-sm text-[#475569]">One critical issue emerged with the glasses</p>
            <div className="mt-3 flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5D8AA8]/20 text-[#5D8AA8] text-xs font-bold flex items-center justify-center">1</span>
              <p className="text-sm text-[#475569]">The earbuds blocked noise from the surrounding environment</p>
            </div>
          </div>

          {/* Mobile companion app screenshots */}
          <div className="mt-14">
            <div className="flex justify-center">
              <Image
                src="/images/mobile-app-companion.png"
                alt="First iteration mobile app showing Set Up, Visual Preferences, Home, and Voice Assistant screens with numbered usability issues"
                width={2278}
                height={1094}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-base font-semibold text-[#0F172A]">Mobile companion app</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  The first iteration of the app had a visual onboarding flow, touch controls, and a voice-enabled
                  navigation assistant.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5D8AA8]/20 text-[#5D8AA8] text-xs font-bold flex items-center justify-center">2</span>
                  <p className="text-sm text-[#475569]">
                    With small touch targets and a text heavy onboarding, the design felt as if it{"'"}s for sighted users
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5D8AA8]/20 text-[#5D8AA8] text-xs font-bold flex items-center justify-center">3</span>
                  <p className="text-sm text-[#475569]">
                    Unclear entry point for the {"\""}Voice Assistant{"\""} feature and lack of feedback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transition callout */}
        <div className="mt-14 bg-[#F3F4F6] rounded-xl p-5 flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#5D8AA8] flex items-center justify-center">
            <svg className="w-5 h-5 text-[#5D8AA8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm leading-relaxed text-[#475569]">
            Informed by the critique we received, we iterated our designs to address the issues that emerged
          </p>
        </div>

        {/* ===== Second Iteration ===== */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-[#0F172A]">Second iteration</h3>

          {/* Embedded speakers */}
          <div className="mt-8">
            <h4 className="text-base font-semibold text-[#0F172A]">Embedded speakers in the glass temples</h4>
            <p className="mt-2 text-sm leading-relaxed text-[#475569] max-w-md">
              We replaced the earbuds with embedded speakers in glass temples to ensure safety
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Image
              src="/images/glasses-second-iteration.png"
              alt="Second iteration glasses with speakers embedded into glass temples and front-facing camera"
              width={1308}
              height={434}
              className="w-full max-w-[600px] h-auto"
            />
          </div>

          {/* Voice-driven interface + gif */}
          <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h4 className="text-base font-semibold text-[#0F172A]">Redesigned for a voice-driven interaction model</h4>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                We also redesigned the interface for a voice-driven interaction pattern and removed all onboarding,
                immediate access to navigation guidance
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/beacon-voice-white-bg.gif"
                alt="Redesigned voice-first interface showing Hi, where would you like to go?"
                className="w-full max-w-[440px] h-auto"
              />
            </div>
          </div>

          {/* Navigation with crosswalk */}
          <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/beacon-crosswalk-whitebg.png"
                alt="Navigation screen showing crosswalk alert and turn-by-turn directions"
                width={724}
                height={1416}
                className="w-full max-w-[280px] h-auto"
              />
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#0F172A]">
                Incorporated clear audio navigation guidance, haptic feedback, and spatial alerts
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                We redesigned for much safer navigation by including <span className="font-semibold text-[#0F172A]">clear audio directions</span>,{" "}
                <span className="font-semibold text-[#0F172A]">haptic feedback</span> (phone vibrations) to confirm turns and signal obstacles,
                along with spatial cues to help users understand their surroundings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
