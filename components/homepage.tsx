import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export function Homepage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full text-center md:text-left">
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#F8FAFC]">
            Product Designer
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#94A3B8] max-w-3xl md:max-w-4xl leading-relaxed md:pr-8">
            I am a design thinker currently pursuing my Master's in Information Management and Systems at UC Berkeley with a focus on product design and product management
          </p>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-32 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="space-y-24">
            {/* Project 1 - Beacon */}
            <a href="/beacon" className="group block rounded-2xl focus-visible:outline focus-visible:ring-2 focus-visible:ring-[#5D8AA8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAFAFA]">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative aspect-[4/3] bg-[#0A1628] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5D8AA8]/10 to-[#6B6560]/10 group-hover:from-[#5D8AA8]/20 group-hover:to-[#6B6560]/20 transition-all duration-500" />
                  <Image
                    src="/images/beacon-mock.png"
                    alt="Beacon navigation app showing turn-by-turn directions and crosswalk alerts on two phone screens"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-xs font-medium text-[#5D8AA8] uppercase tracking-wider">Product Design / Accessibility</span>
                  <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-[#0F172A] group-hover:text-[#5D8AA8] transition-colors">Beacon</h3>
                  <p className="mt-4 text-[#64748B] leading-relaxed">
                    Empowering blind and low vision users to get around safely and independently using smart glasses and a navigation assistant app.
                  </p>
                </div>
              </div>
            </a>

            {/* Project 2 - Vantage PM */}
            <a href="#" className="group block rounded-2xl focus-visible:outline focus-visible:ring-2 focus-visible:ring-[#5D8AA8] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAFAFA]">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:order-2 relative aspect-[4/3] bg-[#132337] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5D8AA8]/10 to-[#6B6560]/10 group-hover:from-[#5D8AA8]/20 group-hover:to-[#6B6560]/20 transition-all duration-500" />
                  <Image
                    src="/images/vantage-dashboard.png"
                    alt="Project management dashboard showing welcome message, quick actions, and project cards"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:order-1">
                  <span className="text-xs font-medium text-[#5D8AA8] uppercase tracking-wider">Product Design / Artificial Intelligence</span>
                  <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-[#0F172A] group-hover:text-[#5D8AA8] transition-colors">Vantage</h3>
                  <p className="mt-4 text-[#64748B] leading-relaxed">
                    Streamlining all project context in one place so product managers can focus on work that matters the most.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-[#64748B]">
                    Case study coming soon
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
