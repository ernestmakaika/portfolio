"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinkClass = "text-sm text-[#94A3B8] hover:text-[#5D8AA8] transition-colors"

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-[#0A1628]/80 backdrop-blur-md border-b border-[#1E3A5F]/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-[#F8FAFC] font-semibold hover:text-[#5D8AA8] transition-colors">
          ernest.
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href={isHome ? "#work" : "/#work"}
            className={navLinkClass}
          >
            Projects
          </Link>
          <Link href="/about" className={navLinkClass}>
            About
          </Link>
          <Link href="#contact" className={navLinkClass}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
