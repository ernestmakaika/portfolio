import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navbar />

      <section className="pt-32 pb-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#5D8AA8] font-mono text-sm tracking-wide">About Me</p>
              <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#F8FAFC]">
                Designer who cares about impact
              </h1>
              <div className="mt-6 space-y-4 text-[#94A3B8] leading-relaxed">
                <p>
                  I&apos;m a product designer based in Accra, Ghana, with a focus on creating accessible,
                  human-centered digital experiences. I believe great design should work for everyone.
                </p>
                <p>
                  My background in Human-Computer Interaction drives me to deeply understand user needs
                  before jumping into solutions. I&apos;m particularly interested in assistive technology and
                  designing for underserved communities.
                </p>
                <p>
                  When I&apos;m not designing, you&apos;ll find me exploring new music, reading about emerging
                  technologies, or mentoring aspiring designers.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <a href="#" className="text-[#5D8AA8] hover:text-[#7BA3B8] transition-colors">LinkedIn</a>
                <span className="text-[#1E3A5F]">•</span>
                <a href="#" className="text-[#5D8AA8] hover:text-[#7BA3B8] transition-colors">Twitter</a>
                <span className="text-[#1E3A5F]">•</span>
                <a href="#" className="text-[#5D8AA8] hover:text-[#7BA3B8] transition-colors">Dribbble</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-[#132337] border border-dashed border-[#1E3A5F] overflow-hidden flex items-center justify-center">
                <span className="text-sm text-[#64748B]">Image placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
