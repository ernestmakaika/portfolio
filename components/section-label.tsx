import type React from "react"

interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#5D8AA8]">{children}</span>
}
