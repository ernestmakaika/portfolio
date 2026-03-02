export function Footer() {
  return (
    <footer id="contact" className="py-12 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-start gap-4">
        <p className="text-sm font-semibold text-[#F8FAFC]">Contact</p>
        <div className="flex flex-col gap-3">
          <a href="https://www.linkedin.com/in/ernest-makaika" target="_blank" rel="noopener noreferrer" className="text-sm text-[#94A3B8] hover:text-[#5D8AA8] transition-colors">
            LinkedIn
          </a>
          <a href="mailto:emakaika@berkeley.edu" className="text-sm text-[#94A3B8] hover:text-[#5D8AA8] transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
