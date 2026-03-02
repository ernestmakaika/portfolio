import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]">
      {/* Solid background */}
      <div className="absolute inset-0 bg-[#0A1628]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(93, 138, 168, 0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(93, 138, 168, 0.3) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#F8FAFC]">
              Beacon
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-[#94A3B8] max-w-lg">
              Empowering blind and low vision users to navigate more independently
            </p>

            {/* Project metadata */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { label: 'Role', value: 'Product Designer' },
                { label: 'Team', value: '2 Contributors' },
                { label: 'Timeline', value: '8 Weeks' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[#5D8AA8] font-sans text-xs mb-2">{item.label}</p>
                  <p className="text-[#F8FAFC] text-sm font-medium whitespace-nowrap">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/images/beacon-mockup.png"
              alt="Beacon app navigation screens showing turn-by-turn directions to Warren Library with obstacle warnings"
              width={668}
              height={606}
              className="w-[340px] md:w-[420px] lg:w-[480px] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
