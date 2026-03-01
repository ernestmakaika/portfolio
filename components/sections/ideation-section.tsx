import { SectionLabel } from "@/components/section-label"
import { Check, X } from "lucide-react"

const concepts = [
  { name: "Smart glasses + app", voiceFirst: true, audio: true, obstacle: true, spatial: true },
  { name: "Smart cane with sensors", voiceFirst: false, audio: true, obstacle: true, spatial: false },
  { name: "Mobile audio app", voiceFirst: true, audio: true, obstacle: false, spatial: false },
]

export function IdeationSection() {
  return (
    <section className="py-16 bg-[#F3F4F6]">
      <div className="max-w-4xl mx-auto px-6">
      <SectionLabel>Ideation</SectionLabel>

      {/* Standardized spacing after section label: 16px */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
        Exploring concepts for real-time navigation guidance
      </h2>

      {/* Standardized spacing for body content: 24px */}
      <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-2xl">
        Based on our research, we explored three concepts and evaluated them against four key requirements. Smart glasses with a mobile app companion met all four criteria.
      </p>

      {/* Concept comparison with standardized spacing: 48px */}
      <div className="mt-12 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-medium text-foreground">Concept</th>
              <th className="text-center py-3 px-4 font-medium text-foreground">Voice interaction</th>
              <th className="text-center py-3 px-4 font-medium text-foreground">Audio guidance</th>
              <th className="text-center py-3 px-4 font-medium text-foreground">Obstacle detection</th>
              <th className="text-center py-3 px-4 font-medium text-foreground">Spatial awareness</th>
            </tr>
          </thead>
          <tbody>
            {concepts.map((concept, i) => (
              <tr key={i} className={`border-b border-border ${i === 0 ? "bg-muted/50" : ""}`}>
                <td className="py-3 pr-4 text-foreground">{concept.name}</td>
                <td className="text-center py-3 px-4">
                  {concept.voiceFirst ? (
                    <Check className="w-4 h-4 mx-auto text-foreground" />
                  ) : (
                    <X className="w-4 h-4 mx-auto text-muted-foreground" />
                  )}
                </td>
                <td className="text-center py-3 px-4">
                  {concept.audio ? (
                    <Check className="w-4 h-4 mx-auto text-foreground" />
                  ) : (
                    <X className="w-4 h-4 mx-auto text-muted-foreground" />
                  )}
                </td>
                <td className="text-center py-3 px-4">
                  {concept.obstacle ? (
                    <Check className="w-4 h-4 mx-auto text-foreground" />
                  ) : (
                    <X className="w-4 h-4 mx-auto text-muted-foreground" />
                  )}
                </td>
                <td className="text-center py-3 px-4">
                  {concept.spatial ? (
                    <Check className="w-4 h-4 mx-auto text-foreground" />
                  ) : (
                    <X className="w-4 h-4 mx-auto text-muted-foreground" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </section>
  )
}
