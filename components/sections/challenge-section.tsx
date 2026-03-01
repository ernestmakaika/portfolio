import Image from "next/image"
import { SectionLabel } from "@/components/section-label"

export function ChallengeSection() {
  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-6">
      <SectionLabel>Challenge</SectionLabel>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-[1.2] text-[#0F172A] max-w-3xl">
        How might we support blind and low vision individuals to navigate independently?
      </h2>

      <div className="mt-8 grid md:grid-cols-[1fr_1fr] gap-12">
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-[#0F172A]">
            <span className="font-semibold text-[#0F172A]">Over 285 million people </span> worldwide live with blindness and low vision. Traditional aids, canes and guide dogs, can't catch all hazards like slippery surfaces, overhead obstacles, or landmarks that help with navigation. These gaps make simple tasks like navigating a busy street or finding an entrance needlessly difficult. Life can also feel isolating.
          </p>

        </div>
        <div className="flex flex-col">
          <div className="relative flex-1 min-h-0 w-full overflow-hidden rounded-lg bg-[#F1F5F9]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_290510137-wypPfUK50MY6Z4sKukuH98Kw4ZMRmQ.jpeg"
              alt="A visually impaired person navigating with a guide dog and walking cane"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-xs italic text-[#64748B]">
            Traditional mobility aids have limitations
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}
