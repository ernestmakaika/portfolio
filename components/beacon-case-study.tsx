import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { OverviewSection } from "@/components/sections/overview-section"
import { ChallengeSection } from "@/components/sections/challenge-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ProcessSection } from "@/components/sections/process-section"
import { NeedfindingSection } from "@/components/sections/needfinding-section"
import { IdeationSection } from "@/components/sections/ideation-section"
import { PrototypingSection } from "@/components/sections/prototyping-section"
import { FinalDesignsSection } from "@/components/sections/final-designs-section"
import { ImpactSection } from "@/components/sections/impact-section"
import { ReflectionSection } from "@/components/sections/reflection-section"
import { ClosingSection } from "@/components/sections/closing-section"
import { Footer } from "@/components/footer"

export function BeaconCaseStudy() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0F172A]">
      <Navbar />
      <div>
        <HeroSection />

        <OverviewSection />

        <ChallengeSection />

        <SolutionSection />

        <HowItWorksSection />

        <FeaturesSection />

        <ProcessSection />

        <NeedfindingSection />

        <IdeationSection />

        <PrototypingSection />

        <FinalDesignsSection />

        <ImpactSection />

        <ReflectionSection />

        <ClosingSection />

        <Footer />
      </div>
    </main>
  )
}
