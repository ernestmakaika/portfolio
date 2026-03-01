import { SectionLabel } from "@/components/section-label"

export function HowItWorksSection() {
  return (
    <section className="py-16 bg-[#0A1628]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>How Beacon Works</SectionLabel>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-[1.2] text-[#F8FAFC]">
          Simple. Powerful. Empowering
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {/* Voice commands */}
          <div>
            <div className="w-16 h-16 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-[#94B8D0]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 48 48" 
                strokeWidth={3} 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1v45M9 11v25M24 8v31M31 16v15M39 11v25M46 21v5M1 21v5" 
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-[#F8FAFC]">Simple voice commands</h3>
            <p className="mt-3 leading-relaxed text-[#94A3B8] text-base">
              Users say where they'd like to go using simple voice commands
            </p>
          </div>

          {/* Glasses detect */}
          <div>
            <div className="w-16 h-16 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-[#94B8D0]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 56 22" 
                strokeWidth={3.5} 
                xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M24 8a4 4 0 0 1 8 0M52 4h2M52 4c0 12-2 16-10 16s-10-4-10-16c0 0 2-2 10-2s10 2 10 2ZM4 4H2M4 4c0 12 2 16 10 16s10-4 10-16c0 0-2-2-10-2S4 4 4 4Z" 
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-[#F8FAFC]">Glasses detect obstacles</h3>
            <p className="mt-3 leading-relaxed text-[#94A3B8] text-base">
              Glasses detect obstacles and deliver audio for directions, alerts
            </p>
          </div>

          {/* Haptic feedback */}
          <div>
            <div className="w-16 h-16 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-[#94B8D0]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="2" width="14" height="20" rx="3" />
                <path d="M9 19h6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 6l-1 2 1 2-1 2 1 2-1 2 1 2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 6l1 2-1 2 1 2-1 2 1 2-1 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-[#F8FAFC]">Haptics enhance safety</h3>
            <p className="mt-3 leading-relaxed text-[#94A3B8] text-base">
              Vibrations guide users through turns and around obstacles
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
