import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-[auto_auto] gap-3 md:gap-4 items-start">
            <div className="max-w-xl">
              <p className="text-[#5D8AA8] font-sans text-sm tracking-wide">A bit about me</p>
              <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#F8FAFC]">
                Hello, I'm Ernest
              </h1>
              <div className="mt-6 space-y-4 text-[#94A3B8] leading-relaxed">
                <p>
                  I&apos;m a product designer pursuing a Master's in Information Management and Systems at UC Berkeley. It
                  all started with a design thinking class I took in undergrad and I&apos;ve been hooked ever since. 
                </p>
                <p>
                  Before Berkeley, I worked in healthtech and global health, recently 
                  at the Clinton Health Access Initiative. When not designing, I&apos;m hiking, watching Formula 1 and the Premier 
                  League, or collecting fridge magnets on my trips. 
                </p>
              </div>
            </div>
            <div className="relative flex justify-center md:justify-start">
              <div className="relative aspect-[4/5] w-full max-w-[280px] mx-auto md:max-w-none md:mx-0 md:w-72 rounded-2xl overflow-hidden">
                <Image
                  src="/images/IMG_0380.jpg"
                  alt="Ernest at Grand Canyon"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
